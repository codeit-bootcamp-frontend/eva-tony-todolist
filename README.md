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

```
eva-tony-todolist
├─ .eslintrc.cjs
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ ORIG_HEAD
│  ├─ config
│  ├─ description
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ objects
│  │  ├─ 01
│  │  │  └─ f813392c999ecb31d6d89900b136e91a7cbe9f
│  │  ├─ 02
│  │  │  ├─ 1b67de8008f998c878b2b96e9f5cdcf3d88f41
│  │  │  ├─ 8122483cc02ae4e754a03d8a00873e79b0f492
│  │  │  ├─ 818d68880bad8d8dc5e921bc87182ef1143b13
│  │  │  └─ b70e46ec60d35c7b1ff5288ea4487cc7059a5c
│  │  ├─ 03
│  │  │  ├─ 3000270fd93e249c34ac39cdd2dde6c37adf5e
│  │  │  └─ 32cf05c372e34e16780e382fe5a01d1c83e1ed
│  │  ├─ 06
│  │  │  ├─ 4a8e2e76d0e2f68e997625a30efa60b27e3523
│  │  │  ├─ 78f9825998931ecb387a210ed39dad702eee87
│  │  │  ├─ a47db1a83df068bbcdfa251542428cd7561240
│  │  │  └─ d901439f485fef4462261fe8e410a6a165df23
│  │  ├─ 07
│  │  │  ├─ 17802e646b3d5dbf1e4084e97a7bee85c5cc7c
│  │  │  ├─ d6d423f47e2469a6d26eed1633d715f37357fd
│  │  │  └─ d77912ca852b79b4d5127b3b62e2f1439ffd10
│  │  ├─ 08
│  │  │  └─ 545b5618b46d591d10a7703226bb7802ae14dd
│  │  ├─ 09
│  │  │  └─ abe935b07f1b43f3c6160d3d910447f1d26a04
│  │  ├─ 0c
│  │  │  ├─ 14ce2ec30eb77afcf40af0c0be712d8d634a21
│  │  │  ├─ 654518b4480512f54823d42116bedc5f24506b
│  │  │  ├─ d9c1cc53dc15485f75e446d5b3d6505e9588bd
│  │  │  └─ dd7ade24a4b62ac0baa796b844bc788bc41c93
│  │  ├─ 0d
│  │  │  ├─ 18e626727f2109ba4bdea7b39ebacd581ab0e3
│  │  │  ├─ 39a6a28656c8d7bdf7fbdd2daa1e15dfcd96b6
│  │  │  ├─ 3f3d13405faf1c3aa308ed7d38c87e198dfc80
│  │  │  └─ a4fe2221fd7bdd6c9db647bfd7fa77fa505279
│  │  ├─ 0e
│  │  │  ├─ 1039a0813b73eb7395fe6a38b86bd41c2a0075
│  │  │  ├─ 47693e25c956aec12ae90d70d41c948cd5d96d
│  │  │  └─ f4341ae6f44327767af4185239379aecd563f9
│  │  ├─ 10
│  │  │  ├─ 17ea868a7d22f7f03458c8387284d49e56b323
│  │  │  └─ c1bdcadfe731d2fac5b6c124cae56ddb0182a0
│  │  ├─ 12
│  │  │  ├─ 49d00dbd88e243f624de4d0fd3548d1429751c
│  │  │  └─ d84724dbd60790ee2e8a91c138ebb1531585cd
│  │  ├─ 13
│  │  │  ├─ 0ddd464abf36ac4223123d9df863137d6878ba
│  │  │  └─ 36717f233cfc7fdee57a7f6fc98d8cb101302b
│  │  ├─ 16
│  │  │  └─ 97a01f94bcc74c70e64f121f8deb183f34ce5e
│  │  ├─ 17
│  │  │  └─ db0de0e3cebf6ece40f4d356bb298403188513
│  │  ├─ 1a
│  │  │  └─ 56feba2758c59271596d66df1697b35a5ebabe
│  │  ├─ 1b
│  │  │  ├─ 2ae47500ed74229e5d80813fcf3f8e360c3317
│  │  │  ├─ 594ebe6e0b48d73b92440a56088f43a6fbe143
│  │  │  ├─ 684e2a152d21d9bffef9dab02bada65f9401dd
│  │  │  ├─ 6c78b2c742514574adc869a2c4f6dd9eefc470
│  │  │  ├─ 7514f61ae3eb4016f7c1b4122a3839a59f2c55
│  │  │  └─ 854350a0c207bc000da70244aff45f64ac5ca6
│  │  ├─ 1c
│  │  │  ├─ 929d143d2c7dc1d8518de84928d3497a0504d0
│  │  │  └─ ac5597ea2f6d8340c6b356fb4e159c562f4a50
│  │  ├─ 1d
│  │  │  └─ 4ee2b539441b32fad576b88a335f2b0169ab45
│  │  ├─ 1e
│  │  │  └─ 53534588b9ad7bb54dd7fbf11c13e63f8b153f
│  │  ├─ 1f
│  │  │  ├─ 2cfdfe3fa3247bc71858a7b799ffc71ccc6536
│  │  │  ├─ 42b235d26fd0a5d0516beebe8040c3e8437be5
│  │  │  ├─ 873ef73924619158c06974406a848aa2d9ae62
│  │  │  └─ 9f64d82d6e1084f44f6a1a68d6a998d6a32498
│  │  ├─ 20
│  │  │  ├─ 960dbdd239095027f472e426bc706022fa3893
│  │  │  └─ fd026e67d85b435968cf231951b3a76a7251b5
│  │  ├─ 21
│  │  │  └─ eb88f2b6ab42e979fa8e006d59167a7835e834
│  │  ├─ 22
│  │  │  ├─ 64df8580eae969ea074c1d8bd7c3e15ecc433a
│  │  │  ├─ 860b802879f3d7be752019acdaa1760d48e519
│  │  │  └─ 86cd38f3d9a4ddbdf5641805133207379fda25
│  │  ├─ 23
│  │  │  ├─ 15c8a65e2677a9a488d03a80065a8e7e2cae14
│  │  │  ├─ 72c13bb5c05d0eaf24ab333383e367f6836baa
│  │  │  ├─ de977dd76439928d9934ddc867861adfa3d5c0
│  │  │  └─ fcb6f12570383c03b93da950270484b38c7bf5
│  │  ├─ 24
│  │  │  ├─ 4b2c05880a6438459d4864f0099d6dc9b009fc
│  │  │  ├─ 81bc892083056309a7c48425fbba5fc0b22739
│  │  │  ├─ cd9bb9c100363ab6a2dad0d85309e3b8fcc4d9
│  │  │  └─ e34cedffcd3144dea032fe1184e3f7132843ab
│  │  ├─ 25
│  │  │  ├─ 1c00d9b298be81f7fbd6ff95f55a6927baccbc
│  │  │  └─ c817a6e2e75c8b8e678a630700892d5365b5c5
│  │  ├─ 27
│  │  │  ├─ 04b1899d06cdf462f86e428f9fc69329ffd312
│  │  │  ├─ e9b25c72bc90dade029ad35b2fd2e68f26f5cf
│  │  │  └─ ec7c809a80335280214b442f8f5851d496b68a
│  │  ├─ 28
│  │  │  ├─ af53c5d97fe93774aec49e6c60cbed305b976b
│  │  │  └─ bbe59e104654ba89873afc26e361c38ce95eeb
│  │  ├─ 29
│  │  │  └─ d1e2953282ae872c0505237753b6fe6811a571
│  │  ├─ 2a
│  │  │  └─ d291dfc679e1bcc5177d8212ce4989e2ff6833
│  │  ├─ 2b
│  │  │  ├─ 0d81395ceb642607c6d556e14bf6f686448528
│  │  │  └─ cb455433c7c5275a25abeeb3f06d6071429a7f
│  │  ├─ 2d
│  │  │  └─ 093c1c360effc766c06182b7c3ae4d7f001994
│  │  ├─ 2e
│  │  │  └─ bd94fb80063afbe9e8153e6a81be280aac2e73
│  │  ├─ 2f
│  │  │  └─ 38825500aeb1e13dcbdfd87b7e351ac41dabbc
│  │  ├─ 30
│  │  │  └─ 1488281b641a6d9f7abac5cfd14cbd03b77d4d
│  │  ├─ 31
│  │  │  └─ 221549834626faa932e8190313d09165155e13
│  │  ├─ 33
│  │  │  └─ 97bcf5ab72a966e0c6311405276744aa34c31e
│  │  ├─ 35
│  │  │  ├─ 20acc8a995ef9d9eb9d2317f314790b604d62c
│  │  │  ├─ e20441821842bf6d9e87659096072f0169e45a
│  │  │  └─ fc1de2c16f5e704c076d69b5091293df9c08e3
│  │  ├─ 36
│  │  │  ├─ 2c8af35a557987fac2e847fa72efdf1786893d
│  │  │  ├─ c5a1c7a57963695542c4b9b229089044745f51
│  │  │  └─ f99396c1eb39c35aa005f50177ef9698960d1c
│  │  ├─ 37
│  │  │  ├─ 1def7d7762edbcccb1cf0bc2669051cdafd75c
│  │  │  └─ 62acb4f4c7b1cdd57a3438ee3aa7bd100e0cae
│  │  ├─ 38
│  │  │  ├─ 6780dbd6dfadb328b0dbe6a3cbd0be1f28058f
│  │  │  └─ a794da88a396aff51a1f34252dceaf3ecc5fba
│  │  ├─ 3b
│  │  │  └─ 62372c150c44af78594f327aee73c51498ff23
│  │  ├─ 3c
│  │  │  ├─ 5ede4706fd890807718a46b50bee29d6e3f01d
│  │  │  └─ 77da0c57ed1e3cf478378ddb7e80641bf5d5ab
│  │  ├─ 3d
│  │  │  ├─ 0c396942ac8ca8b97bcc2f73aa91b28d464efe
│  │  │  ├─ 32ed962bbfd8b133f0bbe1daa4ccafcd951084
│  │  │  ├─ 56c43a95118d6daf05f75fd1741f3131cf17e0
│  │  │  ├─ 67c01a7e6bd1813b2c28b206a3bc69db9d5042
│  │  │  ├─ ac278fa7135ffd322e8863c0437937f5a52e72
│  │  │  ├─ d280f1e092645fa32530ce40286c84b61f1862
│  │  │  └─ fafdd5094dd4519c8618a4260ff4bf6668df3d
│  │  ├─ 3e
│  │  │  ├─ a0905adb9cbca659607bad2132d34c50818bfe
│  │  │  ├─ aa75d96e407ee0832091b5ff172fa7ee3e064b
│  │  │  └─ b9b27387ed8972ffe51845d8badfa699e6b41e
│  │  ├─ 40
│  │  │  └─ 60e6caf552b9cf1ee85fd353f0d8d203b87d23
│  │  ├─ 41
│  │  │  └─ c682dda09aec4270ed94214aede538ba210333
│  │  ├─ 43
│  │  │  ├─ 01a6c8642f41125af912ee06af7e6c3d33af76
│  │  │  └─ e65a603872d8b1ef6068ad0ee37713666f6bc4
│  │  ├─ 44
│  │  │  └─ 8584f1495b993a0cf09a67fa0c698064e6cbe8
│  │  ├─ 45
│  │  │  ├─ 68851f90750ced9589992c4fc1abf945372960
│  │  │  └─ 987bc7b2ccebdd1d45788fb87a0047d4887a41
│  │  ├─ 46
│  │  │  └─ 0efc5d395bea5d7b0fa37456820a8559a6080f
│  │  ├─ 48
│  │  │  └─ ee947e544e4b243036f92da13dd466090c102e
│  │  ├─ 49
│  │  │  ├─ 4878e2ff94a87897eb4b08158af6ec7bfe6c4e
│  │  │  ├─ 61d1588746b84442a367d190d8a1e795bfe695
│  │  │  └─ aaec6b66225d5a58219a2846fe6aad97450061
│  │  ├─ 4a
│  │  │  └─ 50745ffa429136a491de4aeabf134f365bff0a
│  │  ├─ 4b
│  │  │  └─ 32e2cb651321b075b80bd7385d902bc883f1db
│  │  ├─ 4c
│  │  │  ├─ 037811feeab0443e17fde0ccb913d93ac3b8ca
│  │  │  ├─ 075f0e51beeca36a26aee875467ba569506811
│  │  │  ├─ 3ba55b372d8c416a3948ec1c67c0bdf837bed8
│  │  │  └─ b35cd4b57113098d5df4d5bb246ac02e697173
│  │  ├─ 4d
│  │  │  ├─ 5378db828c8803788042908d43029b9455ba6b
│  │  │  ├─ a0e7e347d1bc4e5bfde793cf4035207f899283
│  │  │  └─ a22f101fc4e65db8ab10fb32f0778c7938902f
│  │  ├─ 4e
│  │  │  └─ 7117b3a038caf0fe94859dba6a72b5fbc22995
│  │  ├─ 51
│  │  │  ├─ 6511d1916a8da229afce3220deb4ba90016047
│  │  │  └─ 82188aa806062b73c85ef6cc95952fb59f97ba
│  │  ├─ 52
│  │  │  ├─ 2f40c7523094b4bf8ccb2f03764b1e19959c77
│  │  │  ├─ 438d4a1023c4adf5b2a2a1bec875df908e597b
│  │  │  └─ f744140e7b98a2e7a14a6c57ea9d6eda6f559f
│  │  ├─ 53
│  │  │  ├─ 534ebb1bdb5790930982f6dd1c1f9bfd68c558
│  │  │  ├─ 82a5ef6faf01346b337c018413086f65cff505
│  │  │  └─ c38708223d37210e9181241634db75f138966d
│  │  ├─ 54
│  │  │  ├─ 8cabbc48b62ddae4b6c152a6befd5ad512c223
│  │  │  └─ 9d7b246c676166cc58af36323826b369e0fd31
│  │  ├─ 55
│  │  │  └─ 87e7912b93c560e2c2b01051c259d5c8fd9ffa
│  │  ├─ 56
│  │  │  ├─ 696ed944f4d16edbffbf6a6c10aa534ec462e4
│  │  │  └─ d1d3a449b93f580ea8318f0a91b4416124d1bc
│  │  ├─ 57
│  │  │  └─ 521fba24bc2ccc221fcf68465e50b0453d7ff9
│  │  ├─ 58
│  │  │  ├─ 37915016be5352624d3261105638752d4f34f6
│  │  │  ├─ 7959968ffaedeb57fc693dd6cd0afdc74ba709
│  │  │  ├─ b695b90b459bf54c6306f77cd5a570db8a5b3e
│  │  │  └─ b9d94ea38e13905950d5453aaec49cbbe6f117
│  │  ├─ 59
│  │  │  ├─ 84851de20c5517798bc0c95c62f5eac6b2c6be
│  │  │  └─ ad589b485f80d9b8a6478ccda1547cf84ab485
│  │  ├─ 5a
│  │  │  ├─ 7169d22de176f3745896218be8e6c29f5ca1e4
│  │  │  ├─ 762e5c1075fe3d631dd628749d246173ca3420
│  │  │  └─ ffe577c2bdf968b77a0c42658bdc2fd65e5fbb
│  │  ├─ 5d
│  │  │  ├─ 04f4fb339483e574f566ab37f4fa959ee46f53
│  │  │  └─ 2bf56bff124f0818b2f6b00c20080e6385de79
│  │  ├─ 5e
│  │  │  ├─ 8b71bfde2cb1477edd282f1dd9ff2cd4f0aba0
│  │  │  └─ ad5a017fc498d1e950b75e509eaba7c9fda555
│  │  ├─ 5f
│  │  │  ├─ 6cdbd42df39f3ce5c242e7edc9a3e59bc9fde7
│  │  │  └─ f3ff934f0a964134c12f22f2f939d5bf2d53bb
│  │  ├─ 60
│  │  │  └─ 88140b92bfc399eafc27fb8941d7c869dd5d9f
│  │  ├─ 63
│  │  │  └─ 40ac99ab50ba6bc06939d14a909b27a75cc695
│  │  ├─ 64
│  │  │  └─ a39d09efed62251205e672fcca5528cfe51158
│  │  ├─ 65
│  │  │  └─ 950ea81596ddf30363c1e02da6e118913ebd82
│  │  ├─ 66
│  │  │  └─ 315087bb03aed50b529459f270a03c94cc4802
│  │  ├─ 69
│  │  │  └─ d05ba1691d6c3b70865ff17f025fbded6b5213
│  │  ├─ 6a
│  │  │  ├─ 45b2a322ce4f89ece225c0835089904fdf9ad2
│  │  │  └─ d4a3eb77621ba5e825c2c53058c5e35380c655
│  │  ├─ 6c
│  │  │  ├─ 723a199a66d927974e6ecd55501b6c6e1fec68
│  │  │  ├─ 9f039dfe945c82357c1adbeede89ce92817a09
│  │  │  └─ d12fefa098c3e037dfead90eb2db69dbf507dd
│  │  ├─ 6d
│  │  │  └─ 1858e53ddb2500825b73a200be718cb7cd2e23
│  │  ├─ 6f
│  │  │  └─ 9e44537720ac510f9974369493ec15402cc291
│  │  ├─ 70
│  │  │  ├─ 304d542e6b7246a43c32e808e70c4b4650780d
│  │  │  └─ 421aadd7229968e6170df63a2b279a6797d875
│  │  ├─ 71
│  │  │  ├─ 4e1b720456fb8996139579e5fca799e369b89f
│  │  │  ├─ 5dae9930707d101fb93ab8be096e1dfe2770e3
│  │  │  └─ f953b8507a91cf69e8921695772ced3aa7b764
│  │  ├─ 72
│  │  │  └─ 36b3fa59364feeaea47186795a45668a2232d6
│  │  ├─ 73
│  │  │  ├─ 081ff058baa961282f89876a8fc3c2bce107f6
│  │  │  ├─ 1dc5f11242e45dd981d937be0a53e509d1ec65
│  │  │  ├─ 34c0e55f36177d5c537e6bab5f9a8765e13ee4
│  │  │  ├─ 4c89270ebd97871e20c59ef7d6f9df06260de5
│  │  │  └─ f43bfdf8986fd923c7bfa5c864d625e0edc74e
│  │  ├─ 74
│  │  │  └─ 805f2de17642e89c52ad9d8a23f34947f34122
│  │  ├─ 75
│  │  │  └─ fc9fc60ff0fb2b7a1bea66ecda61e4d0e015d0
│  │  ├─ 77
│  │  │  └─ b081f716c499719528d2b21ca0d691b2344ba0
│  │  ├─ 78
│  │  │  ├─ 7b9d30476bffaf31e519703e99489cdd70ac6e
│  │  │  └─ ef62df2b79a4b00aa9a37139ebe6dd595b5ecb
│  │  ├─ 79
│  │  │  ├─ 483232ca888dec8efad5da3be70ecb9b75d9ed
│  │  │  └─ a56122ac650ff09145fbbcf6d4e4356405ac40
│  │  ├─ 7a
│  │  │  └─ 78249ab3e2e6e0d8e9723d8e649dc4a06dd881
│  │  ├─ 7b
│  │  │  └─ 21658ed065ba03d16efdd6a43c424e67102bbb
│  │  ├─ 7c
│  │  │  ├─ 038d09207839439e25cebe2d12825dfdd5a53c
│  │  │  ├─ 0c783dfeac75caccc81241c227de5a40eb0ec6
│  │  │  ├─ 1df049119bbd87c84db9f82ec3c89be4eb5da6
│  │  │  ├─ 86e6f9bb73db7f63c698275ac934f34772fb77
│  │  │  ├─ cfad48325afdc18ea3a4ed2b907841c161feba
│  │  │  └─ e356bdb0c03cdf5906962677d02f9632522c9f
│  │  ├─ 7d
│  │  │  └─ c1fd56c7170b308fe501f48710c8f5cc2386be
│  │  ├─ 7f
│  │  │  ├─ 71d33796c4cb50b5a827441af9967e5645735e
│  │  │  ├─ f3e02a563848631a54a5de2bcf23446ea7bc8b
│  │  │  └─ f8804a17b2e725347747ad16075d224f04a01b
│  │  ├─ 80
│  │  │  ├─ 340c4c6304a039511092bdd05af9175714925b
│  │  │  └─ 971699bcbdb9fa27a7f305247fbba888c85406
│  │  ├─ 81
│  │  │  └─ 810bd24c7523103b7fa948fbade11a4612bcc6
│  │  ├─ 82
│  │  │  └─ d48ac8993e36a130dfeb0af105c5bc871ad636
│  │  ├─ 83
│  │  │  ├─ 5f7e150413c405760a67423b2b184309d561e7
│  │  │  └─ 793fcfd554f5e183659a28a38d00e5a6ef2066
│  │  ├─ 84
│  │  │  └─ 69c214e7ac0e0ff599b3a2f8f3e0f0258cd6b9
│  │  ├─ 85
│  │  │  ├─ 113b873829dd44611b7691a2e62ff9bbcaee16
│  │  │  └─ 387bbac953f027ac19f4156d4c249128feccc4
│  │  ├─ 86
│  │  │  └─ ebf210b0c63f59584d3eca6c68a8168193851a
│  │  ├─ 88
│  │  │  ├─ 97673a2cf6de46a18235084dcb12e3f16633d6
│  │  │  ├─ 98ea9963cd1385e7a6bed19bb8ce8a828afb20
│  │  │  └─ e9c1c7787f9c6dee9d6674149959ddb1e50902
│  │  ├─ 89
│  │  │  └─ 20a461ba7dd5372fac88475a85da667e10bd6e
│  │  ├─ 8a
│  │  │  └─ 728ff625ca943dbafcd727357112ab2743aed2
│  │  ├─ 8b
│  │  │  └─ c4d63ac07b498fd64b86fcb418fce8fdc31510
│  │  ├─ 8d
│  │  │  └─ 37405be690591f51e618d15a1706cd4d11245b
│  │  ├─ 8e
│  │  │  └─ 69a2d90c7bbaadfbd0ccf22b8ccbda74f8fe18
│  │  ├─ 90
│  │  │  ├─ 2ba7358e19fe69372a51bbdfa79aefdb4e311f
│  │  │  ├─ 66c322fe5257ea7b4cd571a7505db579871b5a
│  │  │  └─ e69061a844c81f8d50d29c2489555e84059091
│  │  ├─ 93
│  │  │  ├─ 0b76463fb77a8d52ba4976edad3bb31bd1c48e
│  │  │  ├─ 0df3b1148d360f75a6c79db6f1ec908f0adcda
│  │  │  ├─ 5c185008948b3cf40ab48b34438b2cf388db26
│  │  │  └─ b9078e485f71b953d931888caf6195feb99171
│  │  ├─ 95
│  │  │  └─ 8abc012fb63494fe2f5f30b54b3ce20baaa570
│  │  ├─ 98
│  │  │  └─ 9b99f44dd35bd9bfb98a1c1979dcb7b0bdd840
│  │  ├─ 99
│  │  │  ├─ 4ac6300471b01a9dde9c4fbecf0f5cf12ebeb7
│  │  │  └─ 8798935bc08f650879de37d7a11a26b86a0cb0
│  │  ├─ 9c
│  │  │  ├─ 387420eb8d8800e722529c2a4bbed4857c2722
│  │  │  └─ e1a0355549fb02001f66fff7cce111d0c43664
│  │  ├─ 9e
│  │  │  ├─ 2857386a61725f939e90ffb0bbe441b7d6f5d1
│  │  │  └─ b7089f32cd486ebc2b027af69fd2c0c66bf89e
│  │  ├─ 9f
│  │  │  └─ f710750e4c26c93a420ed1b6ded705989ba79c
│  │  ├─ a0
│  │  │  ├─ c0c5db9e2210ae7b303dbc9933db2b302447dc
│  │  │  ├─ c831affa5027869ade0eca298310b61f0fe11d
│  │  │  └─ f57c063b528d74409b5c9fdfbc7946e7d448f9
│  │  ├─ a2
│  │  │  ├─ 9406d4904cd3c58e95092b19f7309141bff4d9
│  │  │  ├─ b719a8613ec4c17a6b23434fe59f4eac07ffaa
│  │  │  └─ eee0c7cb8529c8555240c8a8684a2dd733c7e0
│  │  ├─ a3
│  │  │  └─ cb99c239df19786c9703e221a2c8e61805e79d
│  │  ├─ a4
│  │  │  ├─ c2c8e8329ad3203c4c5b49559a3a2f81a1752d
│  │  │  └─ f955a929cd587a37bb77e102b8b0d03a529244
│  │  ├─ a5
│  │  │  └─ a73e8520539bec70ce609efdcd18fa683c3f42
│  │  ├─ a7
│  │  │  └─ 77b574b483d3d2a2d8312cd45b311352d0b118
│  │  ├─ a8
│  │  │  ├─ 452326b8a67c1bbb1348799f331636ff5ba1cc
│  │  │  └─ f62777a8cf78524c543040856b6c634d629fb8
│  │  ├─ aa
│  │  │  ├─ 2dfbe2018c659e98b95ecc4810f8dc60e17783
│  │  │  ├─ ddcaa484e6fa8b82060e357371450be34e6e51
│  │  │  └─ e5b49a3f708a9657ae2cee05724aebf410eb54
│  │  ├─ ab
│  │  │  ├─ 39406ba8c6f7223c216f6c11c3c75ecf0ba864
│  │  │  ├─ 6de09d3830aed1c1715ff018ddbf8404b85a40
│  │  │  ├─ af63c6493e0c6ed0897e0056453a9913d524db
│  │  │  └─ d1f6e35018a2e22801dbde0bcf026fcb2137db
│  │  ├─ ad
│  │  │  ├─ 721272c5a66ba960fae9432126164791a1db7c
│  │  │  ├─ a8594f392d6fe12a6dd7448f70aa96534b3677
│  │  │  ├─ d6db5ec65840f18a1df181eac838810d087b9e
│  │  │  └─ db246925436f7cddb5e82058548948b8b36523
│  │  ├─ ae
│  │  │  └─ bf1bc95aed3c439ec85f818ddee364ab0d4b22
│  │  ├─ af
│  │  │  ├─ 6976eb1ebca8c57c978c088fcf2b8454321e08
│  │  │  ├─ 94fef6486452ce95367cff9dae012c41d9655f
│  │  │  ├─ a114eb676a0cdbd895d301454a89d2444304dc
│  │  │  └─ bb7f4e9430a62e9ab50b7d6181a39214266ae5
│  │  ├─ b0
│  │  │  └─ cc1886ef641e9fb2a27a7c68201de2119ed492
│  │  ├─ b1
│  │  │  └─ 99a73e5336c79bdf510de4deea818c1cf8e47b
│  │  ├─ b4
│  │  │  ├─ 3d1281e10a78f2101f5b766a009051d084b61a
│  │  │  ├─ 4850835c556785471d0797e8c81b1e5b1e0950
│  │  │  ├─ bfb4e973aa6a185ae3a3933159ce3b23b6d832
│  │  │  ├─ c1f3db0bab0c96b9cda1786d658dad686a15c2
│  │  │  └─ f75308196228f5209688709f41e754d4cc0d34
│  │  ├─ b5
│  │  │  ├─ 32efd700c2fae00d02b0eef8f090d7f068772d
│  │  │  └─ 52e0d722d5c4431d6a02da5b2270a54f044bc6
│  │  ├─ b6
│  │  │  └─ 3c93c38027ece7eef1dda58429b0d55ffc2161
│  │  ├─ b8
│  │  │  ├─ 3f1f0956ea0049c184b1e1b2cfbd2c72df959f
│  │  │  ├─ b3ebf20d8665380856198891859cb985a8bf2b
│  │  │  └─ c514e6f9ebc83660969c5182ea8f49827b4c9e
│  │  ├─ ba
│  │  │  └─ 660fbc7e50aed1582511e0f033b7083449f5b0
│  │  ├─ bc
│  │  │  └─ 94f2d505dd079f86a67e7dfddfb796c6335984
│  │  ├─ be
│  │  │  └─ 613d7934435152f2d3e87da9273bdfe2185d22
│  │  ├─ bf
│  │  │  ├─ 2d08bf3767adff712b28b04a87d131cde7a1c8
│  │  │  └─ 6e4976e3ba0f722d060e35df2b199980f1e6d2
│  │  ├─ c0
│  │  │  ├─ 20cde6f3956c77eb46e20e21a2f441eb428fc8
│  │  │  └─ f64ff0a8612d4f5f2080eed2f4fe4748c2833b
│  │  ├─ c1
│  │  │  ├─ 1f360ac32feb8ce9d0d061a44e7c9fc9e09d94
│  │  │  ├─ 256e8a1a715226c55454c96bbd0ec79fdbf04c
│  │  │  └─ 2868da688552bc962c9372daf393fd14d4ad33
│  │  ├─ c2
│  │  │  ├─ 8d0d659812b8477174a3b7ad351b25f10d4dde
│  │  │  └─ ad255da857a457daf2c081d130809deb1479d1
│  │  ├─ c3
│  │  │  └─ 69c06184f456c730f99e08df29d1edf522318f
│  │  ├─ c5
│  │  │  ├─ 2fcb35fd9c170f79bf70ce21242f3f72575e70
│  │  │  ├─ 8d1a68d6359d7c9ef2cd78f43605819701e3eb
│  │  │  ├─ bbd53eb7c6f27f84ebf3d5e01270f8e8c4361e
│  │  │  └─ c8081441111fae7e1263ae3968767b37d871cc
│  │  ├─ c6
│  │  │  ├─ 53e5e8493022319b6f45bca5fbedeeb1404c3e
│  │  │  └─ f0c29832c08453146abb4e3e0cce62334c1ae5
│  │  ├─ c7
│  │  │  ├─ 42d5c78600014c16f329408e513cfa28819fe8
│  │  │  ├─ a54160c58ba4e904ea21c9853809c6067decd0
│  │  │  └─ c988e0b6ad2616000b407721556a3eebfae354
│  │  ├─ c9
│  │  │  └─ b1662df9579592da3780bb258804fa380f176d
│  │  ├─ cb
│  │  │  ├─ d42e265ee8d34608c29f98fed039d13ecd1c95
│  │  │  └─ ecd39a23df10bbb09c32a07676fb729669cf2b
│  │  ├─ cc
│  │  │  └─ 9b6d9316d9fdde29bfbcb1c20903d0b0b1badd
│  │  ├─ d0
│  │  │  └─ 40667b6b1314f60059ff4253d0509df4b878ce
│  │  ├─ d1
│  │  │  ├─ 16a5c621eed83cbd56c68fe56ce8cc8540fdcb
│  │  │  ├─ 58e8883acc6fb7e0f577f4d8c475ad01bd4fc3
│  │  │  └─ abd10817126f2ebb2a0df9809769135d764e9a
│  │  ├─ d3
│  │  │  └─ a5bd7cefe743d29c016a6ba9fd5e79edea37e1
│  │  ├─ d4
│  │  │  ├─ 2bfdf2a6c8f62540a5dc224905910252067e86
│  │  │  └─ 6c399e2e23020377eaabed89835a60f7c50e2e
│  │  ├─ d6
│  │  │  ├─ 1c1237f5af77ae088ab0872872a4deb6c28493
│  │  │  └─ 92c3e8b6b5fbf78a1370ceb2ce6a56a89bf4cb
│  │  ├─ d7
│  │  │  ├─ 36dcc20085fc00bd43442a540b26df21da81ba
│  │  │  ├─ 8b2696755965043a1dfe89de06030c6340fe27
│  │  │  ├─ a3fa4f665f4cfe004a7759bf4a7804ccff7d7c
│  │  │  └─ e6998d16c4b151f0a9cd9cb280c89d36c64880
│  │  ├─ d9
│  │  │  └─ 3ff3c9e7f5ee8f1d76db9946f10d39df16ffab
│  │  ├─ da
│  │  │  ├─ 3a86151d4bd2c86698337b297b482a003b0b29
│  │  │  ├─ 3c048e25cde34e03c1800c0662da1a370d7b44
│  │  │  ├─ 5ea2437584c17db2d5017111554b0756cc6793
│  │  │  ├─ 9c26d158641efcadaf96b7e888103b2c08e932
│  │  │  └─ de82913c257147c025b885f9f769e6624ea5dc
│  │  ├─ db
│  │  │  ├─ 77928b1dd6a06b6a4ebe56d79175b5f850fbd1
│  │  │  └─ f33400e195c25b833d11326cbd4df40e1b7049
│  │  ├─ dc
│  │  │  ├─ b9d116fb5f50a07c17638bf5e82be06d05365c
│  │  │  └─ ceabf63c0ed2b480883f64e60ea4058cc36701
│  │  ├─ de
│  │  │  └─ a8f0318e003e92d8ae82c02188eed02f47c425
│  │  ├─ e0
│  │  │  ├─ 54127537144adf7fb9e6afaeb683b05f8b2df9
│  │  │  └─ f7deaab7bcad025d6e5ab26f2528b75b256815
│  │  ├─ e1
│  │  │  ├─ 3dfc9eed90348b93a1c37956f4e03cb6ad08a7
│  │  │  └─ 87c5794fc98f45bf75992f26a6debbd76b4317
│  │  ├─ e2
│  │  │  └─ f9a1ee0cba65d2d3fc7a931b82d10420d06c84
│  │  ├─ e3
│  │  │  ├─ 073f39d22b773a4606b6c80327117118122074
│  │  │  ├─ 1379a70a016437b6ebcae25ccef15f0e308bde
│  │  │  └─ 26105d28fc9ce95bd273c9928b55e28318e2d0
│  │  ├─ e4
│  │  │  └─ 9e8a6e3975c46824c31e3f3767a4a6ff757813
│  │  ├─ e6
│  │  │  ├─ 43ef42db7e2b8bd18f9084d178676232ae1b80
│  │  │  ├─ 7d8e432564068af2c7fa49dc8852905aa72b5d
│  │  │  ├─ 82a95d7a5158aadee61d01df5509bafdace884
│  │  │  └─ d62493c315fd80a9bed84f8122751da7c181fc
│  │  ├─ e7
│  │  │  ├─ b904886dbcc94f6704b64a519824a6a9b3fda0
│  │  │  └─ ddca533745965c16a735997bf32cbf84df079c
│  │  ├─ e8
│  │  │  └─ 3bb108e62cb993beb7e936405b405237e23c82
│  │  ├─ e9
│  │  │  ├─ cd48ca30e89a8dfd0c21581a3931643bbe2e98
│  │  │  └─ fa0c0bb49fa7ed03c0a2804d2444597d542d1d
│  │  ├─ ea
│  │  │  ├─ cd98bd9d95e79feaf4851b586c284e9976116f
│  │  │  └─ d8ad084d1950429ca8e0590926cdea32c42ada
│  │  ├─ eb
│  │  │  ├─ 54810155457fa9c48f86aa242ddc2005d9c770
│  │  │  └─ 768c19ac902e852d65245bd4533a8c7230ceaa
│  │  ├─ ec
│  │  │  ├─ 18d0999ddeef67eacd06cce19994e7bf9abbc9
│  │  │  ├─ 29113c3356a60b458c11eabf7a2e6892a93dbd
│  │  │  └─ 2fd8e12de43dc39281ed7b33f61a7edc75fc61
│  │  ├─ ed
│  │  │  └─ 6d363ec2aad0b265d0fa3852eb07c13aa5aee3
│  │  ├─ f0
│  │  │  └─ e2458aac4dfa26e3e07944a4ca6af54c4ca193
│  │  ├─ f1
│  │  │  └─ e51d96570ce1bbcc02da4c42819aba329393ac
│  │  ├─ f2
│  │  │  ├─ 0475d7430f011f9b22f8379bffa9fce9f1384e
│  │  │  ├─ 1d7e88fc4aa92d3be7437f613dba5c65c2e651
│  │  │  └─ 2df1f87d127384004c053653d7d9702783f8df
│  │  ├─ f3
│  │  │  ├─ 493422da6605a44e0ecc8d8e384748973c08a4
│  │  │  └─ f3a58e564a988ee72847e5105463c31a3dddcf
│  │  ├─ f4
│  │  │  └─ 857e09fb5d899a9a817a127b3eeefcd01ec478
│  │  ├─ f5
│  │  │  └─ d801ddf3ace9b43477373b55c4f22b774792a0
│  │  ├─ f6
│  │  │  ├─ 85eefce018caf2dbcf572801c82998b50bd97b
│  │  │  ├─ b7dfb45e915c8ebfbd1f841a7e2165c4bc77eb
│  │  │  └─ d750dc926d4f6778a1733166dbd08d5397dde4
│  │  ├─ f7
│  │  │  ├─ 1e4b5fff90db1a5c449cdb70a1f4ce16371b97
│  │  │  └─ 63c55b808d9446b1867b7ab080718762a4a924
│  │  ├─ f8
│  │  │  ├─ 243379a056e2a0caf3bec2c67205504fa343ae
│  │  │  └─ 57a79952db64f23e77e29f000157aaf045db0e
│  │  ├─ fb
│  │  │  ├─ 4e572cab1fb1d2ca6dad43e0e50f85a1687860
│  │  │  ├─ 5980ec571f609e15b6beeb48945d42b2833801
│  │  │  └─ 816e35613430ea48cf018397b0414a12a445fd
│  │  ├─ fc
│  │  │  └─ 60ad2c56db3a83879a17dad335e396e796cc0d
│  │  ├─ fd
│  │  │  └─ 0eec1d08b308e2f67dde36b00e54b3d5f793d1
│  │  ├─ fe
│  │  │  ├─ 047f48c3552a8d448509e045a5fbcd606b34bb
│  │  │  ├─ b5144eb7074320fe34113e14ef7b04810bf63f
│  │  │  └─ c023fef4edd373c47373bd8db8ab9123afadfa
│  │  ├─ ff
│  │  │  ├─ 3e267231b7bc5969f80c863fec05b00eba4225
│  │  │  └─ d59c325a58a347ad25c160f63b26f12db754d2
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-81cd64355f43f015a216f486b4e37fac171bcdaf.idx
│  │     └─ pack-81cd64355f43f015a216f486b4e37fac171bcdaf.pack
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     ├─ HEAD
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ README.md
├─ data.json
├─ index.html
├─ netlify.yml
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