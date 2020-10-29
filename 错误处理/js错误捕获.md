# js错误捕获

### 1. 普通的try catch

```javascript
try {
    console.log(1)
    throw new Error(2)
    console.log(3)
} catch(err) {
    console.log(err)
    console.log(4)
}
输出： 1 error: 2 4
```

发生错误后try中的代码运行中断，可以继续执行catch中的代码

缺点

<font color='red'>1.无法监听到异步错误（例如setTimeout， promise回调中抛出的错误）</font>

### 2.监听异步错误

**`unhandledrejection`**: 当Promise被 reject 且没有 reject 处理器的时候，会触发 **`unhandledrejection`** 事件；这可能发生在 [`window`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window) 下，但也可能发生在 [`Worker`](https://developer.mozilla.org/zh-CN/docs/Web/API/Worker) 中。 这对于调试回退错误处理非常有用。

**`error`**: 当javascript代码执行发生错误的时候，会在window上抛出一个error事件。 当资源加载出错的时候会在资源对象上触发error事件，不会向上冒泡到window

可以在window上添加error事件从而获取自动收集错误报告

```javascript
window.addEventListener('error', (err) => {
    console.log(err)
})
```

缺点

<font color='red'>1.资源加载失败时的错误没有很好的捕获</font>

### 3. 资源加载错误

1.使用Object.onerror(例如Image.error)进行捕获

2.使用performance.getEntries()获取资源数组

### 4.错误上报

1. ajax
2. image 的 src 上报

> ```
> (new Image()).src = '错误上报请求地址'
> ```
>
> 目前主流采用 image 对象的方式上报错误，因为图片发送 get 请求，浏览器对图片有缓存，同样的请求，图片只会发送一次，避免重复上报

3. 压缩js代码错误上报：保存相应的map文件，然后使用sourcemap的插件进行处理后上报 

### 4.generator捕获机制

