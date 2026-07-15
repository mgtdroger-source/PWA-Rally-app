STC Recorder PWA v2.45 - Setup lock and start-time keypad refinement

Changes in v2.45:
- Rally Start Time completes and formats after a valid six-digit entry.
- The keypad closes once the start time is complete, and the keyboard right arrow also completes the entry.
- Begin closes any remaining keypad and locks Rally Number, Surname and Rally Start Time as read-only while running.
- Setup remains visible for reference during the run.
- Reset App unlocks Setup, keeps rally number/name and clears start time.
- While running, the Reset guidance reads: “To change setup details, select Reset App.”
- Updated app, manifest and service-worker cache versions to v2.45.

GitHub update files:
- index.html
- manifest.webmanifest
- service-worker.js

Package support files are included unchanged:
- icon-192.png
- icon-512.png
- stc-config.json
- STC_Recorder_GPS_Timing_Settings_Laymans_Guide_v2.41.txt
