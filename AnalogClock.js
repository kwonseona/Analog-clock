const AnalogClock = $container => {
    $container.innerHTML = 
    `
    <div class="hand hour"></div>
    <div class="hand minute"></div>
    <div class="hand second"></div>
    <div class="time time1">|</div>
    <div class="time time2">|</div>
    <div class="time time3">|</div>
    <div class="time time4">|</div>
    <div class="time time5">|</div>
    <div class="time time6">|</div>
    <div class="time time7">|</div>
    <div class="time time8">|</div>
    <div class="time time9">|</div>
    <div class="time time10">|</div>
    <div class="time time11">|</div>
    <div class="time time12">|</div>
    `
  };
  
  export const setTime = () => {
    let now = new Date();
    let hour = now.getHours() * 30;
    let minute = now.getMinutes() * 6;
    let second = now.getSeconds() * 6;
    
    document.querySelectorAll(".hour").forEach(function (container) {
        container.style.cssText = `--deg: ${hour}`;
    });

    document.querySelectorAll(".minute").forEach(function (container) {
        container.style.cssText = `--deg: ${minute}`;
    });

    document.querySelectorAll(".second").forEach(function (container) {
        container.style.cssText = `--deg: ${second}`;
    });
 };
  
export default AnalogClock;

