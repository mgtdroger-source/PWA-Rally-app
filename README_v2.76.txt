STC Recorder v2.76

Base
- STC Recorder v2.74 full pack.

Tracking lifecycle corrections
- Begin prepares a fresh empty Tracking run but does not create records during the countdown.
- Tracking starts only when the official start time is reached and elapsed time begins accumulating.
- Each report remains in the local Track queue only until Google confirms its upload.
- Successful Submit stops new Tracking records, then drains only the existing queue until Track returns to 0.
- Automatic Event End uses the same close-and-drain behaviour.
- A completed run stays closed after the app is reopened; reopening may deliver only still-pending records.
- Reset Run stops Tracking immediately and clears the queue, sequence, Event End and completed-run state.
- A new Begin starts with Track 0 and a new sequence.

Retained from v2.74
- Button mode requires “I have checked my results” before Submit.
- GPS mode remains review-only with locked GPS results and no checkbox.

Unchanged
- STC timing engine and Method 2 / Method P calculations.
- Manual/Button and GPS mode timing operation.
- Tracking report payload format and Google endpoint.
