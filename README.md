## 프로젝트 소개

- 코드잇 부트캠프 0기를 위한 모바일 중점 사이트 "코두잇"!
- 팀 데일리 스크럼때 사용하며 각자의 todo를 공유할 수 있습니다.

## 기술 stack

![img](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=flat-square)

## 기본 기능

## List

1. 캘린더 기능
   - [ ] library를 사용한다.
     - 월 이동 등의 기능은 라이브러리 기본 기능을 사용한다
   - [ ] 캘린더의 해당 날짜를 누르면 그 날의 todo list가 아래에 쌓인다.
     - [ ] 최신 아이템이 최상단에 오게 한다.
   - [ ] item이 있다면 캘린더의 날짜 밑에 dot이 생긴다.
2. 할일 추가

   - [ ] 플러스 버튼을 누르면 할일이 추가된다
     - [ ] 최 상단에 아이템이 쌓이면서 커서가 이동한다.
   - [ ] 왼쪽 → 오른쪽으로 스와이프 하면 수정이 된다.
     - 왼쪽으로 살짝(범위는 추후 정함)밀면 다시 원상 복구 된다.
     - 그 후 text에 커서가 가서 수정이 가능하게 한다.
     - todo item 밖을 클릭하면 focus out 되어 저장된다.
   - [ ] 오른쪽에서 왼쪽으로 스와이프하면 삭제가 된다.
   - [ ] 아이템 왼쪽에 체크 기능을 통해 완료 유무를 알수 있다.
     - [ ] 완료된 아이템의 경우 text에 line-through가 간다.
   - [ ] 각 아이템은 drag & drop이 가능하다

3. 로그인 기능
   - [ ] 로그인이 되지 않았다면 날짜 클릭 시, 모달이 생성된다.
   - [ ] 로그인이 되었다면 날짜 클릭 시, 그에 해당하는 todo list가 아래에 보인다.
   - [ ] 로그인 하러가기 버튼을 누르면 로그인 페이지로 이동한다.
4. 공유하기 기능 (시간에 따라 구현 유무 결정)
   - [ ] 카카오톡으로 그날의 할일이 목록을 공유할 수 있다.
5. 로그인 페이지
   - 추후 업데이트..
6. navbar
   - 캘린더, 검색하기, user 페이지 아이콘 클릭시 해당 페이지로 넘어간다.

### 전체 요구사항

- [ ] color는 팔레트로 둔다.

## 주요 색상 5가지

- primary-color(진한 보라색) : #735BF2
- semi-primary-color(연한 보라색): #A99BF6
- gray : #D9D9D9
- white
- black

```
eva-tony-todolist
├─ .eslintrc.cjs
├─ .gitignore
├─ README.md
├─ data.json
├─ index.html
├─ package-lock.json
├─ package.json
├─ src
│  ├─ App.css
│  ├─ App.jsx
│  ├─ api
│  │  └─ requestData.js
│  ├─ assets
│  │  ├─ codoit-logo.png
│  │  ├─ codoit-logo.svg
│  │  └─ kakao.svg
│  ├─ components
│  │  ├─ AddButton.jsx
│  │  ├─ AddButton.module.css
│  │  ├─ Calendar.css
│  │  ├─ CalendarBox.css
│  │  ├─ CalendarBox.jsx
│  │  ├─ FooterNav.jsx
│  │  ├─ FooterNav.module.css
│  │  ├─ Header.jsx
│  │  ├─ Header.module.css
│  │  ├─ LoginModal.jsx
│  │  ├─ LoginModal.module.css
│  │  ├─ MenuBar.jsx
│  │  ├─ TodoItem.jsx
│  │  ├─ TodoItem.module.css
│  │  ├─ TodoList.jsx
│  │  └─ TodoList.module.css
│  ├─ hooks
│  │  └─ useHttp.jsx
│  ├─ library
│  │  ├─ parseDateToString.js
│  │  └─ parseObjectToList.js
│  ├─ main.jsx
│  └─ pages
│     ├─ Auth.jsx
│     ├─ HomePage.jsx
│     ├─ HomePage.module.css
│     ├─ Layout.jsx
│     ├─ LoginPage.jsx
│     ├─ LoginPage.module.css
│     ├─ User.jsx
│     └─ User.module.css
└─ vite.config.js

```
