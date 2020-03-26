// 将 array 中的所有元素转换为由 separator 分隔的字符串。

// _.join(['a', 'b', 'c'], '~');
// => 'a~b~c'

let join = (array, separator=',') => {
    let nativeJoin = Array.prototype.join
    return array === null ? '' : nativeJoin.call(array, separator)
}