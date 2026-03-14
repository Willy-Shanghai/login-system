@echo off
SETLOCAL
if not exist venv (
  python -m venv venv
)
call venv\Scripts\activate.bat
pip install -r requirements.txt
start "Flask" venv\Scripts\python.exe app.py
start "Static" venv\Scripts\python.exe -m http.server 8000
ENDLOCAL
