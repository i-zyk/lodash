// 获取数组 array 的第一个元素
// _.head([1, 2, 3]);
// => 1
 
// _.head([]);
// => undefined

let head = array => {
    return  Array.isArray(array) && array.length ? array[0] : undefined
}
