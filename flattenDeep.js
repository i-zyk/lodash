// 将array递归为一维数组。
// _.flattenDeep([1, [2, [3, [4]], 5]]);
// => [1, 2, 3, 4, 5]

let flattenDeep = array => {  
    return [].concat( ...array.map( item => Array.isArray(item) ? flattenDeep(item) : item  ) )
}
// export default flattenDeep