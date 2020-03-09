let day_4 = () => {

    // 创建一个切片数组，去除array前面的n个元素。（n默认值为1。）

    // _.drop([1, 2, 3]);
    // => [2, 3]
    
    //_.drop([1, 2, 3], 2);
    // => [3]
    
    //_.drop([1, 2, 3], 5);
    // => []
    
    //_.drop([1, 2, 3], 0);
    // => [1, 2, 3]

    let drop = (array, n=1) => {
        let arr2 = array.splice(0, n) //[1]
        return array.filter( item => !arr2.includes(item) ) 
    }
    return {
        drop
    }
}