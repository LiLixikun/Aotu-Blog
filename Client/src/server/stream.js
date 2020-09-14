const { Transform } = require('stream');
//这里简单用Map作为缓存的地方
const cache = new Map();
//临时的数组用来把react stream每次拿到的数据块存起来
const bufferedChunks = [];
//创建一个transform Stream来获取所有的chunk
const cacheStream = new Transform({
    //每次从react stream拿到数据后，会调用此方法，存到bufferedChunks里面，然后原封不动的扔给res
    transform(data, enc, cb) {
        bufferedChunks.push(data);
        cb(null, data);
    },

    //等全部结束后会调用flush
    flush(cb) {
        //把bufferedChunks组合起来，转成html字符串，set到cache中
        cache.set(key, Buffer.concat(bufferedChunks).toString());
        cb();
    },
});
