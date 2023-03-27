// 防抖
// import debounce from "./debounce";
// import debounce from "./debounce/debouncePromise";

// const input = document.querySelector('.input');
// const cancel = document.querySelector('.cancel');
// let count = 0;
// const debounceFn = debounce(
// 	function (agrs) {
// 		// console.log(this.value, count++);
// 		console.log(this, agrs.target.value, count++);
// 		return "hahaha";
// 	},
// 	2000,
// 	true
// );

// input.oninput = debounceFn;
// cancel.onclick = function() {
//   debounceFn.cancel();
// }

// oninput事件绑定的debounce函数的返回值即_debounce函数，所以event事件对象也是传递给_debounce函数，而_debounce的this也是input。
// 箭头函数的this是undefined，所以fn函数获取的this是undefined，往上找_debounce的this。
  
// const myDebounceFn = debounce(function(name, age, height){
//   console.log('---------', name, age, height);
//   return 'hahahha'
// }, 1000, false);

// debounceFn的返回结果是一个promise，只需要在then方法中获取结果即可。
// myDebounceFn('why', 18, 188).then(res => {
//   console.log(res)
// })

// 节流
import throttle from "./throttle";

const input = document.querySelector('.input');
const cancel = document.querySelector('.cancel');
let count = 0;
const throttleFn = throttle(
	function (args) {
		// console.log(this.value, count++);
		console.log(this, args, count++);
	},
	1000
);

input.oninput = throttleFn