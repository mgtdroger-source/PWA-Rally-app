STC Recorder PWA v3.04 — Rally Time common reference correction

Baseline
--------
v3.02 full pack.

Purpose
-------
Correct the timing-reference architecture so Rally Time is the one event clock.

Timing contract
---------------
- Atomic Time is used only to set/sync Rally Time.
- Rally Time is the master event time.
- After sync, Rally Time advances from the browser monotonic performance clock.
- Button events and GPS events are both placed on that same Rally Time clock.
- Elapsed time remains Rally event time minus the entered Rally start time.

What was wrong in v3.02
-----------------------
Button timing used device time adjusted by the Rally/Atomic offset.
GPS timing used Location.timestamp and then applied the same Rally/Atomic offset.

On the test phone, Location.timestamp and device wall time were about 1.3 seconds
apart. Applying the Rally offset to both therefore left button and GPS timing on
different absolute clock references.

v3.04 correction
----------------
- Adds a monotonic Rally Time anchor using performance.now().
- Sync establishes the Rally Time anchor.
- Normal Rally Time display/readout uses that monotonic Rally clock.
- GPS fix coordinates still determine the crossing geometry.
- GPS fix event time is now stamped on the same Rally Time clock at receipt,
  instead of treating Location.timestamp as a competing master clock.
- raw Location.timestamp is retained as rawDeviceTime for audit evidence.

Unchanged
---------
- GPS Method 2 crossing geometry.
- Method P evidence/backup logic.
- accuracy bands and quality selection.
- 300 m GPS detection gate.
- button hold/confirmation behaviour.
- Start STC behaviour.
- tracking logic.
- submission format.
- UI layout and normal workflow.

Test
----
1. Sync Rally Time deliberately away from the phone clock.
2. Enter Rally start time.
3. Run with Manual/Button timing and GPS audit.
4. Compare button and GPS elapsed values.
5. The previous fixed offset caused by phone wall-clock vs GPS timestamp should
   no longer be present.

Important
---------
This bake corrects the PWA timing-reference layer only.
The Android native crossing engine must later be aligned to the same Rally Time
contract separately.
