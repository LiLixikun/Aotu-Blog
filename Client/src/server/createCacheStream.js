//假设上面的代码已经封装到createCacheStream方法里了，key可以为当前的url，或者其他的
const cacheStream = createCacheStream(key);
//cacheStream现在会pipe到res
cacheStream.pipe(
    res,
    { end: false }
);
//这里只显示部分html
const before = ` <!DOCTYPE html> <html lang="en"> <head>...`;
//现在是往cacheStream里直接写html
cacheStream.write(before);
// res.write(before);
//react stream pipe到cacheStream
htmlStream.pipe(
    cacheStream,
    { end: false }
);
//同上监听react渲染结束
htmlStream.on('end', () => {
    const after = `</div>
      <script type="text/javascript">window.__INITIAL_DATA__ = ${JSON.stringify({})}</script>
        ${extractor.getScriptTags()}
      </body>
    </html>`;
    cacheStream.write(after);
    console.log('streaming rest html content done!');
    //结束http response
    res.end();
    //结束cacheStream
    cacheStream.end();
});