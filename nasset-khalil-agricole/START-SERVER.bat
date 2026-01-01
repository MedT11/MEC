@echo off
echo ========================================
echo SOCIÉTÉ NASSET ^& KHALIL DE COMMERCE
echo Démarrage du serveur de développement
echo ========================================
echo.
cd /d "%~dp0"
echo Répertoire actuel: %CD%
echo.
echo Installation des dépendances (si nécessaire)...
call npm install
echo.
echo Démarrage du serveur...
echo.
echo Le site sera accessible à: http://localhost:3000
echo.
echo Appuyez sur Ctrl+C pour arrêter le serveur
echo.
call npm run dev
pause
