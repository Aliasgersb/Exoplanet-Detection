import os
import json
import numpy as np
import tensorflow as tf
import pandas as pd

TEST_CSV = "exoTest.csv"
MODEL_PATH = "cnn_model.h5"

print("Loading data...")
df_test = pd.read_csv(TEST_CSV)
flux_cols = [c for c in df_test.columns if c.startswith("FLUX.")]
X_test_raw = df_test[flux_cols].values.astype(np.float32)

means = X_test_raw.mean(axis=1, keepdims=True)
stds  = X_test_raw.std(axis=1, keepdims=True)
stds[stds == 0] = 1
X_test_norm = (X_test_raw - means) / stds

print("Loading model...")
model = tf.keras.models.load_model(MODEL_PATH)

print("Predicting...")
predictions_map = {}
for i in range(len(X_test_norm)):
    flux = X_test_norm[i]
    x = flux.reshape(1, 3197, 1)
    prob = float(model.predict(x, verbose=0)[0][0])
    prediction = int(prob >= 0.5)
    
    predictions_map[i] = {
        "probability": round(prob, 6),
        "prediction": prediction,
        "is_planet_detected": bool(prediction == 1)
    }
    
with open("predictions_cache.json", "w") as f:
    json.dump(predictions_map, f)

print("Saved predictions_cache.json")
