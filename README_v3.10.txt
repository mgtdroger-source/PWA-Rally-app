STC Recorder PWA v3.10 — Waypoint timing fallback

v3.10 WAYPOINT (WP) FALLBACK
- When a control has a trip line, the existing M2/P timing engine is unchanged.
- Without a trip line, but with waypoint GPS coordinates, collect fixes inside
  100 m and estimate the closest-approach time using a straight-line best fit.
- WP requires usable fixes on both sides of the estimated passing time.
- WP timings are marked method WP in the diagnostic log; no result is invented
  if the GPS evidence is insufficient.
- Controls without either line geometry or waypoint coordinates are logged and
  skipped in Button-mode GPS evidence, leaving manual button timing intact.
- GPS Logger mode requires either line geometry or waypoint coordinates.
- This Recorder accepts GPS centre coordinates in the supplied configuration;
  the current Code.gs v3.36 still needs an update to supply waypoint coordinates
  for controls that have no trip line. Do not field-deploy WP fallback until that
  handoff is updated and road-tested.

Previous release: v3.09 — Virtual Marshal GPS sequence support

v3.09 VIRTUAL MARSHALS
- Marshal geometry can be supplied within controls (type marshal) or in a separate marshals array.
- GPS processes STCs and Marshals together in mapped distance order.
- Marshal crossings use the existing GPS evidence engine; STC buttons remain STC-only.
- Submit includes a separate marshals array with GPS clock time, quality and status.
- The existing server must be updated to create the Marshal configuration and accept the new field.
- Recommended initial STC/Marshal separation: 500 m; field verification required.


Baseline
--------
v3.05 production package.

Changes
-------
1. Start STC evidence remains independent
- Start STC Manual remains the actual button Rally Time.
- Start STC GPS remains the actual mapped GPS crossing Rally Time.
- No GPS evidence is created from the button press.

2. Common post-Start reference in Button mode
- When a Manual Start STC time exists, that Manual Start becomes the common elapsed reference for BOTH later Manual and later GPS STCs.
- This keeps later Button-vs-GPS comparisons on the same timing base while preserving the actual Start STC GPS crossing for audit.

3. Missing Manual Start STC
- Later Manual elapsed values are not manufactured.
- GPS falls back to the actual Start STC GPS crossing, so the GPS audit stream continues and remains available for later review.

4. GPS mode
- GPS elapsed timing continues to use the actual Start STC GPS crossing.

Unchanged
---------
- v3.05 Begin GPS readiness check: Begin -> Starting… -> Running / Retry.
- GPS starts automatically on app open.
- GPS Method 2 and Method P crossing logic.
- Accuracy bands and quality selection.
- 300 m GPS detection gate.
- Button hold/confirmation behaviour.
- Tracking transport and submission format.
- Google/backend schema.

Recommended test
----------------
1. Button mode: record a Start STC button time and cross the Start STC line a few seconds later.
2. Confirm Start STC upload retains both real times independently.
3. At later STCs, press the button on the line crossing and confirm Manual/GPS elapsed values are near-identical because both use the Manual Start as common reference.
4. Repeat with the Start STC button deliberately missed.
5. Confirm later Manual elapsed values remain unavailable while GPS continues using the real Start STC GPS crossing.
6. GPS mode: confirm GPS timing still uses the actual Start STC GPS crossing.

v3.08 GPS FIX TIMING ALIGNMENT
------------------------------
Rally/Atomic Time remains the single official event clock.

PWA GPS fixes now preserve the GPS fix's own position.timestamp instant and
map that instant onto Rally Time by subtracting browser callback delivery lag
from the current Rally clock. This avoids stamping the fix at the later moment
when Chrome delivers the callback.

Unchanged:
- Method 2 crossing geometry/interpolation
- Method P logic
- Start STC hybrid comparison-reference logic from v3.06
- Button timing
- submission/tracking schema
