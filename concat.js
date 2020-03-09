let day2 = () => {
    // 创建一个新数组，将array与任何数组 或 值连接在一起
    // var array = [1];
    // var other = _.concat(array, 2, [3], [[4]]);
    // console.log(other);
    // => [1, 2, 3, [4]]
    // console.log(array);
    // => [1]
    let concat = (array, ...arg) => {
        const argLen = arg.length
        if(!argLen ) {
            return []
        }

        for(let i = 0; i < argLen; i++) {
            if( Object.prototype.toString.call(arg[i]) === '[object Array]' ) {
                arg[i].map( item => array.push(item) )
            }else {
                array.push(arg[i])
            }
        }
        return array
    }

    return {
        concat
    }
}