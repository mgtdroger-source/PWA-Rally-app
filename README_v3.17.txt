STC Recorder PWA v3.17 — Rally Time Begin correction

Based on corrected v3.16. Removed the old Begin restriction that required a manual Atomic synchronisation. Begin now uses the active Rally Time reference (phone network-set time by default, or manually corrected Atomic time).

The existing Sync/Synced/Exit UI logic already keeps button unlock state separate from the clock offset; no timing engine or GPS changes were necessary. Existing GPS readiness, entrant details, STC and VM timing, tracking and Google submissions remain untouched.

Updated all v3.17 version strings, service-worker cache and manifest reference.
