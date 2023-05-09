# eva와 tony의 [CODOIT-TOVA](https://codoit-tova.netlify.app/)
## 멘토에게
- commit 단위가 다소 지저분합니다😭 수많은 시행착오 끝에 만들었어요🥶 
    - 배포를 위한 commit도 main branch에서 진행해서 많이 지저분해요. 다음부터는 build branch를 따로 만들겠습니다!
- state와 prop, custom hooks, 구조를 중점적으로 봐주세요!
- 애니메이션 적용을 위해 라이브러리를 사용하였기 때문에 그 부분은 제외하고 봐주세요!
- user 페이지에서 카카오로부터 이메일과 닉네임, 카카오 프로필 데이터는 잘 받아오지만 시간 부족으로 인해 UI가 많이 엉성합니다 ㅠㅠ 이 점 양해 부탁드릴게요!!  
- 구현하지 못한 부분
    - 수정하기 기능에서 current.value는 가져오지 못합니다. 
    - 현재 체크박스를 클릭해 서버로 PUT 요청을 보내는 부분이 꼬여서 작동하지 않습니다. 즉, 새로고침하면 다시 체크박스 클릭이 풀립니다. 곧 수정할 예정입니다!


# **📍**프로젝트 소개

> 기간 : 2023.05.02 ~ 2023.05.08
> 
- Codeit bootcamp 0기의 위클리미션 및 페어프로그래밍으로 진행된 사이드 프로젝트입니다.
- 팀 데일리 스크럼때 사용할 수 있는 “코두잇” 사이트🔥🔥
- 모바일에 최적화된 웹 서비스입니다. 모바일로 확인해 주세요!
- 여기서 확인하세요 👉https://codoit-tova.netlify.app/

# **📚** 기술 stack

## Front-End
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
## Back-End
<img src="https://img.shields.io/badge/django-092E20?style=for-the-badge&logo=django&logoColor=white"> <img src="https://img.shields.io/badge/django-092E20?style=for-the-badge&logo=django&logoColor=white">
## Others 
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

## 💈스타일

- css-module

## 👷🏼‍♂️빌드
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

## 📖라이브러리

- axios
- react beautiful drag & drop
- react-calendar
- moment
- qs
- react-icons
- react-router-dom
- react-spinners
- react-swipe-to-delete-component

# ⚙️ .env
```.env
VITE_BASE_URL = (백엔드 서버 url)
VITE_CLIENT_URL = ( 서버 url)
```

# **🔍 How To Use**

| Login | 캘린더 & 완료체크 | 삭제하기 | 수정하기 | 우선순위 |
|:---:|:---:|:---:|:---:|:---:|
|<img src="https://user-images.githubusercontent.com/81355590/236700047-1497e4cd-aba7-4072-bb6a-150d20818f34.gif" width=200px>|<img src="https://user-images.githubusercontent.com/81355590/236700050-1101c9f0-24a0-4c56-9aea-e1475254c085.gif" width=200px>|<img src="https://user-images.githubusercontent.com/81355590/236700030-47d697e5-8782-4056-9a8e-064318da1527.gif" width=200px>|<img src="https://user-images.githubusercontent.com/81355590/236700048-7b93f8bc-40aa-4308-ae60-6787c667dd7f.gif" width=200px>|<img src="https://user-images.githubusercontent.com/81355590/236700043-205a13ef-e143-4f33-af88-4617d6e5324e.gif" width=200px>|
| <li> 로그인을 해야 사용가능합니다. | <li>부드러운 날짜 이동이 가능합니다. <li>완료한 todo checking 가능| <li>스와이프로 삭제 | <li>아이콘 클릭으로 수정하기 | <li> Drag & Drop으로 우선순위를 정할 수 있습니다. |

## 기본 기능

1. 캘린더 기능 
    - [x]  library를 사용한다.
        - [x]  월 이동 등의 기능은 라이브러리 기본 기능을 사용한다 ← react-calendar
    - [x]  캘린더의 해당 날짜를 누르면 그 날의 todo list가 아래에 쌓인다.
        - [x]  최신 아이템이 최상단에 오게 한다.
    - [x]  item이 있다면 캘린더의 날짜 밑에 dot이 생긴다.
2. 할일 추가
    - [x]  플러스 버튼을 누르면 할일이 추가된다
        - [x]  최 상단에 아이템이 쌓이면서 커서가 이동한다.
    - [x]  todoItem 내 연필 아이콘을 클릭하면 수정이  가능하다.
        - [x]  text에 커서가 포커스 되어 수정이 가능하게 한다.
        - [x]  todo item 밖을 클릭하면 focus out 되어 저장된다.
        - [x]  content를 작성하고 enter key를 누르면 todoItem이 저장된다.
        - [x]  content가 빈 문자열일 때는 해당 todoItem은 사라진다.
    - [x]  양쪽으로 스와이프하면 삭제가 된다.
    - [x]  아이템 왼쪽에 체크 기능을 통해 완료 유무를 알수 있다.
        - [x]  완료된 아이템의 경우 text에 line-through가 간다.
    - [x]  각 아이템은 drag & drop이 가능하다 ← react beautiful drag & drop

1. 로그인 기능
    - [x]  로그인이 되지 않았다면 날짜 클릭 시, 모달창이 생성된다.
    - [x]  로그인이 되었다면 날짜 클릭 시, 그에 해당하는 todo list가 아래에 보인다.
    - [x]  로그인 하러가기 버튼을 누르면 로그인 페이지로 이동한다.
    - [x]  아이디와 비밀번호는 유호성 검사 조건을 만족해야 로그인이 된다.
    이때 아이디는 이메일 형식이며 비밀번호는 8글자 이상 20글자 이하이며 영어와 숫자 각각 1개 이상씩 사용해야한다..
    - [x]  로그인 페이지 내 카카오 아이콘을 클릭하면 카카오 인증을 통해 토큰을 발급받아
    user페이지에 유저에 대한 정보(닉네임, 카카오 프로필, 이름)를 저장한다..
2. 공유하기 기능 (시간에 따라 구현 유무 결정)
    - [ ]  카카오톡으로 그 날의 할 일 목록을 공유할 수 있다.
3. 로그인 페이지
    - [x]  아이디와 비밀번호를 이용하여 로그인 시 3초동안 spinner가 생성되고 3초가 지나면 로그인 된다.
    - [x]  로그인 된 상태가 아니라면 user page에 접근할 수 없다.
    - [x]  로그인 유무는 카카오로부터 온 token을 받아 localStorage에 있는 ‘accessToken’의  Key-value로 판별한다.
4. navbar
    - [x]  home, user 페이지 아이콘 클릭시 해당 페이지로 넘어간다.

### 🙋🏼‍♀️전체 요구사항

- [x]  color는 팔레트로 둔다.

## 📙주요 색상 5가지
- primary-color(진한 보라색) : #735BF2
- semi-primary-color(연한 보라색):  #A99BF6
- gray : #D9D9D9
- white
- black

# BackEnd GitHub
<a href="https://github.com/shyjnnn/todolist-django">ToDoList RestAPI</a>

# Project Tree
```
eva-tony-todolist
├─ .eslintrc.cjs
├─ .git
├─ .gitignore
├─ README.md
├─ data.json
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ _redirects
├─ src
│  ├─ App.css
│  ├─ App.jsx
│  ├─ assets
│  │  ├─ codoit-logo.png
│  │  ├─ codoit-logo.svg
│  │  ├─ kakao.svg
│  │  └─ petal.png
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
│  │  ├─ PetalAnimation.jsx
│  │  ├─ Temp.jsx
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
