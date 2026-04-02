@echo off
echo.
echo ============================================================
echo  Stellar - Exoplanet Detection  ~  Frontend Dev Server
echo ============================================================
echo.
echo Installing npm dependencies...
cd /d "%~dp0frontend"
call npm install
echo.
echo Starting Vite on http://localhost:5173
echo.
call npm run dev
pause
