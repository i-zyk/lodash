// 减少一级array嵌套深度。
// _.flatten([1, [2, [3, [4]], 5]]);
// => [1, 2, [3, [4]], 5]
let flatten = array => {
    let arr = []
    for ( let i = 0; i < array.length; i++ ) {
        Array.isArray(array[i]) ?  array[i].map( item => arr.push(item) ) : arr.push(array[i])
    }
    return arr
}
export default flatten