# HTML



## HTML, CSS 그리고 JavaScripy



HTML은 페이지에 제목, 문단, 표, 이미지, 동영상 등을 정의하고 그 구조와 의미를 부여하는 정적 언어로 웹의 구조를 담당

CSS는 마크업 언어(HTML, XML 등)이 실제 표시되는 방법(색, 크기, 폰트, 레이아웃 등)을 지정하여 콘텐츠의 구조를 꾸며주는 언어로 웹의 시각적인 표현을 담당한다.

JS(JavaScript)는 콘텐츠를 바꾸고 움직이는 등 페이지를 동적으로 꾸며주는 역활의 프로그래밍 언어

JS는 HTML과 CSS를 동원해서 그 역활을 할 수 있지만, 그들만큼 잘 못해서 가급적 동적 처리에만 집중한다.

집을 지을 때 골조, 미장, 인테리어 등으로 효율적인 작업을 위해 각 분야가 나뉘듯 분야가 나뉘어져있다고 생각하면 된다.



## 웹 표준

웹 표준(Web standard)이란 '웹에서 사용되는 표준 기술이나 규칙'을 의미하며 W3C의 권고안에서 나온 기술들이 여기 해당함.

이 표준 기술들을 기준으로 웹 브러우저들(크롬, IE, 파이어폭스 등)이 만들어지는데, 브라우저를 만드는 업체에서 표준 기술을 해석하는 차이, 새로운 기술(표준화 제정 단계에 따른) 등으로 조금은 다르게 구동됨



## 크로스 브라우징

크로스 브라우징은 위에서 설명한 것처럼 조금은 다르게 구동되는 여러 브라우저에서 동일한 사용자 경험(같은화면, 같은 동작 등)을 줄 수 있도록 제작하는 게숙, 방법 등을 의미한다.

대부분의 브라우저는 최대한 웹 표준에 준수해서 제작되기 때문에 문제 되는 경우가 적지만 IE 브라우저는 여러의미에서 표준화하기 쉽지 않다.

그래서 IE에서"도" 동작하게 하는것을 크로스 브라우징이라고 부르기도 한다.



## 웹 접근성

웹 접근성이란 정상적인 웹 콘텐츠 사용이 가능한 일반 사용자부터 고령자, 장애인 같은 신체적, 환경적 조건이 제한이 있는 사용자들을 포함해 모든 사용자들이 동등하게 접근할 수 있는 웹 콘텐츠 제작 방법을 의미한다.

청각 장애인을 위해 영상에 자막을 넣거나, 마우스를 사용할 수 없는 사람들을 위해 키보드를 통해서도 웹을 이용 할 수 있게 하거나(혹은 그 반대) 등이 여기에 해당한다.

아래 링크에 접근성에 대한 지침이나 제작기법 등의 문서를 첨부

[웹 접근성 연구소](https://www.wah.or.kr:444/Accessibility/define.asp)

[한국형 웹 컨텐츠 접근성 지침 2.1](https://www.wah.or.kr:444/Participation/guide.asp)

[웹 콘텐츠 제작기법](https://www.wah.or.kr:444/Participation/technique.asp)



## 웹에서 사용하는 이미지

이미지(그래픽)는 크게 비트맵과 백터로 구분됨

비트맵은 각 픽셀이 모여 만들어진 정보의 집합으로 레스터(Raster) 이미지라고 부른다.

픽셀 단위로 화면에 렌더링함으로 우리가 일번적으로 사용하는 대부분의 이미지가 비트맵(jpg 등) 형식이다. 그림판, 포토샵과 같은 툴로 편집이 가능하다



백터는 수학적 정보의 형태들이 만들어내는 결과물

이미지가 가지고 있는 점, 선 면의 위치, 색상 등의 정보를 온전히 가지고 있으며 그것을 화면에 렌더링한다.

좀더 많은 연산을 해야하지만 해상도로부터 자유롭게 렌더링이 가능하다. 쉽게 이야기하면 확대 및 축소를 해도 이미지가 깨지지 않는다. 일러스트 같은 툴로 편집이 가능함. 

| 이미지 종류 |                   장점                   |                         단점                         |
| :---------- | :--------------------------------------: | :--------------------------------------------------: |
| 비트맵      |  정교하고 다양한 색상을 자연스럽게 표현  |          확대/축소 시 계단 현상, 품질 저하           |
| 백터        | 확대/축소에서 자유로움, 용량 변화가 없음 | 정교한 이미지(인물,풍경 사진 같은)를 표현사기 어려움 |



## 특수 문자 용어 정리

| 기호 | 영어(발음)                               | 한글         |
| ---- | ---------------------------------------- | ------------ |
| `    | Grave(그레이브)                          |              |
| ~    | Tilde(틸드)                              | 물결표시     |
| !    | Exclamation(익스클러메이션) mark         | 느낌표       |
| @    | At(엣) sign                              | 골뱅이       |
| #    | Number(넘버), Sharp(샵)                  | 샵, 우물 정  |
| $    | Dollar(달러)                             | 달러         |
| %    | Percent(퍼센트)                          | 퍼센트       |
| ^    | Caret(캐럿)                              |              |
| &    | Ampersand(엠퍼센드)                      |              |
| *    | Asterisk(에스터리스크)                   | 별표         |
| -    | Hyphen(하이폰), Dash(대쉬)               | 마이너스     |
| _    | Underscore(언더스코어), Low dash(로대쉬) | 밑줄         |
| =    | Equals(이퀄)                             | 이꼴, 이꼬르 |
| :    | Colon(콜론)                              |              |
| ;    | Semicolon(세미콜론)                      |              |
| ,    | Comma(콤마)                              | 쉼표         |

더 자세한 내용은 [특수문자 리스트](https://www.freeformatter.com/html-entities.html)를 참고하자



## 오픈소스 라이선스



``` 오픈소스란 어떤 제품을 개발하는 과정에서 필요한 소스 코드나 설계도를 누구나 접근해서 열람할 수 있도록 공개하는 것.```

오픈소스라 하면 보통 무료 저작권이고 공짜로 사용해도 문제가 없다고 생각하지만 사실 다양한 종류의 오픈소스 라이선스가 존재하며 개인적인 이용은 가능하지만, 상업적 이용에 제한이 있거나 경우에 따라 비용을 지불해야 할 수도 있음.

현실적으로 처음부터 끝까지 모든 코드를 직접 작성할 수 없기 때문에 오픈 소스에 의존하게 된다. 개인적으로 사용을 목적으로는 문제가 없겠지만, 회사에서 아무 생각없이 사용하다가 문제가 돼서 해고당하거나 피해보상이 생길 수 있다.

회사 작업중 괜찮은 오픈소스가 있다면 라이센스부터 찾아야한다.



1. 아파치 라이센스
   - 아파치 소프트웨어 재단에서 자체 소프트웨어에 적용하기 위해 만든 라이선스
   - 개인적 상업적 이용, 배포, 수정, 특허 신청이 가능하다
2. MIT 라이선스
   - 매사추세츠공과대학(MIT)에서 소프트웨어 학생들을 위해 개발한 라이선스
   - 개인 소스에 이 라이선스를 사용하고 있다는 표시만 지켜주면 OK, 나머지는 제약이 없어 인기가 많다.
3. BSD 라이선스
   - BSD(Berkeley Software Distribution)는 MIT와 동일하게 라이선스 표시만 지키면 된다.
4. Beerware
   - 오픈소스 개발자에게 맥주를 사줘야 하는 재미있는 라이센스, 물론 만날 수 있다면, 사실 상 무료

자세한 라이센스는 [오픈소스 사이트](https://opensource.org/licenses)에서 확인 가능하다



---

# 2. HTML

 태그는 각자의 의미를 가지고 있으며 다음과 같은 형태를 가진다

```html
<TAG></TAG>
<TAG>내용</TAG>
```

  ```html
  <h1>토끼와 거북이</h1>
  <p>옛날 옛적에 토끼와 거북이가 살았습니다...</p>
  
  
  <제목>토끼와 거북이</제목>
  <문단>옛날 옛적에 토끼와 거북이가 살았습니다...</문단>
  ```

태그는 열리고 닫히는 특징이 있음



## 속성과 값

태그의 기능을 확장하기 위해 '속성'을 사용할 수 있다.

```html
<TAG 속성="값"></TAG>
```

```html
<img src="파일 경로" alt="사진" />
<div class="name">홍길동</div>
```

img는 이미지를 삽입할 때 사용 하는 태그

하지만 태그만 사용하면 어떤 이미지를 삽입하는지 말 수 없기때문에 src를 이용해 경로를 지정함. 즉 태그만으로 표현하기 힘든 것들을 속성에 값을 넣어서 사용함



## 부모와 자식 요소

```html
<PARENT>
	<CHILD><CHILD/>
</PARENT>
```

태그 CHILD가 태그 PARENT의 콘텐츠로 사용되면, 태그 PARENT는 CHILD의 부모 요소, CHILD는 PARENT의 자식요소라고 한다. 이는 상대적인 개념이라 언제는 바뀔 수 있다.



## 빈 태크

Empty Tag

HTML에서 닫히는 개념이 없는 태그들이 있다.

```html
<!-- `/`가 없는 빈 태그 -->
<TAG>

<!-- `/`가 있는 빈 태그 -->
<TAG />
<TAG/>
```

HTML5 버전에서는 두 가지 방법 모두 사용이 가능하다



## DOCTYPE(DTD, 버전 지정)

DOCTYPE(DTD, Document Type Definition)은 마크업 언어에서 문서 형식을 지정한다.

이는 웹 브라우저에 우리가 제공할 HTML 문서를 어떤 버전의 해석방식으로 구조화하면 되는지 알려준다.

현재의 표준 모드는 HTML5이다

```html
<!DOCTYPE html>
```

윈도우 운영체제가 95,98 등등 버전이 있는 것과 비슷하다고 생각하면 된다.



## HEAD 태그

### TITLE(웹 페이지의 제목)

HTML 문서의 제목을 정의합니다.

```html
<head>
	<title>네이버</title>
</head>
```



###  META(웹 페이지의 정보)

HTML 문서(웹페이지)에 관한 정보(표시 방식, 제작자, 내용, 키워드 등)를 검색엔진이나 브라우저에 제공한다.

```html
<head>
  <meta charset="UTF-8"> // 인코딩 방식
  <meta name="author" content="홍길동"> // 사이트 제작자는 홍길동
  <meta name="description" content="우리 사이트가 최고!"> //사이트 설명 - 우리 사이트가 최고!
</head>
```

| 속성    | 의미                                                  | 값                                         |
| ------- | ----------------------------------------------------- | ------------------------------------------ |
| charset | 문자인코딩 방식                                       | UTF-8, EUC-KR 등                           |
| name    | 검색 엔진 등에 제공하기 위한 정보의 종류(메타 데이터) | author, description, keywords, viewport 등 |
| content | name이나 http-equiv 등의 속성의 값을 제공             |                                            |



### LINK(CSS 불러오기)

외부 문서를 연결할 때 사용한다. Ex) Css 등

특히 HTML 외부에서 작성된 CSS문서를 불러와 연결할 때 사용

```html
<head>
  <link rel="stylesheet" href="./css/main.css">
  <link rel="icon" href="./favicon.png">
</head>

<!-- 다음과 같이 이해할 수 있습니다. -->
<문서의정보범위>
  <외부문서연결 관계="CSS" 문서경로="./css/main.css">
  <외부문서연결 관계="사이트대표아이콘" 문서경로="./favicon.png">
</문서의정보범위>
```

| 속성 | 의미                                                         | 값                  |
| ---- | ------------------------------------------------------------ | ------------------- |
| rel  | (필수로 rel 속성을 가져야함) 현재 문서와 외부문서와의 관계 지정 | stylesheet, icon 등 |
| href | 외부 문서의 위치를 지정                                      | 경로                |



### SYTLE(CSS 작성하기)

CSS를 외부 문서에서 작성하여 연결하는 것이 아니고 HTML 문서 내부에서 작성할 때 사용한다.

```html
<style>
  img {
    width: 100px;
    height: 200px;
  }
  p {
    font-size: 20px;
    font-weight: bold;
  }
</style>

<!-- 다음과 같이 이해할 수 있습니다. -->
<스타일정의>
  <!-- CSS 코드 -->
</스타일정의>
```



### SCRIPT (JS파일을 불러오거나 지정)

HTML 문서에서 CSS는, 작성된 CSS를 \<link>로 불러오거나 \<style>\</style>안에 작성 할 수 있다

하지만 JS는 \<script>\</script>로 위의 2가지 방식을 모두 사용 할 수 있다.

```html
<!-- 불러오기 -->
<script src="./js/main.js"></script>

<!-- 작성하기 -->
<script>
  function windowOnClickHandler(event) {
    console.log(event);
  }
  window.addEventListener('click', windowOnClickHandler);
</script>

<!-- 다음과 같이 이해할 수 있습니다. -->

<!-- 불러오기 -->
<자바스크립트 문서경로="./js/main.js"></자바스크립트>

<!-- 작성하기 -->
<자바스크립트>
  <!-- JS 코드 -->
</자바스크립트>
```



## BODY 태그

<body></body> 안에서 사용되는 태그들은 HTML 문서의 구조를 나타낸다.



### DIV(막 쓰는 태그)

\<div>\</div>의 div는 분할을 뜻하고 문서의 부분이나 섹션을 정의한다.

명확한 의미를 가지지 않기 때문에 정말 많은 경우 단순히 특정 범위를 묶는 용도로 사용한다. 이렇게 묶인 부분들에게 css나 js를 적용함

```html
<body>
  <div>
    <p></p>
  </div>
  <div>
    <div>
      <h1></h1>
      <p></p>
    </div>
  </div>
</body>

<!-- 다음과 같이 이해할 수 있습니다. -->
<body>
  <묶음1>
    <p></p>
  </묶음1>
  <묶음2>
    <묶음2-1>
      <h1></h1>
      <p></p>
    </묶음2-1>
  </묶음2>
</body>
```



### IMG(이미지를 넣는 태그)

\<img>는 HTML에 이미지를 삽입할 때 사용

이미지 삽입 방법은 HTML에서의 IMG와 CSS에서의 background로 가능하다

```html
<body>
	<img src="경로">
<body>
```

| 속성 | 의미                             | 값   |
| ---- | -------------------------------- | ---- |
| src  | (필수) 이미지의 URL              | URL  |
| alt  | (필수) 이미지의 대체 텍스트 지정 |      |

표에서 (필수) 표시는 \<img>태그를 사용할 때 반드시 포함되어야 할 속성이다

만약 <img src=''경로''>로 사용하여 alt가 누락된다면 이는 웹 표준에 어긋난 것이다.



### 웹 표준 검사하기

웹 표준 검사기 [W3C validator](https://validator.w3.org/#validate_by_upload)

우리가 작성한 HTML 문서가 표준에 부합하는지 테스트 가능

특히 입문자라면 익숙해질 때까지는 자주 확인하는 것이 좋음.



---

## CSS



### 쉬운 CSS 문법

CSS 문법은 HTML 보다 더 쉽다.

아래 예시처럼 선택자, 속성, 값이 있으며 무엇을 의미하는지 이해하는 것만으로 충분하다.

 ```css
 div {
   font-size: 20px; // 글자 크기는 20px
   color: red; // 글자 색은 빨간색
 }
 
 /* 다음과 같이 이해할 수 있습니다. */
 선택자 {
   속성: 값;
   속성: 값;
 }
 ```





### 선택자의 역활

선택자는 HTML에 스티일을 적용하기 위해 HTML의 특정한 요소를 선택하느 ㄴ사인

\<h1>에 글자를 빨간색 \<p>에 글자는 파란색으로 적용하고 싶다면 아래처럼 코드를 작성하게 된다.

```html
//<html>
<div>
  <h1>제목..</h1>
  <p>본문..</p>
</div>
```

```css
//css
h1 {
  color: red;
}
p {
  color: blue;
}
```



### 속성과 값

CSS의 속성과 값은 글자색은 무엇, 너비는 얼마, 여백은 얼마 같은 스타일을 지정할 때 사용

```css
div {
  color: red; /* 글자색은 빨강 */
  font-size: 20px; /* 글자 크기는 20px */
  width: 300px; /* 가로 너비는 300px */
  margin: 20px; /* 바깥 여백은 20px */
  padding: 10px 20px; /* 안쪽 여백은 위아래 10px, 좌우 20px */
  position: absolute; /* 위치는 부모 요소 기준*/
}
```



### 태그에 직접 작성하기(인라인 방식)

이 방법은 HTML 태그에 직접 작성하기 때문에 선택자가 필요하지 않는다.

``` html
<div style="color: red;">태그에 직접 작성1</div> <!-- red --> // 속성 : 값;
<div style="color: red;">태그에 직접 작성2</div> <!-- red --> // 글자색을 빨간색으로 지정한다.
<div style="color: red;">태그에 직접 작성3</div> <!-- red -->
<div style="color: red;">태그에 직접 작성4</div> <!-- red -->
```

 이 방법은 그다지 추천하지 않는다.

1. 1000줄의 코드를 작성할 때 1000번 모두 넣어야함
2. 1000줄의 코드를 모두 작성했지만 만약 파란색으로 바꾸고 싶으면 1000줄 모두 바꿔야한다.



### HTML에 포함파기(내장)

CSS만 따로 작성하기 때문에 선택자가 필요함 

```html
<!-- HTML 파일 -->
<head> // style 태그에 css에 관한 값을 작성
  <style>
    div {
      color: red;
    }
  </style>  
</head>
<body>
  <div>HTML에 포함1</div> <!-- red --> // 위에 정의되어 있는 스타일 태그의 값을 따라옴
  <div>HTML에 포함2</div> <!-- red -->
  <div>HTML에 포함3</div> <!-- red -->
</body>
```



### HTML 외부에서 불러오기

CSS 코드를 완전히 분리가 가능하다. 

분리된 하나의 CSS 파일을 여러 HTML 파일이 불러와서 사용할 수 있음.

```html
<!-- HTML 1 -->
<head>
  <link rel="stylesheet" href="/css/main.css"> // "/css/main.css"파일을 스타일 시트로 지정
</head>
<body>
  <div>HTML에 외부에서 불러오기1</div> <!-- red -->
</body>

```

```css
/* main.css */
div {
  color: red;
}
```



## 선택자

위에서 설명했지만 HTML의 특정한 요소를 선택하는 사인

여러 종류가 있지만 두가지만 알아보자



### 태그로 찾기

선택자를 입력하는 부분에 적용하려는(찾으려는) 태그의 이름을 입력한다.

```css
/*<h1>은 글자색이 빨강이야!*/
h1 {
  color: red;
}
/*<p>는 글자색이 파랑이야!*/
p {
  color: blue;
}
```

```html
<h1>제목1</h1> <!--red-->
<h1>제목2</h1> <!--red-->
<p>본문1</p> <!--blue-->
<p>본문2</p> <!--blue-->
```



### 클래스로 찾기

좀 더 명확하게 원하는 요소를 찾기 위해서 클래스 선택자라는 것이 존재한다.

```css
/*class="title"은 글자색이 빨강이야!*/
.title {
  color: red;
}
/*class="main-text"는 글자색이 파랑이야!*/
.main-text {
  color: blue;
}
```

```html
<h1 class="title">제목1</h1> <!--red-->
<h1>제목2</h1>
<p class="main-text">본문1</p> <!--blue-->
<p>본문2</p>
```

이를 이용해서 css에서 별명을 기준으로 요소를 찾을 수 있다.



### 속성

속성은 크기, 여백, 색상 같은 눈에 보이는 스타일을 지정할 수 있습니다.



### 크기

1. Width(가로 너비)

   ```css
   div {
   	width: 300px;
   	요소가로너비: 너비 값
   }
   ```

2.  Height(세로 너비)

   ```css
   div {
   	heigth: 150px;
   	요소세로너비: 너비값
   }
   ```

   

3. Font-size(글자 크기)

   ```css
   div {
   	font-size: 16px;
   }
   ```



### 여백

1. margin(요소의 바깥 여백)

   ```css
   div {
   	margin: 20px;
   	요소바깥여백: 여백값;
   }
   ```

   위 코드는 해당 요소의 위, 아래, 좌, 우 모두 20px만큼의 여백을 지정하겠다는 의미이다.

   세분화를 위해 한 방향식 지정할 수도 있다.

   ```css
   div {
     margin-top: 20px;
     margin-right: 20px;
     margin-bottom: 20px;
     margin-left: 20px;
     요소바깥여백-위쪽: 여백값;
     요소바깥여백-오른쪽: 여백값;
     요소바깥여백-아래쪽: 여백값;
     요소바깥여백-왼쪽: 여백값;
   }
   ```

2. Padding(요소의 내부 여백)

   ```css
   div {
   	padding: 20px;
   	요소내부여백: 여백값;
   }
   ```

   위의 margin처럼 위,아래, 좌, 우 각각 지정도 가능하다.

   

### 색상

1. Color(글자 색상)

   ```css
   div {
   	color: red;
   	글자색상: 빨강
   }
   ```

   글자 색을 설정하는 기능이고 font-color 이런 태그는 없다

   

2. Background(요소 색상)

   ```css
   div {
   	background-color: red;
   	요소배경: 빨강
   }
   ```

---



## HTML - 블록 레벨 요소와 인라인 요소



1. 블록 요소
   - Div, h1, p
   - 사용 가능한 최대 가로 너비를 사용한다.
   - 크기를 지정 할 수 있다.
   - Width: 100%, height: 0 으로 시작
   - 수직으로 쌓임
   - margin, padding 위 아래 좌 우에 온전하게 사용가능

2. 인라인 요소
   - span, img
   - 필요한 만큼의 너비를 사용한다.
   - 크기를 지정 할 수 없다.
   - Width: 0; height: 0; 으로 시작함
   - 수평으로 쌓임
   - Margin, padding 위, 아래는 사용이 불가능하다.





## HTML 주요 블록 태그



### HEADER

Header 요소는 소개나 탐색을 돕는 그룹을 의미한다.

헤더 안에는 검색 바, 로고, 메뉴 등이  정의된다.

```html
<header> 태그 안에는 <header>,<footer> 태그를 자식으로 가질 수 없다.

//----------------------------
<header>
	<div>
	</div>
</header>
가능
//----------------------------

//----------------------------
<header>
	<header>
	</header>
</header>
불가능
//----------------------------
```

이 요소는 전역 속성만을 포함한다



### FOOTER

일반적으로 작성가 구획, 저작권, 관련된 문서의 링크에 대한 정보를 포함시킨다.

위의 해더와 크게 다른점이 없다. 전역속성 사용하고 브라우저 호환성도 높다



### H1

\<h1> ~ \<h6> 은 6단계의 문서 제목을 구현한다 \<h1>이 가장 큰 글자로 나타나고 \<h6>으로 갈 수록 점점 작아진다

주의 할 점은 제목 폰트의 크기를 줄이기 위해 낮은 단계를 사용하면 안된다고 한다.

그 이유는 브라우저, 환경마다 \<h>태그의 크기가 정확하지 않기때문에 CSS로 font-size를 명확하게 지정하고 사용해야한다

첫번째 단계의 제목 (h1)은 한 페이지에 하나만 사용하는 것이 좋다. -> 검색 엔진이 사이트를 조회할 때 문제가 생길 수 있음.

#### Don't

```apl
<h1>Heading level 1</h1>
<h3>Heading level 3</h3>
<h6>Heading level 6</h6>
```

#### Do

```html
<h1>Heading level 1</h1>
<h2>Heading level 2</h2>
<h3>Heading level 3</h3>
```



### MAIN

main은 문서나 앱의 \<body>의 주요 콘텐츠를 나태냅니다. 주요 콘텐츠 구역은 문서의 핵심 주제나 앱의 핵심 기능성에 대해 부연, 또는 직접적으로 연관된 콘텐츠들로 이루어짐

주의할 점은 문서에 두개 이상의 main 태그를 사용하면 안되며 또한 인터넷 익스플로러에서도 사용이 불가능하다.



### ARTICLE

독립적으로 구분되거나 재사용이 가능한 영역 설정

(매거진/신문 기사, 블로그 등)

- 일반적으로 \<h1>~\<h6>을 포함하여 식별
- 작성일자와 시간을 \<time>의 datetime 속성으로 작성.



### SECTION

문서의 일반적인 영역을 설정.

- 일반적으로 \<h1>~\<h6>을 포함하여서 식별한다.



### ASIDE

문서의 별도 콘텐츠를 설정. Ex) 광고 배너 등이 화면 왼쪽부분에 노출되는것

보통 왼쪽에 정렬되어 있음



### NAV

다른 페이지 링크를 제공하는 영역을 설정

네비게이션, 보통 메뉴, HOME, ABOUT 등을 설정한다.



### ADDRESS

\<body>, \<article>, \<footer> 등에서 연락처 정보(주소)를 제공하기 위해 포함하여 사용.



### DIV

본질적으로 아무것도 나타내지 않는 콘텐츠 영역을 설정

(Divistion, 꾸미는 목적으로 사용)



### OL, UL, LI

각 항목은 \<li>, 정렬된 목록 \<ol>이나 정렬되지 않은 목록 \<ul>을 설정.

(Ordered List, Unordered List, List Item, 순서가 필요하면 ol, 순서가 필요없으면 ul)

```
<ol>
1. 1번
	1. 1-1번
	2. 1-2번
	3. 1-3번
2. 2번
3. 3번

<ul>
* 1번
	- 1-1번
	- 1-2번
	- 1-3번
* 2번
* 3번
```

- \<ol>과 \<ul>은 자식으로  \<li>만 사용이 가능하다
- \<li>는 단독으로 사용할 수 없으며 \<ol>이나 \<ul>에 자식으로 포함되어야함



### DL, DT, DD

용어의 정의를 할때 사용하는 태그

용어(\<dt>)와 정의(\<dd>) 쌍들의 영역(\<dl>)을 설정

- \<dl>은 \<dd>와 \<dt>만을 포함해야 함.
- 키(key)/값(value) 형태를 표시할 때 유용하다.

```html
<dl>
  <dt>Coffee</dt>
  <dd>Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species.</dd>
  <dt>Milk</dt>
  <dd>Milk is a nutrient-rich, white liquid food produced by the mammary glands of mammals.</dd>
</dl>
```

위에서 \<dl>은 \<dd>와 \<dt>만을 포함해야 함. 라고 이야기했는데 이러면 너무 제한적인 상황이 많아서 이렇게 사용하기도 한다.

```html
<ul>
  <li>
  	<dfn>Coffee</dfn>
    <p>
      djsakldjaklsjdla;sjdklasjdklasjdal;
    </p>
  </li>
  <li>
  	<dfn>Milk</dfn>
    <p>
      dqqqqqqqqqq
    </p>
  </li>
</ul>
```



### P 태그

하나의 문단, 문장 등을 설정.

(Paragraph)

- 일반적으로 정보통신보조기기 등은 다음 문단(\<p>)으로 넘어갈 수 있는 단축키를 제공함



### HR

문단의 분리를 위해서 설정

\<hr>

<hr>

위와 같이 선을 하나 그어줌 마크다운에서는 ---과 유사함



### PRE

서식이 미리 지정된 텍스트를 설정하는 태그.

- 텍스트의 공백과 줄바꿈을 유지하여 표시할 수 있음.
- 기본적으로 Monospace 글꼴 계열로 표시 됨.

-- Monospace란 모든 글자들의 너비가 같은 글씨체를 의미한다.



### BLOCKQUOTE

일반적인 인용문을 설정.

| 속성 | 의미                     | 값   |
| ---- | ------------------------ | ---- |
| cite | 인용된 정보의 URL을 입력 | URL  |



ex)

```html
<blockquote cite="http://www.worldwildlife.org/who/index.html">
For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.
</blockquote>
```





### 여기까지 HTML의 기본적인 블록 태그에 대한 설명

---



## HTML 인라인 태그



### A 태그

다른 페이지, 다른 페이지 위치(#, 해시 태그), 파일, 이메일 주소, 전화번호 등 다른 URL로 연결할 수 있는 _하이퍼링크_를 설정

| 속성     | 의미                                          | 값                      | 기본값 |   특징    |
| :------- | --------------------------------------------- | ----------------------- | :----: | :-------: |
| download | 이 요소가 리소스를 다운로드하는 용도로 사용됨 | 불린(Boolean)           |        |           |
| href     | 링크 URL                                      | URL                     |        | 생략 가능 |
| hreflang | 링크 URL(페이지) 언어(ISO 639-1)              | ko, en ...              |        |           |
| rel      | 현재 문서와 링크 URL의 관계(Link Types)       | license, prev, next ... |        |           |
| target   | 링크 URL의 표시(브라우저 탭) 위치             | _self, _blank           | _self  |           |
| type     | 링크 URL의 MINE 타입                          | text/html ...           |        |           |

```
a { display: inline; } => a { display: block; }

inline값을 기본값으로 가지지만 inline의 특성에 의해 block으로 선언해서 쓰는 경우도 많다.
```





### ABBR

약어를 지정 = (Abbreviation) 보통 title 속성을 사용하여 전체 글자나 설명을 제공

```
Using <abbr title="HyperText Markup Language">HTML</abbr> is fun and easy
```



### B 태그

문체가 다른 글자의 범위를 설정.

- 특별한 의미를 가지지 않음.
- 읽기 흐름에 도움을 주는 용도로 사용.
- 다른 태그가 적합하지 않은 경우 마지막 수단으로 사용.
- 기본적으로 글자가 두껍게(Bold) 표시됨. -> 글자를 두껍게 사용하기 위해서만은 사용하지 않음.



### MARK

사용자의 관심을 끌기 위해 하이라이팅을 할 때 사용

(Mark Text, 형광펜을 사용하여 줄 긋는것과 같은 의미)

- 기본적으로 형광펜을 사용한 것처럼 글자가 Yellow 노란색으로 표시 됨



### em

단순한 의미 강조를 표시 (Emphasis)

- 중첩이 가능
- 중첩될수록 강조 의미가 강해짐.
- 정보통신보조기기 등에서 구도 강조로 발음됨.
- 기본적으로 이탤릭체(Italic type)로 표시됨

```html
<em>
	<em>
  	<em>
      3중첩 강조
    </em>
  </em>
</em>

이렇게 사용이 가능하다
```



### STRONG

의미의 중요성을 나타내기 위해 사용

강조와 중요도는 다르다 << 잘 생각해봐야하는 문장

- 기본적으로 글자는 두껍게(Bold) 표시됨.



### I 태그

위에 설명 된 \<em>, \<strong>. \<mark>, \<cite> 등에서 표현할 수 있는 적합한 의미가 아니 경우 사용.

(평범한 글자와 구분(아이콘이나 특수기호 같은)하기 위해 사용)

<u>B는 일반 텍스트 I는 아이콘이나 특수문자 등에 사용한다.</u>



### DFN

용어를 정의할 때 사용.

\<dl>\<dt>\<dd>와 동일한 기능을 한다.



 ### CITE

창작물에 대한 참조를 설정

- 책, 논문, 영화, TV 프로그램 등의 제목
- 기본적으로 이탤릭체(Italic type)

```html
<cite>The Scream</cite> by Edward Munch. Painted in 1893.
```



### Q 태그

짧은 인용문을 설정 (Inline Quotation)

- 긴 인용문의 경우 \<blockquote>를 사용

| 속성 | 의미              | 값   |
| ---- | ----------------- | ---- |
| cite | 인용된 정보의 URL | URL  |



### U 태그

밑줄이 있는 글자를 설정 (Underline)

- 순수하게 꾸미는 용도
- 굳이 사용하지 않아도  CSS를 사용하면 된다.
- \<a> 와 헷갈릴 수 있는 위치에서 사용하지 않도록 주의



### CODE

컴퓨터 코드 범위를 설정 (Inline Code)

```html
<html>
</html>
```

위의 부분과 같이 마크다운의 ```와 같다.



### KBD

텍스트 입력 장치(키보드)에서 사용자의 입력을 나타내는 텍스트 범위를 설정

**예시를 더 찾아보는게 좋을 것 같음**

```html
<p><kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>K</kbd></p>, <kbd>ESC</kbd>
```



### SUP, SUB

위 첨자 \<SUP>와 아래 첨자 \<SUB>

4^2 이런 글자는 4<sup>2</sup> 이렇게 표현이 가능



### TIME

날짜와 시간을 나타내기 위한 목적으로 사용.

| 속성     | 의미             | 값   |
| -------- | ---------------- | ---- |
| datatime | 유효한 날짜 문자 | Date |

- YYYY-MM-DD 이런 값
- IE에서는 지원하지 않는다.



### SPAN

본질적으로 아무것도 나타내지 않는 콘텐츠 영역을 설정.

- \<div>태그와 유사하다.

- 대표적인 inline 요소이다



### BR

줄바꿈을 설정한.

일반적으로 HTML에 텍스트를 작성하면 줄바꿈이 없이 작성되는데 BR 태그를 이용해 줄을 바꿔서 사용한다.

```html
가나다라마바사
아자카타파하
-> 
가나다라마바사아자카타파하

가나다라마바사<br>아자카타파하
->
가나다라마바사
아자카타파하
```



### DEL

삭제된 텍스트의 범위를 지정한다.

| 속성     | 의미                           | 값   |
| -------- | ------------------------------ | ---- |
| cite     | 변경을 설명하는 리소스의 URI   | URI  |
| datetime | 변경이 일어난 유효한 날짜 문자 | Date |



### INS

새로 추가된 텍스트의 범위를 지정한다.

| 속성     | 의미                           | 값   |
| -------- | ------------------------------ | ---- |
| cite     | 변경을 설명하는 리소스의 URI   | URI  |
| datetime | 변경이 일어난 유효한 날짜 문자 | Date |





---



## 멀티미디어 & 내장 콘텐츠 & 스크립트



### IMG

이미지를 삽입할 때 사용.

| 속성   | 의미                                                         | 값   |
| ------ | ------------------------------------------------------------ | ---- |
| src    | (필수) 이미지 URL                                            | URL  |
| alt    | (필수) 이미지의 대체텍스트                                   |      |
| width  | 이미지의 가로 너비                                           |      |
| height | 이미지의 세로 너비                                           |      |
| srcset | 브라우저에게 제시할 이미지 URL과 원본 크기의 목록을 정의 - 반응형 웹 사이트에 주로 사용 | W, X |
| sizes  | 미디어 조건과 해당 조건일 때 이미지 최적화 크기의 목록을 정의 - 반응형 웹 사이트에 주로 사용 |      |

```html
<!-- srcset, sizes -->
<!-- 다양한 디스플레이 해상도에 맞는 최적의 이미지를 브라우저가 선택해서 사용 -->
<img srcset="./small.jpg 320w,
             ./medium.jpg 640w,
             ./large.jpg 1024w"
     sizes="(max-width: 480px) 300px,
            (max-width: 800px) 600px,
            900px"
     src="./small.jpg"
     alt="The image" />
<img srcset="./image.jpg,
             ./image-1.5x.jpg 1.5x,
             ./image-2x.jpg 2x"
     src="./image.jpg"
     alt="The image" />

```

좀 더 자세한 내용은 [여기](https://heropy.blog/2019/06/16/html-img-srcset-and-sizes/)를 참고하자



#### Srcset

브라우저에 제시할 이미들과 그 이미지들의 원본 크기를 지정한다.

사용 방법은 간단하며 사용할 이미지를 사이즈별로 **2장 이상** 준비하여 srcset 속성에 작성한다.

주의 사항으로는 이미지 크기로 px가 아닌 w 단위 혹은 x 단위를 입력해야하며, 작은 크기의 이미지부터 순서대로 입력해야한다.



- W 유닛

  W 단위(Width descriptor)는 이미지의 원본 크기(가로 너비)를 의미한다

  예를 들어 400px X 300px 크기 이미지의 W값은 400w 이다.

  ```html
  <img
    srcset="images/heropy_small.png 400w,
            images/heropy_medium.png 700w,
            images/heropy_large.png 1000w"
    src="images/heropy.png"
    alt="HEROPY" />
  
  위 예제의 결과로,
  뷰포트 너비가 400px 이하일 때 heropy_small.png(400px)가
  뷰포트 너비가 401~700px 일 때 heropy_medium.png(700px)가 
  뷰포트 너비가 701px 이상일 때 heropy_large.png(1000px)가 사용된다.
  ```

- X 유닛

  x 단위(Device pixel ratio descriptor)는 이미지의 비율 의도를 의미한다.

  위의 w 유닛처럼 사용이 가능하다

w 단위를 사용했다면 굳이 x 단위를 사용할 필요가 없다. 대부분의 경우 w로 사용하면 된다.



#### sizes

sizes는 미디어조건과 그 조건에 해당하는 이미지의 '최적화 출력 크기'를 지정한다.

```html
<img
  srcset="images/heropy_small.png 400w,
          images/heropy_medium.png 700w,
          images/heropy_large.png 1000w"
  sizes="(min-width: 1000px) 700px" ->       브라우저의 뷰 포트가 1000이상이면 이미지의 크기를 700px로 한다
  src="images/heropy.png"
  alt="HEROPY" />
```



 srcset 태그와 sizes 태그는 기본적으로  IE에서는 지원하지 않으니 IE환경을 작업할 때에는 주의해야한다.



### Audio

소리 컨텐츠를 삽입할때 사용 ex) MP3 등

- Autoplay가 지정된 경우,  preload는 무시됨.

| 속성     | 의미                                                 | 값                                                           | 기본값   |
| -------- | ---------------------------------------------------- | ------------------------------------------------------------ | -------- |
| autoplay | 준비되면 바로 재생                                   | 불린(Boolean)                                                |          |
| controls | 제어 메뉴를 표시                                     | 불린(Boolean)                                                |          |
| loop     | 재생이 끝나면 다시 처음부터 진행                     | 불린(Boolean)                                                |          |
| preload  | 페이지가 로드될 때 파일을 로드할지의 지정(힌트 제공) | None : 로드하지 않음<br />metadata : 메타데이터만 로드<br />auto : 전체 파일 로드 | metadata |
| src      | 콘텐츠 URL                                           | URL                                                          |          |
| muted    | 음소거 여부                                          | 불린(Boolean)                                                |          |



### Video

동영상 컨텐츠를 삽입 mp4 등

| 속성     | 의미                                          | 값                                                           | 기본값   |
| -------- | --------------------------------------------- | ------------------------------------------------------------ | -------- |
| autoplay | 준비되면 바로 재생                            | 불린(Boolean)                                                |          |
| controls | 제어 메뉴를 표시                              | 불린(Boolean)                                                |          |
| loop     | 재생이 끝나면 다시 처음부터 재생              | 불린(Boolean)                                                |          |
| muted    | 음소거 여부                                   | 불린(Boolean)                                                |          |
| poster   | 동영상 썸네일 이미지  URL                     | URL                                                          |          |
| preload  | 페이지가 로드될 때 로즈할지의 지정(힌트 제공) | None : 로드하지 않음<br />metadata : 메타데이터만 로드<br />auto : 전체 파일 로드 | metadata |
| src      | 콘텐츠 URL                                    | URL                                                          |          |
| width    | 동영상 가로 너비                              |                                                              |          |
| height   | 동영상 세로 너비                              |                                                              |          |



### Figure, Figcaption

 figure는 이미지나 삽화, 도표 등의 영역을 설정

figcaption는 figure에 포함되어 이미지나 삽화 등의 설명을 표시한다.

```html
<figure>
  <img src="milk.jpg" alt="A milk">
  <figcaption>Milk is a nutrient-rich, white liquid food produced by the mammary glands of mammals.</figcaption>
</figure>

이미지의 설명이 figcaption에 명시 되어있다.
사람은 별 차이를 못느끼지만 컴퓨터는 이렇게 명시해줘야 이애를 한다.
```



### Iframe

다른 HTML 페이지를 현재 페이지에 삽입 (중첩된 브라우저 컨텍스트(프레임)를 표시)

| 속성            | 의미                           | 값                                                           | 기본값 |
| --------------- | ------------------------------ | ------------------------------------------------------------ | ------ |
| name            | 프레임의 이름                  |                                                              |        |
| src             | 포함할 문서의  URL             | URL                                                          |        |
| width           | 프레임의 가로 너비             |                                                              |        |
| height          | 프레임의 세로 너비             |                                                              |        |
| allowfullscreen | 전체 화면 모드 사용 여부       | 불린(Boolean)                                                |        |
| frameborder     | 프레임 테두리 사용 여부        | 0,1                                                          | 1      |
| sandbox         | 보안을 위한 읽기 전용으로 삽입 | 불린(Boolean)<br />allow-form : 양식 제출 가능<br />allow-script : 스크립트 실행 가능<br />allow-same-origin : 같은 출처의 리소스 사용가능 |        |



### canvas

**Canvas API**이나 **WebGL API**를 이용하여 그래픽이나 애니메이션을 랜더링

| 속성   | 의미               |
| ------ | ------------------ |
| width  | 캔버스의 가로 너비 |
| height | 캔버스의 세로 너비 |

[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Canvas/Tutorial/Basic_usage) / [W3Schools](https://www.w3schools.com/html/html5_canvas.asp)



### Script

스크립트 코드를 문서에 포함허가나 참조(외부 스크립트).

| 속성  | 의미                          | 값                       | 특징                          |
| ----- | ----------------------------- | ------------------------ | ----------------------------- |
| async | 스크립트의 비동기적 실행 여부 | 불린(Boolean)            | src 속성 필수                 |
| defer | 문서 파싱 후 작동 여부        | 불린(Boolean)            | src 속성 필수                 |
| src   | 참조할 외부 스크립트 URL      | URL                      | 포함된 스크립트 코드는 무시됨 |
| type  | MIME 타입                     | text/javascript (기본값) |                               |



### Noscript

스크립트를 지원하지 않는 경우에 삽입할 html을 정의

과거에는 이런 브라우저가 몇 있었지만 지금은 대부분의 브라우저가 js가 기본적으로 실행된다.



---



## 표 콘텐츠 & 양식



### table, tr, th, td

데이터 표(\<table>)의 행(줄 / \<tr>)과 열(칸, 셀(Cell) / \<th>, \<td>)을 생성.

- Table Row, Table Header, Table Data

 



### TH

머리글 칸을 지정

| 속성    | 의미                                         | 값                                                           | 기본값 |
| ------- | -------------------------------------------- | ------------------------------------------------------------ | ------ |
| abbr    | 열에 대한 간단한 설명                        |                                                              |        |
| headers | 관련된 하나 이상의 다른 머리글 칸 id 속성 값 |                                                              |        |
| colspan | 확장하려는(병합) 열의 수                     |                                                              | 1      |
| rowspan | 확장하려는(병합) 행의 수                     |                                                              | 1      |
| scope   | 자신이 누구의 머리글 칸인지 명시             | Col: 자신의 열<br />colGroup : 모든 열 <br />row : 자신의 행<br />row group : 모든 행<br />auto | auto   |



### TD

일반 칸을 지정한다.

| 속성    | 의미                                                         | 값   | 기본값 |
| ------- | ------------------------------------------------------------ | ---- | ------ |
| headers | 관련된 하나 이상의 다른 머리글 칸 id 속성 값 -> th와 연결하는 것 |      |        |
| colspan | 확장하려는(병합) 열의 수                                     |      | 1      |
| rowspan | 확장하려는(병합) 행의 수                                     |      | 1      |



### Caption

표의 제목을 설정

- 열리는 Table 태그 바로 다음에 작성해야 함.
- \<table> 당 하나의  \<caption>만 사용 가능.



### Colgroup, col

표의 열들을 공통적으로 정의하는 컬럼 \<col>과 그의 집합\<colgroup>

(Column, Column Group)

| 속성 | 의미           | 값           | 기본값 |
| ---- | -------------- | ------------ | ------ |
| span | 연속되는 열 수 | 숫자(Number) | 1      |



### thead, tbody, tfoot

표의 머리글 thead, 본문 tbody, 바닥글 tfoot을 지정

- 기본적으로 테이블의 레이아웃에 영향을 주지 않는다.



### form

웹 서버에 정보를 제출하기 위한 양식 범위를 정의

- form 이 다른  form을 자식 요소로 포함 할 수 없다.

| 속성         | 의미                                                         | 값            | 기본값 |
| ------------ | ------------------------------------------------------------ | ------------- | ------ |
| action       | 전송한 정보를 처리할 웹페이지의  URL                         | URL           |        |
| autocomplete | 사용자가 이전에 입력한 값으로 자동 완성 기능을 사용할 것인지 여부 | On, off       | on     |
| method       | 서버로 전송할 HTTP 방식                                      | get, post     | get    |
| name         | 고유한 양식의 이름                                           |               |        |
| novalidate   | 서버로 전송시 양식 데이터의 유효성을 검사하지 않도록 지정    |               |        |
| target       | 서버로 전송 후 응답받을 장식을 지정                          | _self, _blank | _self  |

 

### input

사용자에게 입력 받을 데이터 양식.

속성이 아주 많지만 몇 가지만 이해하고 필요한 내용은 그때그때 찾아서 사용하면 된다.

| 속성         | 의미                                                         | 값            | 기본값 | 특징                                                         |
| ------------ | ------------------------------------------------------------ | ------------- | ------ | ------------------------------------------------------------ |
| autocomplete | 사용자가 이전에 입력한 값으로 자동 완성 기능을 사용할 것인지 여부 | On, off       | on     |                                                              |
| autofocus    | 페이지가 로드될 때 자동으로 포커스                           | 불린(Boolean) |        | 문서 내 고유해야함                                           |
| checked      | 양식이 선택되었음을 표시                                     | 불린(Boolean) |        | type 속성 값이  radio,checkbox일 경우만                      |
| disabled     | 양식을 비활성화                                              | 불린(Boolean) |        |                                                              |
| form         | \<form>의 id 속성 값                                         |               |        | 해당 \<form>의 후손이 아닐 경우만                            |
| list         | 참조할 \<datalist>의 id 속성 값                              |               |        |                                                              |
| max          | 지정 가능한 최대 값                                          | 숫자(Number)  |        | type 속성 값이 numbe 일 경우만,<br/>min 속성보다 큰 값만 허용 |
| min          | 지정 가능한 최소 값                                          | 숫자(Number)  |        | type 속성 값이 numbe 일 경우만,<br/>max 속성보다 큰 값만 허용 |
| maxlength    | 입력 가능한 최대 문자 수                                     | 숫자(Number)  | 524288 | type 속성 값이 text, email, password, tel, url 일 경우만     |
| multiple     | 둘 이상의 값을 입력 할 수 있는지 여부                        | 불린(Boolean) |        | type 속성 값이 email, file 일 경우만, email 일 경우 , 로 구분 |
| name         | 양식의 이름                                                  |               |        |                                                              |
| placeholder  | 사용자가 입력할 값의 힌트                                    |               |        | type 속성 값이 text, search, tel, url, email 일 경우만       |
| readonly     | 수정 불가한 읽기 전용                                        | 불린(Boolean) |        |                                                              |
| step         | 유효한 증감 숫자의 간격                                      | 숫자(Number)  | 1      | Type 속성 값이  number, range 일 경우만                      |
| src          | 이미지의 URL                                                 | URL           |        | Type 속성 값이 image 일 경우만                               |
| alt          | 이미지의 대체 텍스트                                         |               |        | type 속성 값이 image 일 경우만                               |
| type         | 입력 받을 데이터의 종류                                      | 별도 정리     | text   |                                                              |
| value        | 양식의 초기 값                                               |               |        |                                                              |



#### 데이터 종류(Type)의 값(values)

type 속성에 입력 할 수 있는 값의 목록

```html
<input type="button" />
<input type="checkbox" />
<input type="file" />
<input type="text" />
```

| 값       | 데이터 종류               | 특징                                      |
| -------- | ------------------------- | ----------------------------------------- |
| button   | 일반 버튼                 | \<button>처럼 사용                        |
| checkbox | 체크박스                  |                                           |
| color    | 색상                      | IE지원불가                                |
| email    | 이메일                    |                                           |
| file     | 파일                      |                                           |
| hidden   | 보이지 않지만 전송할 양식 | value 속성으로 값을 지정                  |
| image    | 이미지 제출 버튼          | \<img />처럼 사용                         |
| number   | 숫자                      |                                           |
| password | 비밀                      | 가려지는 양식                             |
| radio    | 라디오 버튼               | 같은 name 속성 그룹 내 하나마나 선택 가능 |
| range    | 범위 컨트롤               | min, max, step, value (기본값) 속성 사용  |
| reset    | 초기화                    | 해당 \<form> 범위 내 모든 양식            |
| search   | 검색                      |                                           |
| submit   | 제출 버튼                 | 해당 \<form> 범위 내 모든 양식            |
| tel      | 전화번호                  |                                           |
| text     | 일반 텍스트               |                                           |
| url      | 절대 URL                  |                                           |



### Label

라벨 가능 요소(labelable)의 제목(Caption)

- for 속성으로 라벨 가능 요소를 참조하거나 콘텐츠로 포함.
- 라벨 가능요소: \<button>, \<input>, \<progress>, \<select>, \<textarea>

| 속성 | 의미                               |
| ---- | ---------------------------------- |
| for  | 참조할 라벨 가능 요소의 id 속성 값 |



 ```html
 <!-- 라벨 가능 요소를 참조 -->
 <input type="checkbox" id="user-agreement" />
 <label for="user-agreement">동의하십니까?</label> // for를 이용해서 위의 input 태그와 연동 된다고 생각하면 된다.
 // 하지만 매번 for를 사용하기에는 번거로우니 아래처럼 사용하면 된다.
 
 <!-- 라벨 가능 요소를 포함 -->
 <label><input type="checkbox" />동의하십니까?</label>
 ```

위의 두개의 예시 모두 같은 모양을 출력하게 된다.

그리고 label의 특징으로 옆에 "동의하십니까?" 라고 적혀있는 텍스트를 클릭하여도 체크박스가 활성화 되는 것을 확인 할 수 있다.



### Button

선택 가능한 버튼을 지정한다.

input으로 대채가 가능하지만 좀 더 직관적인 버튼 모양을 만들어준다.

| 속성      | 의미                                  | 값                    | 특징                              |
| --------- | ------------------------------------- | --------------------- | --------------------------------- |
| autufocus | 페이지가 로드될 때 자동으로 포커스    | 불린(Boolean)         | 문서 내 고유해야 함               |
| disabled  | 버튼을 비활성화                       | 불린(Boolean)         |                                   |
| form      | \<form>의 id 속성 값                  |                       | 해당 \<form>의 후손이 아닌 경우만 |
| name      | 폼 데이터와 함께 전송되는 버튼의 이름 |                       |                                   |
| type      | 버튼의 타입                           | button, reset, submit |                                   |



### Textarea	

여러 줄의 일반 텍스트 양식

| 속성         | 의미                                                         | 값            | 기본값 | 특징                              |
| ------------ | ------------------------------------------------------------ | ------------- | ------ | --------------------------------- |
| autocomplete | 사용자가 이전에 입력한 값으로 자동 완성 기능을 사용 할 것인지 여부 | on, off       | on     |                                   |
| autofocus    | 페이지가 로드도리 때 자동으로 포커스                         | 불린(boolean) |        | 문서 내 고유해야 함               |
| disabled     | 양식을 비활성화                                              | 불린(boolean) |        |                                   |
| form         | \<form>의 id 속성 값                                         |               |        | 해당 \<form>의 후손이 아닐 경우만 |
| maxlength    | 입력 가능한 최대 문자 수                                     | 숫자(number)  | 무한   |                                   |
| name         | 양식의 이름                                                  |               |        |                                   |
| placeholder  | 사용자가 입력할 값의 힌트                                    |               |        |                                   |
| readonly     | 수정 불ㄹ가한 읽기 전용                                      | 불린(boolean) |        |                                   |
| rows         | 양식의 줄 수                                                 | 숫자(number)  | 2      |                                   |



### Fieldset, Legend

같은 목적의 양식을 그룹화(\<fieldset>)하여 제목(\<legend>)을 지정

```html
<form>
  <fieldset>
    <legend>Coffee Size</legend>
    <label>
        <input type="radio" name="size" value="tall" />
        Tall
    </label>
    <label>
        <input type="radio" name="size" value="grande" />
        Grande
    </label>
    <label>
        <input type="radio" name="size" value="venti" />
        Venti
    </label>
  </fieldset>
</form>

// 3가지 선택자 중에 1개만 선택할 수 있고 그 주변에 테두리가 쳐져서 묶어줌
```

| 속성     | 의미                                         | 값            |
| -------- | -------------------------------------------- | ------------- |
| disabled | 그룹 내 모든 양식 요소를 비활성화            | 불린(boolean) |
| form     | 그룹이 속할 하나 이상의 \<form>의 id 속성 값 |               |
| name     | 그룹의 이름                                  |               |



### Select, Datalist, Optgroup, Opton

 옵션(\<option>, \<optgroup>) 의 선택 메뉴(\<select>)나 자동완성(\<datalist>)을 제공

```html
<select>
  <optgroup label="Coffee">
    <option>Americano</option>
    <option>Caffe Mocha</option>
    <option label="Cappuccino" value="Cappuccino"></option>
  </optgroup>
  <optgroup label="Latte" disabled>
    <option>Caffe Latte</option>
    <option>Vanilla Latte</option>
  </optgroup>
  <optgroup label="Smoothie">
    <option>Plain</option>
    <option>Strawberry</option>
    <option>Banana</option>
    <option>Mango</option>
  </optgroup>
</select>
```



#### Select

옵션을 선택하는 메뉴.

| 속성         | 의미                                                         | 값            | 기본값       |
| ------------ | ------------------------------------------------------------ | ------------- | ------------ |
| autucomplete | 사용자가 이전에 입력한 값으로 자동 완성 기능을 사용할 것인지 여부 | on, off       | on           |
| disabled     | 선택 메뉴를 비활성화                                         | 불린(boolean) |              |
| form         | 선택 메뉴가 속할 하나 이상의 \<form>의 id 속성 값            |               |              |
| multiple     | 다중 선택 여부                                               | 불린(boolean) |              |
| name         | 선택 메뉴의 이름                                             |               |              |
| size         | 한 번에 볼 수 있는 행의 개수                                 | 숫자(number)  | 0 (1과 같음) |



#### Datalist

\<input>에 미리 정의된 옵션을 지정하여 자동완성(Autocomplete) 기능을 제공하는데 사용.

- \<input>의  list 속성 바인딩.
- \<option> 을 포함하여 정의된 옵션을 지정.

```html
<input type="text" list="fruits">

<datalist id="fruits">
  <option>Apple</option>
  <option>Orange</option>
  <option>Banana</option>
  <option>Mango</option>
  <option>Fineapple</option>
</datalist>
```



#### Optgroup

\<option>을 그룹화

| 속성     | 의미                    | 값            |
| -------- | ----------------------- | ------------- |
| label    | (필수) 옵션 그룹의 이름 |               |
| disabled | 옵션 그룹을 비활성화    | 불린(boolean) |



#### Option

선택 메뉴(\<select>)나 자동완성(\<datalist>)에서 사용될 옵션.

- 선택적 빈(Empty)를 태그로 사용 가능.

| 속성     | 의미                     | 값            | 특성                                 |
| -------- | ------------------------ | ------------- | ------------------------------------ |
| disabled | 옵션을 비활성화          | 불린(boolean) |                                      |
| label    | 표시될 옵션의 제목       |               | 생략되면 포함된 텍스트를 표시        |
| selected | 옵션이 선택되었음을 표시 | 불린(boolean) |                                      |
| value    | 양식으로 제출될 값       |               | 생략되면 포함된 텍스트를 값으로 사용 |

## 

### Progress

작업의 완료 진행률을 표시 -> 로딩바

| 속성  | 의미          | 값           | 특징                                                         |
| ----- | ------------- | ------------ | ------------------------------------------------------------ |
| max   | 작업의 총량   | 숫자(number) |                                                              |
| value | 작업의 진행량 | 숫자(number) | max 속성을 생략할 경우 0 ~ 1 사이의 숫자여야 함 (소수점 가능)<br />30%의 경우 0.3을 입력 |

```html
<progress value="70" max="100">70 %</progress>
```



----

## 전역 속성(Global Attributes), 기타

모든 HTML 요소에서 공통적으로 사용 가능한 속성



 ### class

공백으로 구분된 요소의 별칭을 지정, 여러개 지정이 가능함

CSS 혹은  Javascirpt의 요소 선택기(CSS 선택자나  JS의 getElementsbyClassName 등)를 통해서 요소를 선택하거나 접근



### id

문서에서 고유한 식별(idenifier, ID)를 정의

CSS 혹은  Javascirpt의 요소 선택기(CSS 선택자나  JS의 getElementsbyClassName 등)를 통해서 요소를 선택하거나 접근



### style

요소에 적용할  CSS를 선언



### title

요소의 정보(설명)을 지정



### lang

요소의 언어(ISO 639-1)를 지정

```html
<p lang="en">This paragraph is English</p>
<p lang="ko">이 단락은 한글입니다.</p>
<p lang="fr">Ce paragraphe est défini en français.</p>
```



### data-*

사용자 정의 데이터 속성을 지정.

HTML에 JS에서 이용할 수 있는 데이터(정보)를 저장하는 용도로 사용.

```html
<!-- data-custom-data-attributes -->
<div id="me" data-my-name="Heropy" data-my-age="851">Heropy</div>
```

```js
// dataset.customDataAttributes
const $me = document.getElementById('me');
console.log($me.dataset.myName); // "Heropy"
console.log($me.dataset.myAge); // "851"
```



### draggable

요소가 [Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)를 사용 가능한지 여부를 지정.

```html
<div draggable="true">The element to drag.</div>
```



### hidden

요소를 숨김

```html
<form id="hidden-form" action="/form-action" hidden>
  <!-- 숨겨진 양식들.. -->
</form>
<button form="hidden-form" type="submit">전송</button>
```



### tabindex

Tab 키를 이용해 요소를 순차적으로 포커스 탐색할 순서를 지정.

- 탭키 누르면 다음 칸으로 이동해서 입력할 수 있도록 만들어줌
- 대화형 콘텐츠는 기본적으로 코드 순서대로 탭 순서가 지정됨.
- 비대화형 콘텐츠에 tabindex="0"을 지정하여 대화형 콘텐츠와 같이 탭순서를 사용.
- tabindex="-1"을 통해 포커스는 가능하지만 탭 순서에서 제외 가능.
- tabindex="1"이상의 양수 값은 논리적 흐름을 방해하기 때문에 사용을 추천하지 않음

```html
<h1 tabindex="0">Sign In</h1>
<label>Username: <input type="text"></label>
<label>Password: <input type="password"></label>
<label>PS: <input type="text" tabindex="-1"></label>
<input type="submit" value="Sign In">
```



### 절대 경로와 상대 경로

리눅스의 절대 경로, 상대 경로와 개념이 같음



