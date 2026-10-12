#!/bin/bash
# Optional starter (double-clicking index.html works too): serves the game on port 8803 and opens it.
cd "$(dirname "$0")"
PORT=8803
echo "Haunted Mansion Escape: http://localhost:$PORT  (keep this window open, Ctrl+C to stop)"
( sleep 1; open "http://localhost:$PORT/index.html" ) &
python3 -m http.server "$PORT" --bind 127.0.0.1
