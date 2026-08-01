STC Recorder v2.71

Base
- STC Recorder v2.70 exact acknowledged-record removal baseline.

Reset Run tracking recovery
- Reset Run now clears the completed Event End marker for the current event, day and entrant.
- The same entrant can begin a fresh run after Reset without changing Rally number or event identity.
- Pending tracking reports remain queued on the phone.
- The tracking sequence counter is preserved so report identity remains unique.
- Only the completed-run state is cleared; STC controls and entrant identity remain loaded as before.

Retained from v2.70
- Send the oldest queued tracking record, wait for Google confirmation, then remove only that exact acknowledged record.
- Tracking duplicate identity matches Code.gs v0.13: Event ID + Sender ID + Sequence + GPS Time.

Unchanged
- STC timing engine and Method 2 / Method P calculations.
- Manual and GPS mode operation.
- Official-start tracking, Event End detection and final-control GPS lifecycle.
