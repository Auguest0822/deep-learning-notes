# HTTP
浏览器向服务器请求报文，服务器返回响应报文

## 请求报文
请求行 get , post / URL / （HTTP协议版本）
请求头 **名字：值**，如：Content-Type: application/
      类型：值，如：application/x-www-form-urlencoded
      Content-Length: 13//请求体长度
空行
请求体 get没有，post可以有
例子：

请求行 POST / HTTP/1.1
请求头 Host: www.example.com
      Content-Type: application/x-www-form-urlencoded
      Content-Length: 13
空行
请求体 foo=bar&baz=qux
 

## 响应报文
行 HTTP协议版本、状态码、状态码描述，如：HTTP/1.1 200 OK
头 Content-Type: text/html; charset=UTF-8 //内容类型
    Content-Length: 85
    Content-Encoding: gzip//内容编码
空行
体 <html>
    <head>
    </head>
    <body>
    <h1>内容</h1>
    </body>

</html>

### 请求行
请求方法、URL、HTTP协议版本

### 请求头
键值对，键值之间用冒号分隔，键值对之间用换行分隔

### 请求体
POST请求才有请求体，GET请求没有请求体