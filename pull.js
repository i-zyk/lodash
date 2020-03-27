// 移除数组array中所有和给定值相等的元素，使用 SameValueZero 进行全等比较。

// 注意： 和 _.without 方法不同，这个方法会改变数组。使用 _.remove 从一个数组中移除元素。

// var array = [1, 2, 3, 1, 2, 3];
 
// _.pull(array, 2, 3);
// console.log(array);
// => [1, 1]
var array = [1, 2, 3, 1, 2, 3];
let _pull = ( array, ...values ) => {
   values.map( item => {
       return array.filter( val => val !== item )
   } )
}
console.log ( pull(array, 2, 3) );
console.log(array);

