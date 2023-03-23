import AnalogClock from './AnalogClock.js';
import { setTime } from './AnalogClock.js';

document.querySelectorAll('.analog-clock').forEach(AnalogClock);


setInterval(() => {
    setTime()
}, 1000)

setTime(); // 새로고침 시 시계 이동 방지

