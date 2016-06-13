export function formatTime(){
  const d = new Date();
  let hr = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();
  let ampm = hr >= 12 ? 'PM' :'AM';
  hr = hr % 12;
  hr = hr == 0 ? 12 : hr;
  min = min < 10 ? `0${min}` : min;
  sec = sec < 10 ? `0${sec}` : sec;
  return `${hr}:${min}:${sec} ${ampm}`;
}

export function formatStopwatch(num){
  let d = new Date(num);
  let millsec = d.getMilliseconds();
  let sec = d.getSeconds();
  let min = d.getMinutes();
  if (millsec < 100 && millsec >= 10) {
    millsec = '0' + millsec;
  } else if (millsec <10){
    millsec = '00' + millsec
  }
  sec = sec < 10 ? '0' + sec : sec;
  min = min < 10 ? '0' + min : min;
  return `${min}:${sec}:${millsec}`;
}

export default {
  formatTime : formatTime,
  formatStopwatch : formatStopwatch
}