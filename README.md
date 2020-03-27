# lodash
利用空闲时间实现lodash相关函数，学习lodash封装思想

## pull 函数源码阅读
1. 源码主线： pull.js -> pullAll.js -> basePullAll.js
-> {
    map.js
    baseIndexOf.js      ->  {
        baseFindIndex
        baseIsNaN
        strictIndexOf
    }
    baseIndexOfWith.js
    copyArray.js
}
```
import pullAll from './pullAll.js'

function pull(array, ...values) {
  return pullAll(array, values)
}

export default pull
```
+ pull 函数返回了一个 pullAll 函数,接下来看pullAll

```
import basePullAll from './.internal/basePullAll.js'

function pullAll(array, values) {
  return (array != null && array.length && values != null && values.length)
    ? basePullAll(array, values)
    : array
}

export default pullAll
```
+ pullAll 中 array 不为空 并且 array.length 存在 并且 valuse 不为空 并且 存在values.length 时 返回 basePullAll(array, values) 函数，否则返回 array, 接下来看basePullAll 这个函数是怎么处理的

```
import map from '../map.js'
import baseIndexOf from './baseIndexOf.js'
import baseIndexOfWith from './baseIndexOfWith.js'
import copyArray from './copyArray.js'

<!-- pullAll 引入了 map.js, baseIndexOf.js, baseIndexOfWith.js, copyArray.js -->

function basePullAll(array, values, iteratee, comparator) {
  /**
 * The base implementation of `pullAllBy`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to remove.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns `array`.
 */

  const indexOf = comparator ? baseIndexOfWith : baseIndexOf
  const length = values.length

  let index = -1
  let seen = array

  if (array === values) {
    values = copyArray(values)
  }
  if (iteratee) {
    seen = map(array, (value) => iteratee(value))
  }
  while (++index < length) {
    let fromIndex = 0
    const value = values[index]
    const computed = iteratee ? iteratee(value) : value

    while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
      if (seen !== array) {
        seen.splice(fromIndex, 1)
      }
      array.splice(fromIndex, 1)
    }
  }
  return array
}

export default basePullAll
```

```
function map(array, iteratee) {
  let index = -1
  const length = array == null ? 0 : array.length
  const result = new Array(length)

  while (++index < length) {
    result[index] = iteratee(array[index], index, array)
  }
  return result
}

export default map
```
```
import baseFindIndex from './baseFindIndex.js'
import baseIsNaN from './baseIsNaN.js'
import strictIndexOf from './strictIndexOf.js'

function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex)
}

export default baseIndexOf
```
```
function baseIndexOfWith(array, value, fromIndex, comparator) {
  let index = fromIndex - 1
  const { length } = array

  while (++index < length) {
    if (comparator(array[index], value)) {
      return index
    }
  }
  return -1
}

export default baseIndexOfWith
```
```
function copyArray(source, array) {
  let index = -1
  const length = source.length

  array || (array = new Array(length))
  while (++index < length) {
    array[index] = source[index]
  }
  return array
}

export default copyArray
```
```
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  const { length } = array
  let index = fromIndex + (fromRight ? 1 : -1)

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index
    }
  }
  return -1
}

export default baseFindIndex
```
```
function baseIsNaN(value) {
  return value !== value
}

export default baseIsNaN
```
```
function strictIndexOf(array, value, fromIndex) {
  let index = fromIndex - 1
  const { length } = array

  while (++index < length) {
    if (array[index] === value) {
      return index
    }
  }
  return -1
}

export default strictIndexOf
```