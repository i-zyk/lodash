let day_3 = () => {
    // 这个方法类似_.difference ，除了它接受一个 comparator （注：比较器），
    // 它调用比较array，values中的元素。 结果值是从第一数组中选择。comparator 调用参数有两个：(arrVal, othVal)。
    
    //var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
    //_.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
    // => [{ 'x': 2, 'y': 1 }]
    
    
    let differenceWidth = (array, ...arg) => {
        if( !array || !Array.isArray(array) || array.lemgth <= 1 ) {
            return []
        }
        let arg2 = arg[0]
        if( !arg2 || !Array.isArray(arg2) || array.length <= 1 ) {
            return []
        }
        let comparator = arg[1]
        if ( !comparator || typeof comparator !== 'function' ) {
            comparator = (arrVal, othVal) => arrVal === othVal
        }
        return array.filter( value => {
            var flag = true
            arg2.forEach(element => {
                if(comparator(value,element)){
                    falg = false
                    return
                }
            })
            return falg
        } )
    }

    return {
        differenceWidth
    }
}