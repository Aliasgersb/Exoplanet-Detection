@echo off
echo.
echo ============================================================
echo  Stellar - Exoplanet Detection  ~  Backend Server
echo ============================================================
echo.
echo Installing Python dependencies...
pip install flask flask-cors pandas numpy tensorflow scikit-learn
echo.
echo Starting Flask server on http://localhost:5000
echo.
cd /d "%~dp0"
python backend\app.py
pause
