\# vue-antd导入优化

##### 全量引入

直接使用import引入antd库和相应css文件时，从network查看其主文件大小达到15.1M

![Alt text](./image/1.png)

检查打包配置，发现antd中所有的js都被引入

![全量引入时的webpack打包大小配置](./image/2.png)

##### 按需引入

使用按需引入后，打包出的文件大小大大减小，观察webpack打包结果分析，发现antd中的文件没有被引入

![](./image/3.png)

![](./image/4.png)