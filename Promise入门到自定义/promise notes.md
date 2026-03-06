**introduction**
* promise是构造函数,用来封装一个异步操作并可以获取其成功或失败的结果值

**异步编程**
 * fs文件操作
require('fs').readFile('./1.txt', 'utf-8', function (err, data) {
})
* 数据库操作
* AJAX
$.get('/user', function (data)  { })

* 定时器
setTimeout(function () { }, 1000)

**优点**
* 1.promise: 启动异步任务 => 返回promise对象 => 给promise对象绑定回调函数（甚至可以在任务结束后指定回调函数）
* 2.回调函数: 回调地狱 => promise链式调用 => async/await（终极解决方案）``支持链式调用，可以解决回调地狱的问题``


fs可对计算机硬盘进行读写操作
fs 是 Node.js 内置的文件系统模块，专门用来在后端代码里读取、写入、修改或删除电脑里的文件和文件夹。
总结
核心定位：Node.js 操作文件 / 文件夹的内置核心模块；
核心能力：读、写、改、删文件 / 文件夹；
使用场景：后端开发中处理文件相关需求（如保存日志、读取配置）。