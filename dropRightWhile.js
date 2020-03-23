import util from './util.js'


    // 创建一个切片数组，去除array中从 predicate 返回假值开始到尾部的部分。predicate 会传入3个参数： (value, index, array)。
    
    // var users = [
    //     { 'user': 'barney',  'active': true },
    //     { 'user': 'fred',    'active': false },
    //     { 'user': 'pebbles', 'active': false }
    //   ];
       
    //   _.dropRightWhile(users, function(o) { return !o.active; });
    // => objects for ['barney']
       
    // The `_.matches` iteratee shorthand.
    //   _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
    // => objects for ['barney', 'fred']
       
    // The `_.matchesProperty` iteratee shorthand.
    //   _.dropRightWhile(users, ['active', false]);
    // => objects for ['barney']
       
    // The `_.property` iteratee shorthand.
    //   _.dropRightWhile(users, 'active');
    // => objects for ['barney', 'fred', 'pebbles']

    let dropRightWhile = (array, predicate=util.identity) => {

        if (!array || !array.length) return [];
        predicate = util.getIteratee(predicate, 3);
        for (let i = array.length - 1; i >= 0; i--) {
          if (!predicate(array[i], i, array)) {
            // 只需要一个为false,就把前面的元素去除
            return array.slice(0, i + 1);
          }
        }
        return [];
    }
