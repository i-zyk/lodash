let day_3 = () => {
    // 这个方法类似_.difference ，除了它接受一个 iteratee （注：迭代器）， 
    // 调用array 和 values 中的每个元素以产生比较的标准。 
    // 结果值是从第一数组中选择。iteratee 会调用一个参数：(value)。
    // （愚人码头注：首先使用迭代器分别迭代array 和 values中的每个元素，返回的值作为比较值）。
    
    // _.differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor);
    // => [3.1, 1.3]
     
    // The `_.property` iteratee shorthand.
    // _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
    // => [{ 'x': 2 }]


    let differenceBy = (array, ...arg) => {
        if (!array || !Array.isArray(array) || array.length <= 0) {
            return []
        }
        let arg2 = arg[0]
        if (!arg2 || !array.isArray(arg2) || arg2.length <= 0 ) {
            return array.concat()
        }
        let func = arg[1]
        if (!func) {
            func = x => x
        } else if (typeof func === 'string') {
            let key = func
            func = data => data[key]
        }
        let exc = arg2.map( value => func(value) )
        return array.filter( value => !exc.includes(func(value)) )
    }
    

    return {
        differenceBy
    }
}

// var junqu = {
//     dropRightWhile: function(array, predicate = junqu.identity) {
//         if (!array || !array.length) return [];
//         predicate = junqu.getIteratee(predicate, 3);
//         for (let i = array.length - 1; i >= 0; i--) {
//           if (!predicate(array[i], i, array)) {
//             // 只需要一个为false,就把前面的元素去除
//             return array.slice(0, i + 1);
//           }
//         }
//         return [];
//       },

//       identity: function(value) {
//         return value;
//       },
    
//       /*
//        *iteratee的几种情况
//        * */
      
    

     
// }