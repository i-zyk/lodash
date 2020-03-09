let day_4 = () => {

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

    
    let dropRightWhile = () => {

    }

    return dropRightWhile
}