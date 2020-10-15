# treeShaking优化（摇树优化）

### 1.概念

#####  treeShaking优化方式

1个模块可能有多个方法，只要其中某个方法使用到了，则整个文件都会被打包到bundle里面去。treeShaking就是只把用到的方法打包入bundle,没有的方法会在uglify阶段被擦掉。

#####  DCE

代码不会被执行，不可到达

代码执行的结果不会被用到

代码只影响死变量（没有被用到的变量）

### 2.使用treeShaking

webpack默认支持，在.babelrc里设置modules: false可以

mode为production的情况下默认开启

<font color='red'>必须是es6语法，CJS的方式不支持(import放在首部，require可以动态加载无法判断)</font>

##### 调用结果

Mode: none的时候没有调用的函数被打包进bundle中

Mode: production的时候DCE函数没有在bundle中找到