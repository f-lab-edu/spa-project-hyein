# SPA를 활용한 Toss Tech Blog(수정중)

## 배포 주소

## 프로젝트 소개

라이브러리에 의존하지 않고 순수 자바스크립트로 SPA 블로그를 구현하는 연습을 하는 프로젝트

## 시작 가이드

### 설치

```
$ git clone https://github.com/f-lab-edu/spa-project-hyein.git
$ npm install
```

### 실행

```
$ npm start
```

### 테스트

```
$ npm test
```

## Stacks

### Environment

<img src="https://img.shields.io/badge/Visual%20Studio-007ACC?style=for-the-badge&logo=visual-studio&logoColor=white"> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

### Config

<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">

### Development

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white"> <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white"> <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black"> <img src="https://img.shields.io/badge/CSSLint-29ABE2?style=for-the-badge&logo=csslint&logoColor=white">

## 주요 기능

### 순수 자바스크립트로 Router 기능 구현

- SPA 내에서 해시 기반 라우팅 구현
- 페이지 이동할 때 전체 페이지를 다시 로드하지 않고 URL 변경에 따라 특정 페이지 로드

### Blog 글 내용 보기 기능 구현

- JSON 파일을 호출하여 글 목록 페이지를 구현
- 글 목록에서 글을 클릭했을 때, 해당 글의 상세 내용을 표시

### Router 기능 관련 Jest 테스트 코드 작성

- jest를 사용하여 라우터 기능 검증
