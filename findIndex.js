// 该方法类似_.find，区别是该方法返回第一个通过 predicate 判断为真值的元素的索引值（index），而不是元素本身。
// var users = [
//     { 'user': 'barney',  'active': false },
//     { 'user': 'fred',    'active': false },
//     { 'user': 'pebbles', 'active': true }
//   ];
   
//   _.findIndex(users, function(o) { return o.user == 'barney'; });
  // => 0
   
  // The `_.matches` iteratee shorthand.
//   _.findIndex(users, { 'user': 'fred', 'active': false });
  // => 1
   
  // The `_.matchesProperty` iteratee shorthand.
//   _.findIndex(users, ['active', false]);
  // => 0
   
  // The `_.property` iteratee shorthand.
//   _.findIndex(users, 'active');
  // => 2

import util from './util.js'

let findIndex = (array, predicate=util.identity, fromIndex=0) => {
  if (!array || !array.length) return []
  predicate = util.getIteratee(predicate)
  for ( let i = 0; i < array.length; i++ ) {
    if(predicate(array[i])) {
      return i
    }
  }
  return -1
}
