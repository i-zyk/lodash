const util =  {
  identity: function(value) {
    return value;
  },
    
  /*
  *iteratee的几种情况
  * */
  iteratee: function(value) {
    // 是函数则直接可以返回
    if (typeof value === "function") {
      return value;
    }
    
    // 后面的情况是Object，所以先把null处理了
    if (value === null || value === undefined) {
      return util.identity;
    }
    
    // 是Object情况的处理,进行Object的深度对比
    if (typeof value === "object") {
      return Array.isArray(value)
        ? util.matchesProperty(value[0], value[1])
        : util.matches(value);
    }
    
    //  以上都不是，那就是基本类型和Symbol类型，都是可以作为对象属性，转化为寻找属性的函数
    return util.property(value);
  },
    
  getIteratee: function() {
    return arguments.length
      ? util.iteratee(arguments[0], arguments[1])
      : util.identity;
  },
    
  property: function(value) {
    // 它只是是key，那就直接去对象里寻找
    if (
      (typeof value === "string" && !/\./.test(value)) ||
      typeof value === "number" ||
      typeof value === "boolean" ||
      util.isSymbol(value) ||
      value === null
    ) {
      return object => (!object ? undefined : object[value]);
    } else {
      // 遇到a[0].b.c之类取值，进行额外处理，这里lodash封装了方法_.get(),进行路径查找
      return obj => util.baseGet(obj, value);
    }
  },
    
  get: function(obj, path, defaultValue) {
    let result = util.baseGet(obj, path);
    return result ? result : defaultValue;
  },
    
    baseGet: function(obj, path) {
      if (!obj) return undefined;
      // 为了转为数组，先转String
      // 这里Lodash也有很多处理的，比如对Symbol对象，但是这里只过过简单测试
      let newPath = path.toString();
      // 转为数组
      if (!Array.isArray(path)) {
        //这里处理的非常随意，大概原理是这样。需要的就是把'a[0].b.c' 转为[ 'a', '0', 'b', 'c' ]。
        path = newPath.split(/\W+/);
      }
      let i = 0;
      for (; i < path.length && obj !== undefined && obj !== null; i++) {
        obj = obj[path[i]]; // 层层剥开
      }
      return i && i === path.length ? obj : undefined;
    },
    
    // lodash这里健壮很多
    // 比较source是否被object包含,没有深度比较，当key不是基本类型就无法比较
    matches: function(source) {
      return object =>
      util.isObjectLike(object)
          ? Object.keys(source).every(key => object[key] === source[key])
          : false;
    },
    
    // 根据传入的是path(String或Array)对比对象的值，例如([a,b,c], 3) 表示对比{a:{b:{c:3}}}
    matchesProperty: function(path, srcValue) {
      // 这里lodash封装了isKey,我这里是不完善的
      if (
        typeof path === "string" ||
        typeof path === "number" ||
        typeof path === "symbol" ||
        typeof path === "boolean"
      ) {
        return obj =>
          obj
            ? obj[path] === srcValue &&
              (srcValue !== undefined || path in Object(obj))
            : false;
      }
      return obj => {
        let value = util.get(obj, path);
        if (value === srcValue && value === undefined) {
          // 不做处理了
          return false;
        } else {
          // 没有深度对比，无法比较非基本类型
          return value === srcValue;
        }
      };
    },
    
    // 不处理Array的情况
    toPath: function(value) {
      if (util.isSymbol(value)) {
        return value;
      }
      value = typeof value === "string" ? value : value.toString();
      return value.split(/\W+/);
    },

    isObjectLike: value => value !== null && typeof value === "object",
}

export default util