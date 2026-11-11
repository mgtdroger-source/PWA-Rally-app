STC Recorder PWA v3.15 — Rally Time Sync Exit

Based on v3.14 production package.

- Sync is protected in the Synced state. Hold Synced for 1 second to unlock the blue Sync state.
- Exit appears only while Sync is unlocked, directly below the Sync button.
- Sync applies the entered Atomic Target Time and returns to Synced.
- Exit clears Target Time, removes any previous manual correction, restores the phone network-set clock reference, and returns to Synced.
- Exit is hidden again once locked.
- Fixed null atomic-offset detection (null must not count as a completed manual sync).

GPS timing, STC and VM capture, tracking, and Google submissions unchanged.

Note: As in v3.14, the Begin safety check still requires manual atomic synchronisation. After Exit clears it, this guard may block Begin until a new Sync is performed. This version is intended for testing the requested Sync/Exit controls first.
