STC Recorder PWA v3.13 — STC 1 / STC 2 road-test diagnostics

Changes from v3.12:
- STC12_GPS_FIX rows record each GPS fix within 450 m of STC 1 or STC 2, with coordinates, accuracy, speed, distances to both controls, active GPS control, and waypoint/approach-gate status.
- WP_FIT_DIAGNOSTIC records the waypoint-radius exit distance, collected and usable fixes, and whether the closest-approach calculation was accepted.
- Existing CONFIG_LOADED and CONFIG_CONTROL rows remain available.
- Version and PWA cache revised to v3.13.

The GPS timing calculations, trip-line Method 2 / Method P processing, waypoint timing, control sequencing, button behaviour, and submissions have NOT been changed.

Test: Publish the complete v3.13 package, open the rally link and confirm version 3.13. Begin before approaching STC 1. Drive past STC 1 (radius) and STC 2 (trip line), export the CSV, and share it for analysis.
