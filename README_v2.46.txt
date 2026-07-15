STC Recorder PWA v2.46 — corrected complete package

Changes in v2.46:
- Rally Start Time completes and formats after a valid six-digit entry.
- The keypad closes after completion; the keyboard right arrow also completes the entry.
- Begin closes any remaining keypad and locks Rally Number, Surname and Rally Start Time as read-only while running.
- While running, the Setup help line changes to: “To change setup details, select Reset App.”
- The separate note beneath Reset App has been removed.
- Reset unlocks Setup, retains rally number/name, clears start time and restores the original Setup help line.

Package alignment correction:
- index.html, manifest.webmanifest and service-worker.js are all aligned to app version v2.46.
- Cache revision is v2-46-2 to force replacement of the earlier incomplete v2.46 cache.
- Manifest and service-worker query references are aligned to v2.46.2.

GitHub update files — replace all three together:
- index.html
- manifest.webmanifest
- service-worker.js

Support files included unchanged:
- icon-192.png
- icon-512.png
- stc-config.json
- STC_Recorder_GPS_Timing_Settings_Laymans_Guide_v2.41.txt
