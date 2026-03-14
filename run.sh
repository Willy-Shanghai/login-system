#!/usr/bin/env bash
set -e
if [ ! -d venv ]; then
  python3 -m venv venv
fi
. venv/bin/activate
pip install -r requirements.txt
nohup python app.py > flask.log 2>&1 &
nohup python -m http.server 8000 > http.log 2>&1 &
echo "Flask running on http://localhost:5000 and static on http://localhost:8000"
