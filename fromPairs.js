// 与_.toPairs正好相反；这个方法返回一个由键值对pairs构成的对象。
// _.fromPairs([['fred', 30], ['barney', 40]]);
// => { 'fred': 30, 'barney': 40 }

let fromPairs = pairs => {
    let result = {}
    pairs.map( item => {
        result[item[0]] = item[1]
    } )
    return result
}