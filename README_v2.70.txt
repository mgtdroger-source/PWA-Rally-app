STC Recorder v2.70

Base
- STC Recorder v2.69 official-start tracking collection and event-clock timestamps.

Exact acknowledged-record removal
- After Google confirms a tracking report, the Recorder now removes only that exact queued record.
- The phone-side identity now matches Tracking Code.gs v0.13:
  Event ID + Sender ID + Sequence + GPS Time.
- A later test or run may reuse the same sender and sequence with a different GPS time without another valid queued record being removed.
- An exact retry of an already accepted report remains protected from creating a duplicate Google Sheet row.

Retained from v2.69
- Tracking starts only when official start time is reached, not when Begin is selected.
- Each reporting period records the latest valid position with the current official event-clock time.

Retained from v2.68
- Send oldest queued record, wait for Google confirmation, then send the next.
- 15 second request timeout and retry.
- Submission retains network priority.

Unchanged
- STC timing engine and Method 2 / Method P calculations.
- Manual and GPS mode operation.
- Event End and final-control GPS lifecycle.
