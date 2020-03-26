// 这个方法类似 _.intersection，区别是它接受一个 comparator 调用比较arrays中的元素。
// 结果值是从第一数组中选择。comparator 会传入两个参数：(arrVal, othVal)。

// var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
// var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
 
// _.intersectionWith(objects, others, _.isEqual);
// => [{ 'x': 1, 'y': 2 }]

import flatten from './flatten'
import intersection from './intersection'

let intersectionWith = (...arrays) => {
    if (!arrays || !arrays.length) {
      return []
    }
    let comparator = typeof arrays[arrays.length - 1] === "function" ? arrays.pop() : undefined
    if (!comparator) {
      return intersection(flatten(arrays))
    }
    let arrayMapped = arrays.map(arr => (Array.isArray(arr) ? arr : []))
    let result = arrayMapped[0]
    for (let i = 1; i < arrayMapped.length; i++) {
      if (!result.length) {
        return result
      }
      result = result.filter(
        x => arrayMapped[i].findIndex(y => comparator(x, y)) !== -1
      )
    }
    return result
  }