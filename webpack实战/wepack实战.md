# webpack实战知识点

### npmrc

npm gets its config settings from the command line, environment variables, and `npmrc` files.

可以在其中指定registry=https://registry.npm.taobao.org 来规范使用统一npm源进行下载，而不用手动切换或借助nrm

Npm-config详细命令： https://www.npmjs.cn/misc/config/



### postcss

postcss配置文件： 根目录下postcss.config.js

在配置文件下以如下方式引入插件，

```
module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-nested')
  ]
}
```

webpack中使用需要添加postcss-loader进行通行<font color="red">（postcss-loader写在css-loader之后，less-loader之前)</font>

文档： https://github.com/postcss/postcss



