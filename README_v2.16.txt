STC Recorder PWA v2.16 Field Trial - clean rebuild

Clean rebuild from the last tested v2.15 line.

Included in this v2.16 package:
- All version markers aligned to v2.16: HTML title, APP_VERSION, visible version, manifest, service worker cache, README.
- Method P ordered-gate capture retained: -9, -6, -3, +3, +6, +9 for the current [9, 6, 3] configuration.
- Method P distances remain configurable near the top of index.html.
- Active STC uses one explicit activeStcIndex system only.
- Old first-unrecorded-STC active selection behaviour removed.
- Active STC stays on current recorded STC until halfway to the next STC is proven by GPS.
- Halfway check fails safe: no GPS or missing line geometry means no auto-advance.
- Reset restores the same active-STC state as a fresh start while keeping loaded controls.
- Entrant setup details remain fully visible after Begin; no compact/collapse behaviour.
- Method 2 diagnostic display remains visible for field-trial review.
- After the last STC is recorded, the app shows the review/submission network reminder.
