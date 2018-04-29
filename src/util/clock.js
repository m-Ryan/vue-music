const clock = function(timeStamp){
  let seconds  = timeStamp / 1000;
  let minutes = Math.floor(seconds / 60)>9?Math.floor(seconds / 60): '0'+Math.floor(seconds / 60);
  return minutes+ ':'+  Math.floor(seconds % 60);
}
export default clock;
