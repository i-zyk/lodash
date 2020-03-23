// 创建一个切片数组，去除array中从起点开始到 predicate 返回假值结束部分。predicate 会传入3个参数： (value, index, array)。
    
// var users = [
//     { 'user': 'barney',  'active': false },
//     { 'user': 'fred',    'active': false },
//     { 'user': 'pebbles', 'active': true }
// ];
   
// _.dropWhile(users, function(o) { return !o.active; });
// => objects for ['pebbles']
   
// The `_.matches` iteratee shorthand.
// _.dropWhile(users, { 'user': 'barney', 'active': false });
// => objects for ['fred', 'pebbles']
   
// The `_.matchesProperty` iteratee shorthand.
// _.dropWhile(users, ['active', false]);
// => objects for ['pebbles']
   
// The `_.property` iteratee shorthand.
// _.dropWhile(users, 'active');
// => objects for ['barney', 'fred', 'pebbles']


import util from './util.js'

let dropWhile = (array, predicate=util.identity) => {
    if (!array || !array.length) return [];
    predicate = util.getIteratee(predicate, 3);
    for (let i = 0; i < array.length; i++) {
      if (!predicate(array[i], i, array)) {
        // 只需要一个为false,就把前面的元素去除
        return array.slice(i);
      }
    }
    return [];
}