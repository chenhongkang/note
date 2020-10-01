# loader实现

loader本质上也就是处理函数

### 知识点

1.只能是申明式函数，不能是箭头函数(loader中的api挂在this上)

2.必须有返回值 或者 调用this.callback函数

3.该函数接受到的第一个参数，就是传入的需要处理的内容

4.传入的options中的参数可以在this.query中找到

5.正常情况无法处理异步操作，使用this.async处理异步

6.使用webpack中的resolveLoader字段增加查找loader的默认地址

![](./image/2.png)

这样就可以从这两个目录去查找loader

在./src/loader中的loader也就可以直接写loader文件的名称了

loader api可见官网 https://www.webpackjs.com/api/#loader

### 实现

如下就实现了一个简单的替换loader

![](./image/1.png)



<pre>
			{
				test: /.js$/,
				use: 'replace-loader'
			}

就可以直接使用替换功能了



### less-loader css-loader style-loader实现

见./loader文件夹