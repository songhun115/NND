// server.js

const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/send-email', (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'hoho77113@gmail.com', // 여러분의 Gmail 계정
      pass: 'sr4713kh@@'   // 여러분의 Gmail 계정 비밀번호
    }
  });
  

  const mailOptions = {
    from: 'hoho77113@gmail.com',   // 발신자 이메일 주소
    to: req.body.email, // 클라이언트가 입력한 이메일 주소
    subject: '테스트 이메일',
    text: '이메일 내용을 입력하세요.'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.error(error);
      res.send('이메일 전송 실패');
    } else {
      console.log('이메일 전송 성공: ' + info.response);
      res.send('이메일 전송 성공');
    }
  });
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 포트에서 실행 중입니다.`);
});