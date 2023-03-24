// import debounce from "./debounce";
import debounce from "./debounce/debouncePromise";

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

// debounceFn的返回结果是一个promise，只需要在then方法中获取结果即可。  

const myDebounceFn = debounce(function(name, age, height){
  console.log('---------', name, age, height);
  return 'hahahha'
}, 1000, false);

myDebounceFn('why', 18, 188).then(res => {
  console.log(res)
})
