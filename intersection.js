// 创建唯一值的数组，这个数组包含所有给定数组都包含的元素，使用 SameValueZero进行相等性比较。（注：可以理解为给定数组的交集）

// _.intersection([2, 1], [4, 2], [1, 2]);
// => [2]
let intersection = (...arrays) => {
    if (!arrays || !arrays.length) return []

    let arrs = arrays.map( item => Array.isArray(item) ? item : [] )
    let result = arrs[0]
    for (let i = 1; i < arrs.length; i++) {
        let arrSet = new Set(arrs[i])
        result = result.filter( item => arrSet.has(item) )
    }
    return result
}

export default intersection