// 这个方法类似 _.intersection，区别是它接受一个 iteratee 调用每一个arrays的每个值以产生一个值，
// 通过产生的值进行了比较。结果值是从第一数组中选择。iteratee 会传入一个参数：(value)。

// _.intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor);
// => [2.1]
 
// The `_.property` iteratee shorthand.
// _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }]


import util from './util'

let intersectionBy = (...arrays) => {
    if (!arrays || !arrays.length) return []
    let iteratee = Array.isArray(arrays[arrays.length -1]) ? util.identity : util.getIteratee(arrays.pop(), 2)
    let arrayMapped = arrays.map(arr => (Array.isArray(arr) ? arr : []))
    if (arrayMapped.length === 1) {
        return arrayMapped[0].length ? arrayMapped[0] : []
    }
    let result = arrayMapped[0]
    for (let i = i; i < arrayMapped.length; i++) {
        if (!result.length) return result
        let arraySet = new Set(arrayMapped[i].map(iteratee))
        result = result.filter(val => arraySet.has(iteratee(val)))
    }
    return result
}