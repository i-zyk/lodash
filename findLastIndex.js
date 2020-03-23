// 这个方式类似 _.findIndex， 区别是它是从右到左的迭代集合array中的元素。
// var users = [
//     { 'user': 'barney',  'active': true },
//     { 'user': 'fred',    'active': false },
//     { 'user': 'pebbles', 'active': false }
// ];
   
// _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
// => 2
   
// The `_.matches` iteratee shorthand.
// _.findLastIndex(users, { 'user': 'barney', 'active': true });
// => 0
   
// The `_.matchesProperty` iteratee shorthand.
// _.findLastIndex(users, ['active', false]);
// => 2
   
// The `_.property` iteratee shorthand.
// _.findLastIndex(users, 'active');
// => 0

import util from './util'
let findLastIndex = (array, predicate=_.identity, fromIndex=array.length-1) => {
    if (!array || !array.length) return []
    predicate = util.getIteratee(predicate)
    for (let i = fromIndex; i >= 0; i--) {
        if (predicate(array[i])) {
            return i
        }
    }
    return -1
}