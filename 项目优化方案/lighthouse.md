测试工具 lighthouse

测试命令 lighthouse https://b.cloud.189.cn/h5/main.html --view



### 1.Preload key requests

Consider using `<link rel=preload>` to prioritize fetching resources that are currently requested later in page load.

Preload: 告知浏览器实现加载资源，等需要的时候再使用

### 2.Serve images in next-gen formats

Image formats like JPEG 2000, JPEG XR, and WebP often provide better compression than PNG or JPEG, which means faster downloads and less data consumption.

使用JPEG2000，JPEG XR 或者WebP 格式的图片

可以使用tinypng网站进行压缩

### 3.Remove unused JavaScript。/ Remove unused CSS

去除没有用到的javascript和css引入

发现所指出的js代码和css代码在打包出的html文件中被引入了两次（不知为何）

### 4.Does not use passive listeners to improve scrolling performance

使用passive监听处理事件

https://blog.csdn.net/shenlei19911210/article/details/70198771

### 5.Image elements do not have explicit `width` and `height`

Set an explicit width and height on image elements to reduce layout shifts and improve CLS

所以还是用背景图片代替image元素比较好

### 6.Serve static assets with an efficient cache policy

指定合理的缓存策略 

### 7.Minimize main-thread work

优化主线程的工作，可以减少首页引入js包的数量

