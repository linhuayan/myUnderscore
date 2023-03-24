/**
 * 防抖函数
 * @param {*} fn 要执行的操作
 * @param {*} delay 延迟执行的毫秒数
 * @returns 返回一个执行函数
 */
// 原则：一个函数做一件事情，一个变量也用于记录一种状态
export default function debounce(fn, delay, immediate = false, resultCallback) {
	// 1.用于记录上一次事件触发的timer
	let timer = null;
  // 当immediate为true时，fn会一直执行，所以用一个变量记录fn是否已经调用
  let isInvoke = false;

  let res;

	// 2.触发事件时执行的函数
	const _debounce = function (...agrs) {
		// 2.1因为一开始timer = null，避免报错
		if (timer) clearTimeout(timer);

		if (immediate && !isInvoke) {
			res = fn.apply(this, agrs);
      isInvoke = true;
			return;
		}

		console.log("_debounce", agrs);
		// 2.2如果有再次触发（更多次触发）事件，那么取消上一次的事件
		timer = setTimeout(() => {
			res = fn.apply(this, agrs);
      resultCallback(res);
			// fn();
			// 触发之后，所有东西再次归零
			timer = null;
      // _debounce真正执行时，所有东西回到最初状态
      isInvoke = false;
		}, delay);
	};

	// 3.给_debounce绑定一个取消的函数
	_debounce.cancel = function () {
		if (timer) clearTimeout(timer);
    // 回到最初状态
    timer = null;
    isInvoke = false;
	};

	return _debounce;
}
