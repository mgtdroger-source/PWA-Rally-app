STC Recorder PWA v2.49 — complete package

Changes in v2.49:
- Removed the legacy geographic-proximity fallback from GPS timing.
- GPS audit and GPS Logger timing now require a valid mapped/schedule cumulative distance for each GPS-enabled STC.
- The 300 m eligibility gate is based only on mapped/schedule route distance.
- If GPS line data is present but mapped distance is missing, GPS timing for that STC remains disabled.
- Button-only operation remains unchanged when no GPS data is supplied.
- Manual buttons remain available in button mode even if GPS data for an STC is incomplete.
- Existing Method 2 and Method P crossing/detection logic is unchanged.
- index.html, manifest.webmanifest and service-worker.js are aligned to v2.49.
- Cache revision is v2-49-1.

GitHub update files:
- index.html
- manifest.webmanifest
- service-worker.js

The remaining package files are included for a complete deployment.
