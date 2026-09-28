const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html;charset=utf-8');

  const now = new Date();

  const html = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>Hello World</title>
    <style>
        body{
            font-family:"Microsoft Yahei",sans-serif;
            font-size:22px;
            margin-top:80px;
            text-align:center;
        }
    </style>
</head>
<body>
    <div>Hello World！我是周锦博，我的第一个AI开发的网站</div>
    <br/>
    <div>当前服务器时间：${now.toString()}</div>
</body>
</html>
  `;

  res.end(html);
});

server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`);
  console.log(`本机浏览器访问: http://127.0.0.1:3000`);
});
