Finished implementing clock and stopwatch features, if have more time, will add alarm feature.
To do alarm
1. add two state properties alarmOn (boolean true, false), setAlarmTime : null
2. when the user set a time set the alarmOn to true, and setAlarmTime to the future time.
3. have a requestAnimationFrame function constantly call back to get the current Time
4. When the current time is equal or greater than the setAlarmTime, trigger action UI action, 
like animate the alarm, turn on a music etc.
5. When the user turn off the alarm, set the alarmOn to false, ans setAlarmTime to null and cancel the
requestAnimationFrame.

To do development:
```
npm install
webpack-dev-server 
```
To build:
```
webpack
```
To run:
```
open build/index.html
```

This app is statically hosted by github at:
http://JpnW.github.io/clock-web-app
