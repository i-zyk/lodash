// 使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）。
// var array = [1, 2, 3];
 
// _.fill(array, 'a');
// console.log(array);
// => ['a', 'a', 'a']
 
// _.fill(Array(3), 2);
// => [2, 2, 2]
 
// _.fill([4, 6, 8, 10], '*', 1, 3);
// => [4, '*', '*', 10]

let fill = (array, value, start=0, end=array.length) => {
    let arr = []
    for (let i = start; i < end; i++) {
        arr.push(value)
    }
    array.splice(start, end-start, ...arr)  
    return array
}
