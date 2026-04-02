import os
import sys
import numpy as np
import pandas as pd
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# ─── Paths ───────────────────────────────────────────────────────────────────
BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TEST_CSV       = os.path.join(BASE, "exoTest.csv")
FOLDED_NPY     = os.path.join(BASE, "X_test_folded.npy")
MODEL_PATH     = os.path.join(BASE, "cnn_model.h5")

# ─── Load data once on startup ────────────────────────────────────────────────
print("Loading exoTest.csv …", flush=True)
df_test = pd.read_csv(TEST_CSV)

# The CSV has a LABEL column (2 = planet, 1 = not planet)
# Convert to binary: 1 = planet, 0 = not planet
df_test["true_label"] = (df_test["LABEL"] == 2).astype(int)

# Flux values are columns FLUX.1 … FLUX.3197
flux_cols = [c for c in df_test.columns if c.startswith("FLUX.")]
X_test_raw = df_test[flux_cols].values.astype(np.float32)  # (570, 3197)

# MEMORY OPTIMISATION: Drop flux columns from DataFrame once they are in the array
# This saves ~30MB of RAM.
df_test.drop(columns=flux_cols, inplace=True)
import gc
gc.collect()

print("Loading X_test_folded.npy …", flush=True)
X_test_folded = np.load(FOLDED_NPY).astype(np.float32)     # (570, 200)

# Z-score normalise raw flux row-wise (mirrors training preprocessing)
means = X_test_raw.mean(axis=1, keepdims=True)
stds  = X_test_raw.std(axis=1, keepdims=True)
stds[stds == 0] = 1
X_test_norm = (X_test_raw - means) / stds

true_labels = df_test["true_label"].values  # (570,)

# ─── Architecture Note ───────────────────────────────────────────────────────
# Model inference is executed entirely client-side via ONNX Web Runtime (WASM).
# This backend serves only as a lightweight Data API (/stars, /star/<index>).
# No TensorFlow or heavy ML libraries are required on this server.

# ─── Routes ──────────────────────────────────────────────────────────────────

@app.route("/stars", methods=["GET"])
def get_stars():
    """Return metadata for all 570 test stars."""
    stars = []
    for i, label in enumerate(true_labels):
        stars.append({
            "index": int(i),
            "true_label": int(label),
            "is_planet": bool(label == 1),
        })
    return jsonify(stars)

@app.route("/star/<int:index>", methods=["GET"])
def get_star(index):
    """Return raw flux, folded flux, and label for one star."""
    if index < 0 or index >= len(true_labels):
        return jsonify({"error": "Index out of range"}), 404

    return jsonify({
        "index": index,
        "true_label": int(true_labels[index]),
        "is_planet": bool(true_labels[index] == 1),
        "raw_flux": X_test_norm[index].tolist(),
        "folded_flux": X_test_folded[index].tolist(),
    })


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=False)
