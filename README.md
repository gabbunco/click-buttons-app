# 깃 & 깃헙 개인 프로젝트 사용법

개인 프로젝트 진행하실 때 깃(git)과 깃헙(github) 응용하는 방법을 예시 프로젝트 (Click Buttons App)를 통해 배워보세요.

<br />

## 프로젝트 예시 앱

이름: Click Buttons App
타입: 프론트엔드
언어: JavaScript
소스코드 버전 컨트롤: 깃 & 깃헙

<br />

### Click Buttons App

```html
<!-- index.html -->
...
<body>
  <!--1. 인사하기 버튼 -->
  <button id="greet">유저분께 인사</button>

  <!--2. 숫자 올리기 버튼 -->
  <p id="number">0</p>
  <button id="increment">숫자 증가</button>

  <!--3. 현존 버튼 모두 지우기 -->
  <button id="delete">버튼들 삭제</button>

  <!-- script file 모듈타입으로 연동시켜주기 -->
  <script type="module" src="./src/index.js"></script>
</body>
...
```

```js
/* src/index.js */

// 1. 인사버튼 기능
import { greet } from "./greet/index.js";
// 2. 증가버튼 기능
import { increment } from "./increment/index.js";
// 3. 삭제버튼 기능
import { remove } from "./remove/index.js";

greet();
increment();
remove();
```

<br />

### Git & Github Usage

- [ ] 깃헙 저장소 만들기
- [ ] 깃 저장소 만들고 깃헙 저장소와 연결시키기
- [ ] 베이스 파일 및 소스코드 만들기 `index.html`, `src/index.js`
- [ ] 마스터 브랜치 `master` branch 에 밀어넣기
- [ ] 기능들 마다 각 브랜치 생성해서 구현하기
  - [ ] greet-button 브랜치 생성/소스코드/push/마스터 브랜치에에 합체하기
  - [ ] increment-button 브랜치 생성/소스코드/push/마스터 브랜치에에 합체하기
  - [ ] remove-button 브랜치 생성/소스코드/push/마스터 브랜치에에 합체하기

#### 사용될 깃 터미널 명령어 리스트

```
git add <file-name>
git commit -m "<message>"
git remote add origin <remote-origin-url>
git push -u origin <master-name>

git checkout -b <new-branch-name>
git checkout <existing-branch-name>

git merge <existing-branch-name>
```
