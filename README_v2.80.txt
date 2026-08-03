STC Recorder v2.80

Full PWA pack for GitHub deployment.

v2.80 scoped changes
- Rebuilt Tracking delivery around one queue worker.
- Removed the permanent 15-second retry interval.
- Retains one active Tracking request at a time.
- Successful acknowledgement removes the exact report and continues immediately.
- Failed or timed-out request keeps the oldest report and schedules one retry after 5 seconds.
- A deliberate wake such as online, resume, Event End or Submit completion cancels a pending retry and starts one controlled flush.
- Tracking request timeout remains 30 seconds.
- Routine second-by-second GPS FIX diagnostic logging remains off.
- GPS timing, 30-second report creation, Event End, Submit priority and post-Submit queue draining are otherwise unchanged.

Deployment
Replace the existing GitHub PWA files with all files in this pack.
After GitHub updates, open the rally link and confirm:
STC Recorder v2.80 / cache v2-80-1
