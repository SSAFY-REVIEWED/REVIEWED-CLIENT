<div align="center">
  <img src="README.assets/로고.png" width="400" />
</div>

1. Description
2. Get Started
3. OverView
4. Development
   - Schedule
   - Languages and Tools
   - ERD
   - Members
5. RetroSpective

---

## Description

나의 리뷰 흔적을 재밌게 남길 수 있는, **REVIEWD**

- 지루하게 리뷰만 쓰고 말 것인가? 아니면 리뷰를 통해 퀘스트를 달성하면서 조금 더 재밌게 영화를 다루어 볼 것인가?
- 유저 참여형 추천 시스템
- 나의 흔적을 시각화 하고, 다각도로 살펴볼 수 있는 프로필
- 사용자 경험을 우선시 하는 UI/UX

---

## Get Started

### client

```
$ git clone https://github.com/SSAFY-REVIEWED/REVIEWED-CLIENT.git
$ cd reviewd-client
$ yarn install
$ yarn serve
```

### server

```
$ https://github.com/SSAFY-REVIEWED/REVIEWED-SERVER.git
$ cd reviewd-server
$ python -m venv venv
$ source venv/Scripts/activate
$ pip install -r requirements.txt

$ python manage.py makemigrations
$ python manage.py miragte
$ python manage.py runserver

# tmdb 기반 영화 데이터 추가
$ python manage.py loaddata movies/fixtures/genre_data.json 	
$ python manage.py loaddata movies/fixtures/movie_data.json

# 서버 실행
$ python manage.py runserver

```



### UX를 향상시키기 위한 회원가입 

<div align="left">
   <img src="README.assets/Screenshot-3602796.png" width='400' />
   <img src="README.assets/Screenshot-3602880.png" width="400" />
</div>

- 회원가입 방법부터 사용자에게 편의성을 제공하고자 고민하였습니다.
- 이메일을 아이디 대신해서 사용하기 때문에, 실시간을 아이디 중복 여부를 사용자게에 알려줍니다.

### 선호 장르 조사

<div>
   <img src="README.assets/Screenshot-3602911.png" width=400/>
</div>

- 회원가입을 완료한 경우, 사용자의 선호 장르를 조사하고, 관련된 컨텐츠를 사용자에게 추천합니다.

### 메인 페이지

<div>
   <img src="README.assets/Screenshot-3603566.png" width=400/>
</div>

- 메인 페이지에서는 사용자를 위한 컨텐츠 추천을 제공합니다.

### 영화 세부 페이지

<div>
   <img src="README.assets/Screenshot-3602991.png" width=400 />
     <img src="README.assets/Screenshot-3603102.png" width=400 />
</div>

- 포스터 또는 검색을 통해 컨텐츠 세부 페이지로 이동
- 줄거리, 출연배우, 감독 예고편 정보 제공
- 영화별 리뷰 등록 
- 사용자 기반 실시간 평점 기능 제공
- 보고싶은 영화 등록

### 리뷰

<div>
   <img src="README.assets/Screenshot 73.png" width=400 />
   <img src="README.assets/Screenshot-3603053.png" width=400 />
</div>

- 영화 상세페이지에서 리뷰를 바로 등록 기능 제공
- 리뷰 작성 시 스포일러 여부 선택 제공
- 본인이 작성한 영화 리뷰는 상세 페이지 최상단에 고정되어, 리뷰 작성 여부를 즉각즉으로 알 수 있음.

- 스포일러를 쳌할 경우, 다른 사용자들에게 블러 처리 기능을 제공하여 스포일러를 방지할 수 있음
- 리뷰보기를 클릭할 경우 블러처리가 사라짐
- 리뷰에 대한 좋아요 ❤️ 기능 제공

<div>
   <img src="README.assets/Screenshot-3603062.png" width=400 />
</div>

### 리뷰 상세 페이지

<div>
   <img src="README.assets/Screenshot-3603070.png" width=400 />
     <img src="README.assets/Screenshot-3603088.png" width=400 />
</div>

- 더보기 버튼을 클릭할 경우 리뷰 상세 페이지로 이동
- 리뷰에 대한 좋아요 및 댓글 작성
- 리뷰 작성자는 리뷰에 대한 수정 및 삭제 가능
- 좋아요 및 댓글 개수를 누적을 바탕으로 추천 알고리즘 계획

### MVP -게이미피케이션 CHALLENGE

<div>
   <img src="README.assets/Screenshot-3603122.png" width=400 />
     <img src="README.assets/Screenshot-3603184.png" width=400 />
</div>

- **REVIEWD 서비스의 핵심 기능인 CHALLENGE 기능**
- 사용자의 경험 또는 다양한 주제로 주기적으로 사용자에게 리뷰 이벤트를 제공
- 영화 주제 및 관련 영화를 최대 10여편 제공
- 해당 영화에 대한 리뷰를 작성할 경우, 이미지와 같이 작성 여부 및 진행 현황 정보 제공

<div>
   <img src="README.assets/Screenshot-3603219.png" width=400 />
</div>

- 주제별 미션을 달성할 경우  미션 클리어 표시가 나타나며, 미션별로 추가 경험치 획득

### 랭킹 페이지

<div>
   <img src="README.assets/Screenshot-3603234.png" width=400 />
</div>
- 리뷰 작성 및 CHALLENGE 모드 진행에 따른 REVIEWD의 랭킹 시스템 제공
- 상위 15명을 상단에 노출시키며, 해당 유저의 상세 페이지 이동 및 작성된 리뷰를 볼 수 있음.

### 검색 기능

<div>
   <img src="README.assets/Screenshot-3603275.png" width=400 />
   <img src="README.assets/Screenshot-3603266.png" width=400 />
</div>

- 네비게이션 바에 검색 기능을 제공
- 검색어를 입력할 경우, query에 맞추어 검색 페이지로 이동
- 영화 및 사용자 검색 기능 제공

<div>
   <img src="README.assets/Screenshot-3603291.png" width=400 />
   <img src="README.assets/Screenshot-3603307.png" width=400 />
</div>

- 검색어와 연관된 사용자가 나타나며, 사용자의 프로필 페이지 이동 또는 팔로우 및 언팔로우 기능 제공

### 유저 정보 페이지

<div>
  <img src="README.assets/Screenshot-3606478.png" width=400 />
</div>

- 상단의 유저 이미지 누를 경우, 사용자 프로필 이동 및 로그아웃 기능 제공
- 프로필 이동 시 프로필 내 중첨 라우팅을 이용하여 프로필 히스토리 페이지로 이동

<div>
   <img src="README.assets/Screenshot-3603354.png" width=400 />
   <img src="README.assets/Screenshot-3603362.png" width=400 />
</div>

- 히트맵 및 차트를 이용하여 사용자의 리뷰 모든 정보 열람 가능
- 히트맵을 통해 일일 작성 리뷰 개수 파악
- 챠트 맵을 통해 사용자의 컨텐츠 소비 취향 파악 가능 및 정보 제공

<div>
   <img src="README.assets/Screenshot-3603385.png" width=400 />
</div>

- 홈페이지 이용 기능 및 리뷰 경험치, 챌린지 모드, 레벨 등에 대한 질문 답변을 미리 제공

<div>
   <img src="README.assets/Screenshot-3603405.png" width=400 />
</div>

- 프로필 무비 페이로 이동할 경우 사용자가 평가했던 모든 영화 리스트 및 평가 평점 정보를 포스터 카드에서 제공

<div>
   <img src="README.assets/Screenshot-3603490.png" width=400 />
   <img src="README.assets/Screenshot-3603503.png" width=400 />
</div>

- 유저가 작성한 모든 리뷰 히스토리를 한 곳에서 열람할 수 있는 기능 제공
- 유저가 보고싶은 영화를 보여주는 기능 제공

<div>
   <img src="README.assets/Screenshot-3603519.png" width=400 />
</div>

- 프로필 이미지, 닉네임 등 기본정보 변경 기능

## DEVELOPMENT

**Schedule**

- 기간: 2022.05.16 - 2022.05.27

<div>
  <img src="README.assets/Screenshot-3607180.png" width="700" height-"300" />
</div>

## Languages And Tools

![Screenshot-3607588](README.assets/Screenshot-3607588.png)

## ERD

<div>
  <img src="README.assets/Screenshot-3607032.png" width=600 />  
</div>

## FIGMA

<div>
  <img src="README.assets/Screenshot-3607632.png" width=500 />
</div>



## MEMBER

<div align="center">
<table width="100%">
  <thead>
    <tr>
      <td align="center">
        <br />
        <a href="https://github.com/Eunyeol-Lucas"
          ><img
            src="https://avatars.githubusercontent.com/u/82889580?v=4"
            width="300px"
        /></a>
          <p>
            <br />
            <b>남은열</b>
          </p>
      </td>
      <td align="center">
        <br />
        <a href="https://github.com/jhwon07">
          <img src="https://avatars.githubusercontent.com/u/45295059?v=4" width="300px"
        />
        </a>
        <p>
          <br />
          <b>원재호</b>
        </p>
      </td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <b>프론트엔드</b>
        <ul>
          <li>협업 도구 및 컨벤션 관리</li>
          <li>GIT 전략 수립</li>
          <li>일정 관리</li>
                    <li>프론트엔드 초기 세팅</li>
                    <li>페이지 레이아웃 설계</li>
                    <li>세부 기능 구현</li>
                    <li>프론트엔드 라이브러리 선정</li>
        </ul>
      </td>
      <td>
        <b>백엔드</b>
        <ul>
          <li>협업 도구 및 컨벤션 관리</li>
          <li>백엔드 시스템 설계</li>
          <li>데이터 베이스 설계</li>
                    <li>추천 알고리즘 설계</li>
                    <li>API </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <b>기획 및 디자인</b>
        <ul>
          <li>컨셉 디자인</li>
          <li>레퍼런스 수집</li>
          <li>Figma 이용한 기본 UI 설계</li>
        </ul>
      </td>
      <td>
        <b>기획 및 디자인</b>
        <ul>
          <li>컨셉 디자인</li>
          <li>가술 스택 조사</li>







