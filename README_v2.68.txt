STC Recorder v2.68

Base
- STC Recorder v2.67 proven Manual/GPS timing baseline.

Tracking queue delivery correction
- Sends the oldest queued tracking record only.
- Waits for Google confirmation before removing that record from the phone queue.
- Immediately continues with the next record after confirmation.
- Adds a 15 second timeout to each tracking request so one unresolved request cannot hold the queue for minutes.
- A failed or timed-out record stays at the front of the queue for the normal 15 second retry.
- Restoring connectivity and returning the page to visible both trigger another queue flush.
- Results submission aborts any in-progress tracking request and retains network priority; the queued record is not lost.
- Google Sheet delivery remains ordered by tracking sequence because only one record is in flight.

Unchanged
- STC timing engine and Method 2 / Method P calculations.
- Manual and GPS mode operation.
- 300 m STC approach gate.
- 90 m Method P evidence and departure windows.
- Event End and final-control GPS lifecycle from v2.67.
