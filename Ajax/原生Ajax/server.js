const express = require('express');

// 2.创建应用对象
const app = express();


// 3.创建路由规则
// 处理 GET 请求
app.get('/server', (request, response) => {
    // 设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应体
    response.send('Hello Ajax (GET)-78');
}); // 修复：闭合 GET 路由的回调函数

// 处理所有类型的请求（包括 POST），单独定义，不要嵌套
app.all('/json-server', (request, response) => {
    // 设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 允许自定义请求头（解决 POST 请求可能的跨域报错）
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 响应一个数据
    const data = { name: 'atguigu', age: 18, sex: '男' };
    // 对象转换为字符串
    let str =JSON.stringify(data);
    // 设置响应体（补充缺失的响应内容）,内容改的话，需重启端口，无需刷新网页
    response.send(str);
});

// 4.监听端口启动服务
app.listen(8000, () => {
    console.log('服务启动成功，监听端口 8000');
});

//注：get和post要对得上