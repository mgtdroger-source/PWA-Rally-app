STC Recorder PWA v2.41 - STC recording confirmation buzz

Changes from v2.40
------------------
- Added an audible speaker buzz only after an STC time has been successfully recorded and saved.
- The buzz occurs before the display refreshes to the next STC.
- No buzz is played on first touch, during the hold, on the finger test, or when recording fails.
- Added two settings in GPS_CONFIG:
    stcConfirmBuzzEnabled: true,
    stcConfirmBuzzMs: 200,
- Set stcConfirmBuzzEnabled to false to disable the buzz.
- Change stcConfirmBuzzMs to alter its duration in milliseconds.
- Manual button timing, GPS evidence, and the 300 m GPS detection gate are unchanged.
- Updated app, manifest and service-worker cache versions to v2.41.

Phone note
----------
The buzz uses the phone's media speaker. Audible volume can be affected by media volume, silent/focus settings, Bluetooth routing and browser/device restrictions. Test on the actual rally phone before use.
