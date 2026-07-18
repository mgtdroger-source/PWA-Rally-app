STC Recorder v2.51 — sequential GPS logic tidy

Main changes
- GPS remains warm while the app is open.
- Begin arms the run; GPS timing/logging starts at the entered start time.
- Schedule/accumulated distance is no longer used to gate GPS controls.
- Only the next expected STC can record.
- The active STC line arms within 300 m straight-line distance to the line segment.
- In GPS Logger mode, entering the next STC approach zone marks an unresolved current STC MISSED and advances one control.
- Button mode remains button-led; GPS audit does not auto-advance the visible control.
- Reset clears run state only and never rebuilds or changes route/control definitions.
- GPS Logger Begin validates that every control has line data.
- Review/submission use mode-specific completeness rules; GPS Logger may submit recorded or explicitly MISSED controls.

Files
- index.html
- manifest.webmanifest
- service-worker.js
- stc-config.json
- icons and guide


v2.51 correction:
- Visible button sequence and GPS audit sequence are independent.
- Button records advance only the UI sequence.
- GPS crossing or next-control recovery advances only the GPS sequence.
- Applies in both Button audit mode and GPS Logger mode.
