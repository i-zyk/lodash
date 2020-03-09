let day_4 = () => {
    //创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）

    // _.dropRight([1, 2, 3]);
    // => [1, 2]
    
    // _.dropRight([1, 2, 3], 2);
    // => [1]
    
    // _.dropRight([1, 2, 3], 5);
    // => []
    
    // _.dropRight([1, 2, 3], 0);
    // => [1, 2, 3]

    let dropRight = (array, n = 1) => {
        let arr2 = array.splice(-n, n)
        return array.filter( item => !arr2.includes(item) )
    }
    return {
        dropRight
    }
}