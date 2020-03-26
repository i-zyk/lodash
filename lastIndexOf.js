// 这个方法类似 _.indexOf ，区别是它是从右到左遍历array的元素。

// _.lastIndexOf([1, 2, 1, 2], 2);
// => 3
 
// Search from the `fromIndex`.
// _.lastIndexOf([1, 2, 1, 2], 2, 2);
// => 1

let lastIndexOf = (array, value, fromIndex=array.length-1) => {
    
    for ( let i = fromIndex; i >= 0; i-- ) {
        if (array[i] === value) {
            return i
        }
    }
    return -1
}
