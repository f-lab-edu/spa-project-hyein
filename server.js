import http from 'http';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath, URL } from 'url';

const __filename = fileURLToPath(import.meta.url); // 현재 모듈의 파일명을 가져옴
const __dirname = path.dirname(__filename); // 현재 모듈의 디렉토리명을 가져옴

// 파일 확장자에 따른 MIME 타입 설정
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
};

// HTTP 서버 생성
const server = http.createServer(async (req, res) => {
  // 요청된 URL을 파싱하여 pathname을 가져옴
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  let pathname = parsedUrl.pathname;

  // 기본 파일 경로 설정
  let filePath = path.join(__dirname, pathname);
  const extname = path.extname(filePath).toLowerCase(); // 파일 확장자 가져오기
  const contentType = mimeTypes[extname] || 'application/octet-stream'; // MIME 타입 설정

  try {
    // 파일이 존재하면 파일 읽기
    const data = await fs.readFile(filePath);
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  } catch (err) {
    // 파일이 없으면 index.html 반환
    try {
      const data = await fs.readFile(path.join(__dirname, 'index.html'));
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data); // index.html 내용을 응답
    } catch (indexErr) {
      console.error(`Error reading index.html: ${indexErr}`); // 에러 로그 출력
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Internal Server Error'); // 에러 메시지 응답
    }
  }
});

// 서버가 지정된 포트에서 리슨하도록 설정
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
