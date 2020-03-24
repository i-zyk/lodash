// 根据 depth 递归减少 array 的嵌套层级
// var array = [1, [2, [3, [4]], 5]];
 
// _.flattenDepth(array, 1);
// => [1, 2, [3, [4]], 5]
 
// _.flattenDepth(array, 2);
// => [1, 2, 3, [4], 5]
let flattenDepth = (array, depth=1) => {
    let length = array == null ? 0 : array.length;
    if (!length) {
      return [];
    }
    return array.reduce( (arr, val) => arr.concat( Array.isArray(val) && depth > 1 ? flattenDepth(val, depth -1) : val ), [] )
}
