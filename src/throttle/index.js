/**
 * @description 节流函数
 * @param fn 执行函数
 * @param interval 时间间隔
 * @param immediate 输入的第一次是否执行
 */
export default function throttle(fn, interval, leading = true, trailing = true) {
  let startTime = 0;
  const _throttle = function (...args) {
    let nowTime = new Date().getTime();
    if (!leading && startTime === 0) {
      startTime = nowTime;
    }
    // if (trialing) {
    //   startTime = 0;
    // }
    let waitTime = interval - (nowTime - startTime);
    if (waitTime <= 0) {
      fn.apply(this, args);
      startTime = nowTime;
    }
  }
  return _throttle;
}

