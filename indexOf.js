// 使用 SameValueZero 等值比较，返回首次 value 在数组array中被找到的 索引值， 如果 fromIndex 为负值，将从数组array尾端索引进行匹配。
// _.indexOf([1, 2, 1, 2], 2);
// => 1
 
// Search from the `fromIndex`.
// _.indexOf([1, 2, 1, 2], 2, 2);
// => 3


let indexOf = (array, value, fromIndex=0) => {
    let oIndex
    fromIndex < 0 ? oIndex = fromIndex + array.length : oIndex = fromIndex


    for ( let i = oIndex; i < array.length; i++ ) {
        if (array[i] === value) {
            return i
        } 
    }
}