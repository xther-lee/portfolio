const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3001;

// CORS 설정
app.use(cors());

// 정적 파일 제공
app.use(express.static(path.join(__dirname, 'public')));

// 기본 라우트
app.get('/', (req, res) => {
  res.json({ message: '포트폴리오 웹사이트 서버가 실행 중입니다.' });
});

// 서버 상태 확인
app.get('/api/status', (req, res) => {
  res.json({ 
    status: 'running',
    message: '포트폴리오 웹사이트 서버가 정상적으로 실행 중입니다.',
    timestamp: new Date().toISOString()
  });
});

// 404 처리
app.use('*', (req, res) => {
  res.status(404).json({ message: '요청한 리소스를 찾을 수 없습니다.' });
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT}에서 실행 중입니다.`);
  console.log('포트폴리오 웹사이트를 제공합니다.');
});

// 에러 처리
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
}); 