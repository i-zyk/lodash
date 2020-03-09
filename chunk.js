let day_1 = () => {
    let chunk = (array, size = 1) => {
        // 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
        // _.chunk(['a', 'b', 'c', 'd'], 2);
        // => [['a', 'b'], ['c', 'd']]
        
        // _.chunk(['a', 'b', 'c', 'd'], 3);
        // => [['a', 'b', 'c'], ['d']]
        const len = array.length
        let arr = []
        for(let i = 0; i < len; i+=size) {
            arr.push(array.slice(i, i + size))
        }
        return arr
    }
    return {
        chunk
    }
}