// 获取array中的最后一个元素。

// _.last([1, 2, 3]);
// => 3

let last = array => {
    let len = array === null ? 0 : array.length
    return len ? array[length -1] : undefined
}
