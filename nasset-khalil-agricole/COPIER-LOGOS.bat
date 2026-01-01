@echo off
echo ========================================
echo Copie des logos dans le dossier public
echo ========================================
echo.

cd /d "%~dp0"

echo Copie de logo.png...
copy /Y "..\logo.png" "public\logo.png"

echo Copie de LOGO2.png vers logo2.png...
copy /Y "..\LOGO2.png" "public\logo2.png"

echo.
echo ========================================
echo Logos copiés avec succès!
echo ========================================
echo.
echo Appuyez sur une touche pour continuer...
pause >nul
