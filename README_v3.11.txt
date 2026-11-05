STC Recorder PWA v3.11 — Configuration diagnostics

Changes from v3.10:
- GPS diagnostic CSV now includes a CONFIG_LOADED row at startup, reporting the configuration source (URL JSON, URL file, stored rally package, or fallback), rally/day, control counts, and controls with missing GPS geometry.
- One CONFIG_CONTROL row per control reports its ID, label, type, whether a trip line is present, and its GPS centre coordinates (or none).
- PWA version and service-worker cache revision increased to v3.11.

No changes were made to GPS crossing detection, waypoint timing, virtual Marshal processing, button timing, or result submissions.

Test:
1. Publish the complete v3.11 package to the existing Recorder hosting location.
2. Open the new rally share link using Open with PWA.
3. Export the GPS diagnostic log immediately, without driving.
4. Inspect CONFIG_LOADED and CONFIG_CONTROL rows, or share the CSV for review.
