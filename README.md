# Stellar — Exoplanet Detection

A machine learning web application for detecting exoplanets from NASA Kepler Space Telescope data. The app runs entirely in the browser — no backend server, no API calls. The model runs locally using WebAssembly.

Live: [stellar-seven.vercel.app](https://stellar-seven.vercel.app)

---

## What it does

The Kepler telescope measured the brightness of over 150,000 stars every 30 minutes for four years. When a planet passes in front of its star, the star's brightness dips slightly and periodically — a signature called a transit. This project trains convolutional neural networks to detect that signature in raw brightness measurements.

The dataset contains 5,087 stars in training and 570 in the test set. Of the 570, five are confirmed planet hosts. The model correctly identifies two of them.

---

## How the model works

Five models were trained and evaluated:

| Model | Input | Architecture | Recall | False Positives |
|---|---|---|---|---|
| Random Forest | Raw flux | 100 trees | 0 / 5 | 0 |
| CNN v1 | Raw flux | 2-layer CNN | 2 / 5 | 3 |
| CNN v2 | BLS phase folded | 3-layer CNN | 1 / 5 | 0 |
| CNN v3 | Custom phase folded | 3-layer CNN | 1 / 5 | 3 |
| CNN v4 | Custom phase folded | 2-layer CNN | 2 / 5 | 6 |

CNN v1 was selected. It achieved the same recall as the most complex model (CNN v4) with half the false positive rate. The more sophisticated models used phase folding — a technique that folds the light curve on the planet's orbital period to amplify the transit signal. Phase folding failed on this dataset because the observation window (~66 days per star) is too short for the period estimation algorithm (BLS) to reliably find the true period. CNN v1 avoided this entirely by working on the raw signal.

The key lesson: the ceiling here is the data, not the model.

---

## Architecture

The application is fully serverless. There is no Flask backend, no Python process running anywhere.

- The trained model is exported to ONNX and compressed to ~13 MB
- All 570 test stars are pre-processed and exported to static JSON files
- At runtime, the model runs in the browser via ONNX Runtime Web (WebAssembly)
- Everything is served as static files through Vercel's CDN

This means the site loads fast, has no cold start time, and costs nothing to run at scale.

---

## Running locally

```bash
cd frontend
npm install
npm run dev
```

The frontend runs at `http://localhost:5173`. No backend is needed.

---

## Dataset and research files

- Dataset: [NASA Kepler Labeled Time Series — Kaggle](https://www.kaggle.com/datasets/keplersmachines/kepler-labelled-time-series-data)
- Colab notebooks, trained models, preprocessed arrays: [Google Drive](https://drive.google.com/drive/folders/1tGs-ZiNkPQQ-GACaFslbuIcJZjXpBZdl?usp=sharing)

---

## Stack

Python, TensorFlow/Keras, ONNX, React, Vite, Vercel

---

## Author

Aliasger Bhabhrawala — second year, BITS Pilani (MSc Physics + BTech Manufacturing)

[LinkedIn](https://www.linkedin.com/in/aliasger-bhabhrawala) · [aliasgersb@gmail.com](mailto:aliasgersb@gmail.com)
