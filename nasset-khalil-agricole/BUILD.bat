@echo off
echo ========================================
echo Build du projet pour la production
echo ========================================
echo.
cd /d "%~dp0"
echo Répertoire actuel: %CD%
echo.
echo Construction du projet...
call npm run build
echo.
echo Build terminé! Les fichiers sont dans le dossier 'dist'
echo.
pause
