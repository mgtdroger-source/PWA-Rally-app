STC Recorder PWA v3.12 — Configuration log retained after Begin

Change from v3.11:
- When Begin or Reset clears the previous run's diagnostic log, the configuration summary and per-control GPS geometry rows are immediately written again.
- This retains CONFIG_LOADED and CONFIG_CONTROL rows in a log exported after starting a run.
- Version and PWA cache revised to v3.12.

GPS timing, VM processing, button recording, and submissions are unchanged.

Test: Open the rally link, enter setup information, Begin, then export the GPS log without driving. The log should contain CONFIG_LOADED and CONFIG_CONTROL entries.
