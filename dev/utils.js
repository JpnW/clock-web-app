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

export default {
  formatTime : formatTime
}