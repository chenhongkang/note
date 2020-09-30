# webpack打包结果分析



### 1.webpack常用配置和概念

##### 占位符

[name] : 打包的文件名

[hash:X] : 当代码发生改动时触发更新

[chunkhash:X] : 

[contenthash:X] : 

##### mode

标示打包模式

None: 大部分plugin不开启

Production: 开启部分利于线上部署的plugin（例如压缩等）

Development: 开启部分利于开发的plugin

##### loader

https://www.webpackjs.com/loaders/

(待展开)

##### plugin

插件，实现一些功能

(待展开)

##### module

模块文件： 参与打包的各个文件都可以称之为module

##### bundle

输出的资源文件就叫bundle文件，其中的chunk组成一个chunks

##### Chunk

代码片段（比如被打包过后生成的那些通过eval执行的代码片段）

##### modlue bundle chunk chunks的关系

一个chunks可以对应一个或多个module

一个bundle对应一个chunks, 对应一个或者多个chunk(bundle不等于chunks, bundle中还包含启动函数等内容)





### 2.webpack打包后的自执行函数

##### 自执行函数的传入参数（modules）

webpack打包成一个自执行函数，传入一个对象作为自执行函数的参数

![](./image/1.png)

如图所示，“6”作为对象的key，对象的值为一个函数



##### 自执行函数的本体

创建了__webpack_require__函数

__webpack_require__函数中通过modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);调用传入对象中的函数

通过return __webpack_require__(__webpack_require__.s = 6);尾回调函数调用







### 3.HtmlWebpackPlugin中代码引入状态

![](./image/2.png)

从template参数中找到模版文件，根具chunks找到入口j s文件，打包成filename所指示的html文件名

模版中的代码

![](./image/3.png)

打包后生成的html文件代码

![](./image/4.png)

直接在html中加入了被打包的代码，从而执行自执行函数，调用被打包前js中的文件



### 4.css的打包过程