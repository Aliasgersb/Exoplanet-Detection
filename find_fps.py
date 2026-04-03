import tensorflow as tf
import numpy as np
import pandas as pd

df = pd.read_csv('exoTest.csv')
X = df[[c for c in df.columns if c.startswith('FLUX.')]].values
means = X.mean(axis=1, keepdims=True)
stds = X.std(axis=1, keepdims=True)
stds[stds==0] = 1
X_norm = ((X - means)/stds).reshape(-1, 3197, 1)

model = tf.keras.models.load_model('cnn_model.keras')
preds = model.predict(X_norm, verbose=0)
pred_labels = (preds >= 0.5).flatten()
true_labels = (df['LABEL'] == 2).values

fps = np.where((true_labels == 0) & (pred_labels == 1))[0]
print("FALSE_POSITIVES_FOUND:", fps.tolist())
