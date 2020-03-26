// 获取数组array中除了最后一个元素之外的所有元素（注：去除数组array中的最后一个元素）。
// _.initial([1, 2, 3]);
// => [1, 2]

let initial = array => {
    // return array.filter( item => item !== array[array.length -1] )
    Array.isArray(array) ? array.pop() : []
    return array
}
