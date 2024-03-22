const express = require('express');
const path = require('path');

const app = express();
const port = 5002; // 사용할 포트 번호

app.set('view engine', 'ejs');
app.set("views", "./New/NewHtml");

// 기본 라우트
app.get('/', (req, res) => {
  res.render('index');
});

// 서버 시작
app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`);
});
