// 获取array数组的第n个元素。如果n为负数，则返回从数组结尾开始的第n个元素。

// var array = ['a', 'b', 'c', 'd'];
 
// _.nth(array, 1);
// => 'b'
 
// _.nth(array, -2);
// => 'c';

let nth = (array, n=0) => {
    let oN = n >= 0 ? n : n + array.length
    return array[oN]
}

