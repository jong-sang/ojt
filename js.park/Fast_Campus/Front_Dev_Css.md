

# CSS



기본적으로 html, css 문서를 작성 할 시 border, margin 등 기본적으로 값이 설정되어서 문서를 작성하게 된다. 그래서 의도치 않게 css가 적용이 안된다거나 하는 경우가 발생할 수 있다. 이런 문제를 해결하기 위해서 css 값이 단 1도 적용되지 않도록 css값을 모두 초기화하고 원하는 css를 적용시키면 의도치않은 동작이 일어날 확률을 줄일 수 있다.



초기화 하는 방법으로는 https://www.jsdelivr.com/package/npm/reset-css에 올려진 css를 html 문서에 링크 태그를 이용해서 적용시키면 된다.

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css">
    <link rel="stylesheet" href="./css/main.css">
  </head>
</html>
```

위처럼 링크를 바로 사용해서 적용해도 되고 파일을 직접 다운받아서 임포트 시켜도 된다.

단. 초기화가 먼저 적용되어야 하기 때문에 내가 만든 css를 임포트 시키는 코드 위에 선언을 해주어야 CSS 초기화 -> 내가 만든 CSS파일 임포트 순으로 작동하게 된다.



## 온라인 코드 에디터 CODEPEN

구름IDE처럼 HTML,CSS,JS 코드를 온라인으로 작성하고 저장하여 어디서든 접근하여 작업을 할 수 있음.



## Emmet

강력한 자동완성 기능 등으로 HTML 작성 속도를 크게 향상시켜주는 플러그인

생성하려는 요소(tag)를 입력한 뒤 TAB키를 누르면 자동으로 태그가 생성됨.



## CSS 기본적인 문법

```css
선택자 { 속성: 속성값; 속성: 속성값; }
```

- 옆으로 길게 작성하는 방식은 '가독성'이 많이 떨어진다
- 몇몇 경우를 제외하고는 아래 방식처럼 작성하는게 좋다

```css
선택자 {
	속성: 속성값;
	속성: 속성값;
}
```



### 선택자(Selector)의 역활

속성과 값을 지정할 대상을 검색

```html
<div>HELLO</div> <!-- RED -->
<span>HELLO</span>
```

```css
div {
	color: red;
}
```

div 요소가 검색되어 속성과 값이 적용된다.



### 속성(Property)과 값(Value)의 역활

검색된 대상에 지정될 CSS 명령

```html
<div>HELLO</div>
```

```css
div {
	color: red;
	font-size: 20px;
	font-weight: bold;
}
/* 글자색: 빨강; */
/* 글자크기: 20px */
/* 글자두깨: 두껍게 */
```

선택자로 검색한 대상에 각 속성과 값을 삽입하여 스타일을 지정한다.

즉 div를 검색하고 HELLO라는 글자를 폰트는 20px, Bold체로 적용한다는 의미이다.



### Comment

문서 내 수정사항이나 설명 등을 작성 (주석)

언어마다 주석처리 방법은 다양한데 쉽게 사용하려면 에디터마다 지원하는 (OSX 기준) Command + / 등으로 자동으로 설정해준다



## CSS 선언 방식

### 선택자가 필요없는 방식

```html
<div style="color: red; font-size: 20px; font-weight: bold;">HELLO</div>
```

위 방식은 '선택자'가 필요하지 않는다.

하지만 많은 양의 코드를 작성하게 될 때에 각 태그마다 하나하나 작성해주기에는 너무 피곤하고 비효율적이다.

그렇다고 위에서 처럼 하나하나 입력하면 안된다는 의미는 아님.



### 내장(embedded) 방식

HTML \<style>\</style> 안에 작성하는 방식을 의미

```html
<head>
  <style>
    div {
      color: red;
      font-size: 20px;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div>
    HELLO
  </div>
</body>
```

HEAD 태그 안의 style 태그 안에 작성한다.

그럼 HELLO라는 글자는 style 태그의 영향을 받아 적용된다



### 링크(Link) 방식

HTML \<link>를 이용하여 외부 문서로 CSS를 불러와 적용하는 방식

```html
<head>
  <link rel="stylesheet" href="css/common.css"
</head>
<body>
	<div>
    HELLO
  </div>  
</body>
```

```css
/* common.css */
div {
   color: red;
   font-size: 20px;
   font-weight: bold;
}
```

패스트 캠퍼스에서는 이러한 방식을 추천하고 있다.

실제로 회사 코드들을 보면 css파일을 따로 작성하고 임포트하는 방식으로 사용중이기 때문



### @import 방식

CSS @import를 이용해서 외부 문서로 CSS를 불러와 젹용하는 방식

```html
<head>
  <link rel="stylesheet" href="css/common1.css"
</head>
<body>
	<div>
    HELLO
  </div>  
</body>
```

```css
/* common1.css */
@import url("./common2.css")
```

```css
/* common2.css */
div {
   color: red;
   font-size: 20px;
   font-weight: bold;
}
```

import 는 HTML에서 가져오는게 아니라 CSS 에서 CSS파일을 가져올때 사용한다.



## 선택자 (Selector)



### 전체 선택자(Universal Selector)

모든 요소를 선택

```css
* {
  color: red;
}
```

*으로 선언되면 모든 태그에 글자색을 빨간색으로 지정한다.



### 태그 선택자(Type Selector)

태그 이름으로 검색 ex) div, img, span 등

```css
li {
	color: red;
}
```

li 태그 안의 텍스트의 글씨 색이 빨간색으로 지정

```html
<div>
  <ul>
    <li>사과</li> <!-- 선택 -->
    <li>딸기</li> <!-- 선택 -->
    <li>오렌지</li> <!-- 선택 -->
  </ul>
  <div>
    당근
  </div>
  <p>
    토마토
  </p>
  <span>
  	오렌지
  </span>
</div>
```



### 클래스 선택자(Class Selector)

HTML class 속성의 값이 E인 요소 선택

```
.E
```

클래스 선택을 위해서 .(점) + className(클래스 이름) 이렇게 사용한다

```css
.orange {
	color: red;
}
```

```html
<div>
  <ul>
    <li>사과</li> <
    <li>딸기</li> 
    <li class="orange">오렌지</li> <!-- 선택 -->
  </ul>
  <div>
    당근
  </div>
  <p>
    토마토
  </p>
  <span class="orange"> <!-- 선택 -->
  	오렌지
  </span>
</div>
```



### 아이디 선택자(ID Selector)

HTML id 속성의 값이 E인 요소 선택

```
#E
```

아이디 값으로 선택하기 위해서는 #(샵)을 붙여서 사용한다.

```css
#orange {
	color: red;
}
```

```html
<div>
  <ul>
    <li>사과</li> <
    <li>딸기</li> 
    <li class="orange" id="orange">오렌지</li> <!-- 선택 -->
  </ul>
  <div>
    당근
  </div>
  <p>
    토마토
  </p>
  <span class="orange">
  	오렌지
  </span>
</div>
```



## 복합 선택자(Combinators)

### 일치 선택자(Basic Combinator)

E와 F를 동시에 만족하는 요소 선택

```
EF
```

```css
span.orange {
	color: red;
}
/* span = 태그, .orange = 클래스이름 */
```

```html
<div>
  <ul>
    <li>사과</li> <
    <li>딸기</li> 
    <li class="orange">오렌지</li>
  </ul>
  <div>
    당근
  </div>
  <p>
    토마토
  </p>
  <span class="orange">  <!-- 선택 -->
  	오렌지
  </span>
</div>
```



### 자식 선택자(Child Combinator)

E의 자식 요소 F를 선택

```
E > F
```

```css
ul > .orange {
	color: red ;
}
```



```html
<div>
  <ul>
    <li>사과</li> <
    <li>딸기</li> 
    <li class="orange">오렌지</li> <!-- 선택 -->
  </ul>
  <div>
    당근
  </div>
  <p>
    토마토
  </p>
  <span class="orange">  
  	오렌지
  </span>
</div>
```

ul 태그 안의 클래스 .orange를 선택하여서 오렌지라는 글자가 빨간색으로 출력된다.



### 후손(하위, 자손) 선택자(Descendant Combinator)

E의 후손(하위) 요소 F를 선택 

띄어쓰각 선택자의 기호로 사용된다.

```
E F
```

```css
div .orange {
	color: red;
}
```

```html
<div>
  <ul>
    <li>사과</li> <
    <li>딸기</li> 
    <li class="orange">오렌지</li> <!-- 선택 -->
  </ul>
  <div>
    당근
  </div>
  <p>
    토마토
  </p>
  <span class="orange">  <!-- 선택 -->
  	오렌지
  </span>
</div>
```

div의 자식 태그로는 ul, div, p, span이 있는데 그 중 class 이름이  orange인 ul태그와 span 태그가 선택이 되어 글씨가 붉은색으로 출력이 된다.

하지만 ul은 또 자식 태그 li를 가지고 있는데 li를 기준으로 div는 상위요소 div 기준으로 li는 하위요소 자식의 자식이니 손자 요소 정도로 이해하면 된다.

여튼 div 기준으로 자식들 자손들 중 class이름이 orange를 찾는 것이다.



### 인접 형제 선택자(Adjacent Sibling Combinator)

E의 다음 형제 요소  F 하나만 선택

```
E + F
```

```css
.orange + li {
	color: red;
}
```

```html
<ul>
  <li>딸기</li>
  <li>수박</li>
  <li class="orange">오렌지</li>
  <li>망고</li> <!-- 선택 -->
  <li>사과</li>
</ul>
```

인접한 형제를 찾는데 다음에 나오는 친구를 찾는다.

즉 class이름이  orange인 친구 다음에 나오는 형제 요소 중 li태그를 선택한다 orange를 찾는 것이 아니다.



### 일반 형제 선택자(General Sibling Combinator)

E의 다음 형제 요소 F를 모두 선택

```
E ~ F
```

```css
.orange ~ li {
	color: red;
}
```

```html
<ul>
  <li>딸기</li>
  <li>수박</li>
  <li class="orange">오렌지</li>
  <li>망고</li> <!-- 선택 -->
  <li>사과</li> <!-- 선택 -->
</ul>
```

인접 형제 선택자(+)와 유사하지만 다음으로 오는 모든 형제 태그들을 선택하게 된다. 여기도 마찬가지로 orange 본인은 제외한다.



## 가상 클래스 선택자(Pseudo-Classes Selectors)



### HOVER

E에 마우스(포인터)가 올라가 있는 동안에만  E 선택

```
E:hover
```

```html
<div class="box">
</div>
```

```css
.box {
	width: 100px;
	height: 100px;
	background: tomato;
  transition: 0.4s;
}
.box:hover {
  width: 200px;
}
```

hover를 이용해서 box 위에 마우스를 올리면 가로로 길어지는 모습을 확인 할 수 있다.

이런 기능을 이용해서 웹 사이트 게시판에서 마우스를 올리면 그 게시물칸이 색이 들어온다거나 하는 기능을 구현할 수 있다.

또한 transition을 통해서 100px에서  200px로 바뀌는 0.4초동안 애니메이션으로 표현도 가능하다.



### ACTIVE

E를 마우스로 클릭하는 동안에만 E 선택

```
E:active
```

```html
<div class="box">
</div>
```

```css
.box {
	width: 100px;
	height: 100px;
	background: tomato;
}
.box:active {
  width: 200px;
  background: yellowgreen;
}
```

코드팬등의 에디터로 실행해보면 box칸을 클릭하면 가로 길이가 200으로 늘고 색상도 바뀌는 것을 확인 할 수 있다.

마찬가지로 transition을 사용하면 이것도 애니메이션으로 출력이 가능하다.



### FOCUS

E가 포커스 된 동안에만  E 선택가능

```
E:focus
```

- 주로 대화형 콘텐츠(input, img 등)에서 사용이 가능하다

```html
<input type="text">
```

HTML에서 확인하면 값을 입력하기 위해서 input칸을 클릭하면 파란색으로 불이 들어오는 것을 확인할 수 있다. 이런 상황을 포커스라고 이야기함.

```css
input {
	width: 100px;
	outline: none;
	border: 1px solid lightgray;
	padding: 5px 10px;
}
input:focus {
	border-color: red;
	width: 200px;
}
```



input 태그에 값을 입력하기 위해서 클릭하면 포커스 현상이 발생하고 그럼 border-color 즉 테두리 선의 색이 빨간색으로 면하고 가로의 길이가 200px로 늘어나게 된다.

이 부분에서 마찬가지로 transition을 사용 할 수 있다.



### FIRST CHILD

E가 형제 요소 중 첫번째 요소라면 선택

```
E:first-child
```

```css
.fruits li:first-child {
	color: red;
}
```

```html
<ul class="fruits">
  <li>딸기</li> <!-- 선택 -->
  <li>사과</li>
  <li>오렌지</li>
  <li>망고</li>
</ul>
```

실무에서 작업을 진행할 때 태그 하나하나 클래스 이름을 작성하는건 불가능에 가깝기 때문에 큰 틀에 클래스 이름을 정하고 세부적인 내용은 css의 가상 클래서 선택자로 컨트롤 하는 일이 많다고 한다.



### LAST CHILD

위의 first child와 반대의 경우이다. last child는 마지막 요소를 선택한다

```css
.fruits li:last-child {
	color: red;
}
```

```html
<ul class="fruits">
  <li>딸기</li>
  <li>사과</li>
  <li>오렌지</li>
  <li>망고</li> <!-- 선택 -->
</ul>
```



### NTH-CHILD

앞에서 가장 처음과 가장 마지막 요소를 선택하는 가상 선택자에 대해 정리했다.

이번에는 몇번째 요소를 선택하는 기능이다

E가 형제 요소 중 n번째 요소라면 선택 -> 내가 직접적으로 사용할 것 같지는 않아보임.

- n키워드 사용시 0부터 해석(Zero-base)

```
E:nth-child(n)
```

```css
.fruits li:nth-child(2) {  -> 2부분을 2n으로 입력하면 짝수번째 자손만 선택이 됨. == 응용하면 게시글에 짝수번째판 색을 다르게한다거나
	color: red;
}
```

```
<ul class="fruits">
  <li>딸기</li>
  <li>사과</li>
  <li>오렌지</li>
  <li>망고</li> <!-- 선택 -->
</ul>
```

 

#### 주의사항

```css
.fruits p:nth-child(1) {
	color: red;
}
```

```html
<!-- 선택 요소 없음-->
<div class="fruits">
  <div>딸기</div>
  <p>사과</p>
  <p>망고</p>
  <span>오렌지</span>
</div>
```

위의 경우 class fruits의 첫 번째 태그가 p태그가 아니기 때문에 선택되는 요소가 없다.

잘 생각해서 사용해야하는 부분인데 생각하기 복잡하다면 하나하나 하는 방법도 좋을것 같아보임.



### NTH OF TYPE

E의 타입(태그 이름)과 동일한 타입인 형제 요소 중 E가 n번째 요소라면 선택

- n키워드 사용시 0부터 해석(Zero-base)

```
E:nth-of-type(n)
```
```css
.fruits p:nth-of-type(1) {
	color: red;
}
```

```html
<div class="fruits">
  <div>딸기</div>
  <p>사과</p> <!-- 선택 -->
  <p>망고</p>
  <span>오렌지</span>
</div>
```

 해석이 어려울 때는 ->방향으로 해석하지 말고 반대로 <- 방향으로 해석하면 좀 더 명확한 해석이 가능하다

1번째 요소인데 p태그 중 첫번째를 선택한다 class 이름이  fruits의 자식 태그 중에서 라고 해석하면 된다



#### 주의사항

```css
.fruits .red:nth-of-type(1) {
	color: red;
}
```

```html
<!-- 선택 요소 없음 -->
<div class="fruits">
  <li>오렌지</li>
  <li class="red">딸기</li>
  <li>망고</li>
  <li class="red">사과</li>
</div>
```

이렇게 선언하면 아무 요소도 선택되지 않는다 nth-of-type의 type이 의미하는 것은 태그의 이름을 의미하기에 클래스 이름을 앞에 선언한다하여도 아무 반응이 없는 것이 정상



### 부정 선택자(Negation Selector)

S가 아닌 E 선택

```
E:not(s)
```

```css
.fruits li:not(.strawberry) {
  color: red;
}
```

```html
<div class="fruits">
  <li>오렌지</li>
  <li class="strawberry">딸기</li>
  <li>망고</li>
  <li>사과</li>
</div>
```

.strawberry 를 제외한 li 태그 중 fruits의 자식 요소들에게 글자색을 red로 정의한다.



## 가상 요소 선택자(Pseudo-Elements Selectors)

### BEFORE

E요소 내부의 앞에, 내용(content)을 삽입

가상 요소 선택자는 가상 클래스와 다르게 콜론(:)이 두개 들어간다

```
E::before => 가상 요소 선택자
E:hover => 가상 클래스 선택자
```

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li>8</li>
  <li>9</li>
  <li>10</li>
</ul>
```

```css
ul li::before {
  content: "숫자";
}
```

```html
숫자1
숫자2
숫자3
숫자4
숫자5
숫자6
숫자7
숫자8
숫자9
숫자10
```

이렇게 출력이 되는 것을 확인 할 수 있다.



### AFTER

before와 반대로 E 요소 내부의 뒤에 내용을 삽입함

 ```css
 ul li::after {
   content: "번"
 }
 ```

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li>8</li>
  <li>9</li>
  <li>10</li>
</ul>
```

```
1번
2번
3번
4번
5번
6번
7번
8번
9번
10번
```



## 속성 선택자(Attribute Selectors)

### ATTR

속성 attr을 포함한 요소 선택

```
[attr]
```

```css
[disabled] {
  opacity: 0.5; /* 50% */
  color: red;
}
```

```html
<input type="text" value="qwer">
<input type="password" value="1234">
<input type="text" value="zxcv" disabled>
```

이렇게 사용하면 모든 내용 중 속성값이  disabled가 포함된 요소만 투명도가 50%, 글자 색이 red로 바뀌게 된다.



### ATTR=VALUE

속성 attr을 포함하며 속성 값이  value인 요소를 선택

```
[attr=value]
```
```css
[type="password"] {
  opacity: 0.5; /* 50% */
  color: red;
}
```

```html
<input type="text" value="qwer">
<input type="password" value="1234">
<input type="text" value="zxcv" disabled>
```

이렇게 사용하면 1234 글자가 투명도 50%, 글자색은 red로 출력된다.



### ATTR^=VALUE

속성 attr을 포함하며 속성 값이 value로 시작하는 요소 선택

```
[attr^=value]
```

```css
[class^="btn-"] {
  font-weight: bold;
  border-radius: 20px
}
```

```html
<button class="btn-success">Success</button>
<button class="btn-danger">Danger</button>
<button>Normal</button>
```

클래스 속성이 "btn-" 으로 시작하는 요소를 찾는다 즉 success와 danger 버튼을 선택해서 폰트와 라디우스를 적용하게 된다



### 상속(Inheritance)

```css
.ecosystem {
  color: red;
}
```

```html
<div class="echosystem">생태계 <!-- RED -->
	<div class="animal">동물 <!-- RED -->
    <div class="tiger">호랑이</div> <!-- RED -->
    <div class="lion">사자</div> <!-- RED -->
    <div class="elephant">코끼리</div> <!-- RED -->
  </div>
  <div class="plant">식물</div> <!-- RED -->
</div>
```

- 생태계(.ecosystem)에 적용된 색상이, 하위 요소들에게 적용되는 모습을 확인 할 수 있다.

특정 태그는 상위 태그(부모)의 css값이 하위 태그(자식)에게 영향을 미침



#### 상속되는 속성들(properties)

- font
  - font-size
  - font-weight
  - font-style
  - Line-height
  - font-family
- color
- text-align
- text-indent
- text-decoration

etc ....



#### 강제 상속

```html
<div class="parent">
  <div class="child"></div>
</div>
```

```css
.parent {
  position: absolute; /* 상속되지 않는 속성과 값 */
}
.child {
  position: inherit; /* 강제 상속받아 position: absolute; 와 동일 */
}
```

상속되지 않는 속성(값)도 inherit이라는 값을 사용하여 '부모'에서 '자식'으로 강제 상속시킬 수 있다. 

하지만 '자식'을 제외한 '후손'에게는 적용이 안되고 모든 속성이 강제 상속을 사용 할 수 있는 것은 아니다



### 우선 순위

```html
<body>
  <!-- 인라인 선언 방식 -->
  <div id="color_yellow" class="color_green" style="color: orange;">Hello world</div>
</body>
```

```css
div { color: red !important;}
#color_yellow { color: yellow; }
.color_green { color: green }
div { color: blue; }
* { color: darkblue; }
body { color: violet; }
```

하나의 div 태그안에 스타일이 7종류가 정의 되어있는데 과연 무슨 색으로 출력이 될까



#### 우선순위 결정

같은 요소가 여러 선언의 대상이 될 경우, 어떤 선언의  CSS 속성(property)을 우선 적용할지 결정하는 방법

1. 명시도 점수가 높은 선언이 우선(명시도)
2. 점수가 같은 경우, 가장 마지막에 해석(늦게 작성한)되는 선언이 우선(선언 순서)
3. 명시도는 '상속'규칙보다 우선(중요도)
4. *!important*가 적용된 선언 방식이 다른 모든 방식보다 우선(중요도)



#### 우선순위 7가지 점수

1. 가장 중요(!important) : 모든 선언을 무시하고 가장 우선
   - 점수 : ∞  pt
2. 인라인 선언 방식(Style Attribute)
   - 점수 : 1000pt
3. 아이디(ID Selector)
   - 점수 : 100pt 
4. 클래스(Class Selector)
   - 점수 : 10pt
5. 태그(Type Selector)
   - 점수 : 1pt
6. 전체(Universal Selector)
   - 점수 : 0pt
7. 상속(CSS Inheritance)
   - 점수 : 계산하지 않음
   - 우선하지 않는다



##  CSS 속성 - 박스 모델

### width

| 값   | 의미                      | 기본값 |
| ---- | ------------------------- | ------ |
| auto | 브라우저가 너비를 계산    | auto   |
| 단위 | px, em, cm 등 단위로 지정 |        |



###  height

| 값   | 의미                      | 기본값 |
| ---- | ------------------------- | ------ |
| auto | 브라우저가 너비를 계산    | auto   |
| 단위 | px, em, cm 등 단위로 지정 |        |



### max-width
| 값   | 의미                     | 기본값 |
| ---- | ------------------------ | ------ |
| auto | 브라우저가 너비를 계산   |        |
| 단위 | px, em, % 등 단위로 지정 | None   |



### min-width

| 값   | 의미                      | 기본값 |
| ---- | ------------------------- | ------ |
| auto | 브라우저가 너비를 계산    |    |
| 단위 | px, em, % 등 단위로 지정 |    0    |



### max-height

| 값   | 의미                     | 기본값 |
| ---- | ------------------------ | ------ |
| auto | 브라우저가 너비를 계산   |        |
| 단위 | px, em, % 등 단위로 지정 | None   |



### min-height

| 값   | 의미                     | 기본값 |
| ---- | ------------------------ | ------ |
| auto | 브라우저가 너비를 계산   |        |
| 단위 | px, em, % 등 단위로 지정 | 0      |



### margin

요소의 '외부(바깥) 여백'을 지정

| 값   | 의미                                | 기본값 |
| ---- | ----------------------------------- | ------ |
| 단위 | px, em, cm 등 단위로 지정           | 0      |
| auto | 브라우저가 너비를 계산              |        |
| %    | 부모 요소의 너비에 대한 비율로 지정 |        |



사용법

```css
margin: 위 우 아래 좌;
margin: 위 [좌, 우] 아래;
margin: [위, 아래] [좌, 우];
margin: [위, 아래, 좌, 우]
```

```css
.box {
  margin: 10px 20px 30px 40px;
  margin: 10px 20px 40px;
  margin: 10px 40px;
  margin: 10px;
}
```



### 마진 중복(병합, Collapse)

마진의 특정 값들이 '중복'되어 합쳐지는 현상

1. 형제 요소들의  margin-top과 margin-bottom이 만났을 때
2. 부모 요소의 margin-top과 자식요소의 margin-top이 만났을 때
3. 부모 요소의 margin-bottom과 자식 요소의  margin-bottom이 만났을 때

> '마진 중복'은 버그(오류)가 아니다. 현상을 우회하거나 응용이 가능하다.



#### 마진 중복 계산법

마진 중복 현상이 발생시, 중복 값을 계산하는 방법

| 조건             | 요소A 마진 | 요소B 마진 | 계산법              | 중복 값 |
| ---------------- | ---------- | ---------- | ------------------- | ------- |
| 둘 다 양수       | 30px       | 10px       | 더 큰 값으로 중복   | 30px    |
| 둘 다 음수       | -30px      | -10px      | 더 작은 값으로 중복 | -30px   |
| 각각 양수와 음수 | -30px      | 10px       | -30 + 10 = -20      | -20px   |



### Padding

요소의 '내부(안) 여백'을 지정

속성 값

| 값   | 의미                                | 기본값 |
| ---- | ----------------------------------- | ------ |
| 단위 | px, em, cm 등 단위로 지정           | 0      |
| %    | 부모 요소의 너비에 대한 비율로 지정 |        |

사용법 등 기타 특징은 margin과 유사하다



### border

요소의 '테두리 선'을 지정

| 값           | 의미            | 기본값 |
| ------------ | --------------- | ------ |
| border-width | 선의 두께(너비) | medium |
| border-style | 선의 종류       | none   |
| border-color | 선의 색상       | black  |



```css
border: 두께 종류 색상;
```

```css
.box {
  border: 1px solid red; /* 두께는 1px, 선은 실선, 색은 빨간색 */
}
```



#### border-width

선의 두께(너비)를 지정

속성 값

| 값     | 의미                      | 기본 값 |
| ------ | ------------------------- | ------- |
| medium | 중간 두께                 | medium  |
| thin   | 얇은 두께                 |         |
| thick  | 두꺼운 두께               |         |
| 단위   | px, em, cm 등 단위로 지정 |         |



#### border-width 사용법

padding, margin 과 같이 사용이 가능함



### border-style

속성 값

| 값     | 의미                                | 기본값 |
| ------ | ----------------------------------- | ------ |
| none   | 선 없음                             | none   |
| hidden | 선 없음과 동일(table 요소에서 사용) |        |
| solid  | 실선(일반선)                        |        |
| dotted | 점선                                |        |
| dashed | 파선                                |        |
| double | 두줄선                              |        |
| groove | 홈이 파여있는 모양                  |        |
| ridge  | 솟은 모양(선, grrove의 반대)        |        |
| inset  | 요소 전체가 들어간 모양(선)         |        |
| Outset | 요소 전체가 나온 모양(선)           |        |



### border-color

속성 값

| 값          | 의미                            | 기본값 |
| ----------- | ------------------------------- | ------ |
| 색상        | 선의 색상을 지정                | black  |
| trnasparent | 투명한 선(요소의 배경색이 보임) |        |



### box-sizing

요소의 크기 계산 기준을 지정

| 값          | 의미                                                         | 기본값      |
| ----------- | ------------------------------------------------------------ | ----------- |
| content-box | 너비(width, height)만으로 요소의 크기를 계산                 | content-box |
| border-box  | 너비(width, height)에 안쪽 여백(padding)과 테두리 선(border)를 포함하여 요소의 크기를 계산 |             |



### dispaly

요소의 박스 타입(유형)을 설정

속성 값

| 값           | 의미                                   | 기본값 |
| ------------ | -------------------------------------- | ------ |
| block        | 블록 요소(div 등)                      |        |
| inline       | 인라인 요소(span 등)                   |        |
| inline-block | 인라인-블록 요소(input 등)             |        |
| 기타         | table, table-cell, flex 등             |        |
| none         | 요소의 박스 타입이 없음(요소가 사라짐) |        |



### overflow

요소의 크기 이상으로 내용(자식요소)이 넘쳤을때, 내용의 보여짐을 제어

속성 값

| 값      | 의미                                                         | 기본값  |
| ------- | ------------------------------------------------------------ | ------- |
| visible | 넘친 부분을 자르지 않고 그대로 보여줌                        | Visible |
| hidden  | 넘친 부분을 잘라내고, 보이지 않도록 함                       |         |
| scroll  | 넘친 부분을 잘라내고, 스크롤바를 이용하여 볼 수 있돌고 함    |         |
| auto    | 넘친 부분이 있는 경우만 잘라내고, 스크롤바를 이용하여 볼 수 있도록 함 |         |



### opacity

요소의 투명도를 지정한다.

속성 값

| 값   | 의미                      | 기본값 |
| ---- | ------------------------- | ------ |
| 숫자 | 0부터 1사이의 소수점 숫자 | 1      |

```css
opacity: 투명도
```

```css
.half {
  opacity: 0.5;
}
.transparent {
  opacity: 0;
}
.box {
  opacity: 0.75;
}
```



## CSS / 속성 - 글꼴, 문자



### font

글자 관련 속성들을 지정

속성 값

| 값          | 의미                  | 기본값                           |
| ----------- | --------------------- | -------------------------------- |
| font-style  | 글자 기울기 지정      | normal                           |
| font-weight | 글자 두께 지정        | normal                           |
| font-size   | 글자 크기 지정        | medium(16px)                     |
| line-height | 줄 높이(줄 간격) 지정 | Normal(Reset.css 적용시 1)       |
| font-family | 글꼴(서체)지정        | 운영체제(브라우저)에 따라 달라짐 |



사용법

```
font: 기울기 두께 크기 / 줄높이 글꼴;
```

```css
.box {
  font: italic bold 20px / 1.5 "Arial", sans-serif;
}
```

```css
.box {
  font: 30px / 1.5; /* ERROR */
  font: bold; /* ERROR */
  font: bold sans-serif; /* ERROR */
  font: 30px / 1.5 sans-serif;
  font: bold 30px sans-serif;
  font: italic 30px / 1.5 "Arial", sans-serif;
}
```

> 단축 속성을 사용하려면 font-size와 font-family를 필수로 입력해야 합니다.



### 문자(TEXT) 관련 속성

#### color

문자의 색상을 지정

속성 값

| 값   | 의미               | 기본값     |
| ---- | ------------------ | ---------- |
| 색상 | 문자의 색상을 지정 | rgb(0,0,0) |



### text-align

속성 값

| 값      | 의미        | 기본값 |
| ------- | ----------- | ------ |
| left    | 왼쪽 정렬   |        |
| right   | 오른쪽 정렬 |        |
| center  | 가운데 정렬 |        |
| justify | 양쪽 맞춤   |        |



### text-decoration

문자의 장식(line)을 설정

속성 값

| 값           | 의미                       | 기본값 |
| ------------ | -------------------------- | ------ |
| none         | 선 없음                    | none   |
| underline    | 밑줄을 지정                |        |
| overline     | 윗줄을 지정                |        |
| line-through | 중앙 선(가로지르는)을 지정 |        |



### text-indent

(첫번째 줄의) 들여쓰기를 지정

> 음수 값(Negative Values)을 사용할 수 있습니다.
>
> 음수 값을 사용하면 첫째 줄은 오니쪽으로 들여쓰기(내어쓰기) 됩니다.



### letter-spacing

문자의 자간(글자 사이 간격)을 성정

속성 값

| 값     | 의미                      | 기본값 |
| ------ | ------------------------- | ------ |
| normal | 단어 사이의 일반 간격     | normal |
| 단위   | px, em, cm 등 단위로 지정 |        |



### word-spacing

단어 사이(띄어쓰기)의 간격을 설정

| 값     | 의미                      | 기본값 |
| ------ | ------------------------- | ------ |
| normal | 단어 사이의 일반 간격     | normal |
| 단위   | px, em, cm 등 단위로 지정 |        |



## CSS / 속성 - 띄움(정렬), 위치



### float

요소를 좌우 방향으로 띄움(수평 정렬)

속성 값

| 값    | 의미            | 기본값 |
| ----- | --------------- | ------ |
| none  | 요소 띄움 없음  | none   |
| left  | 왼쪽으로 띄움   |        |
| right | 오른쪽으로 띄움 |        |

> 실제로 사용해보면 감각을 익히는데 더 빠르다.
>
> 그러니 내용이 짧다고 넘어갈 것이 아니라 이 부분은 확실하게 공부하고 다른 자료도 찾아보는 것으로 해야한다.



## CSS / 속성 - 배경



### background

속성 값

| 값                    | 의미                            | 기본값      |
| --------------------- | ------------------------------- | ----------- |
| background-color      | 배경 색상                       | transparent |
| background-image      | 하나 이상의 배경 이미지         | none        |
| background-repeat     | 배경 이미지의 반복              | repeat      |
| background-position   | 배경 이미지의 위치              | 0 0         |
| background-attachment | 배경 이미지의 스크롤 여부(특성) | Scroll      |



사용법

```css
background: 색상 이미지경로 반복 위치 스크롤특성;
```

```css
.box1 {
  background: red url("../img'image.jpg") no-repeat left top scrool;
  /* 색상 이미지경로 반복 위치 스크롤특성 */
}
.box2 {
  background: url("../img'image.jpg") no-repeat right 100px;
	/* 이미지경로 반복 위치 */
}
.box3 {
  background: red;
  /* 색상 */
}
```



### background-color	

요소의 배경 색상을 지정

속성 값

| 값          | 의미             | 기본값      |
| ----------- | ---------------- | ----------- |
| 색상        | 요소의 배경 색상 |             |
| transparent | 투명             | transparent |



### background-image

요소의 배경에 하나 이상의 이미지를 삽입

 속성 값

| 값          | 의미             | 기본값 |
| ----------- | ---------------- | ------ |
| none        | 이미지 없음      | none   |
| url("경로") | 이미지 경로(URL) |        |



사용법

```css
background-image: url("경로");
```

```css
.box {
  background-image: url("../img/image.jpg");
  width: 120px;
  height: 80px;
}
/* 경로가 하나 */
```

```css
.box1 {
  background-image: url("../img/il.jpg"),
    url("../img/i2.jpg"),
    url("../img/i3.jpg");
}
/* 경로가 여러가지 */
.box2 {
  background: url("../img/i1.jpg") no-repeat,
    url("../img/i2.jpg") no-repeat 100px 50px,
    url("../img/i3.jpg") repeat-x;
}
/* 경로가 여러가지인데 단축 속성으로 사용 */
```



### background-repeat

배경이미지의 반복 제어

속성 값

| 값        | 의미                              | 기본값 |
| --------- | --------------------------------- | ------ |
| repeat    | 배경 이미지를 수직, 수평으로 반복 | repeat |
| repeat-x  | 배경 이미지를 수평으로 반복       |        |
| repeat-y  | 배경 이미지를 수직으로 반복       |        |
| no-repeat | 반복 없음                         |        |



### background-position

배경 이미지의 위치를 설정

속성 값

| 값   | 의미                                                         | 기본값 |
| ---- | ------------------------------------------------------------ | ------ |
| %    | 왼쪽 상단 모서리는 0% 0%,<br />오른쪽 하단 모서리는 100% 100% | 0% 0%  |
| 방향 | 방향을 입력하여 위치 설정<br />top, botton, left, right, center |        |
| 단위 | px, em, cm 등 단위로 지정                                    |        |



사용법

값이 방향일 경우

```css
background-position: 방향1, 방향2;
```

값이 단위일 경우

```css
background-position: x축, y축;
```



### background-attachment

요소가 스크롤될 때 배경 이미지의 스크롤 여부(특성) 설정

| 값     | 의미                                                         | 기본값 |
| ------ | ------------------------------------------------------------ | ------ |
| scrool | 배경 이미지가 요소를 따라서 같이 스크롤 됨                   | scroll |
| fixed  | 배경 이미지가 뷰포트(Viewport)에 고정되어, 요소와 같이 스크롤되지 않음 |        |
| local  | 오소 내 스크롤 시 배경 이미지가 샅이 스크롤 됨               |        |



### bacground-size	

배경 이지미의 크기를 설정

속성 값

| 값      | 의미                                                         | 기본값 |
| ------- | ------------------------------------------------------------ | ------ |
| auto    | 배경 이미지가 원래의 크기로 표시 됨                          | auto   |
| 단위    | px, em, % 등 단위로 지정<br />width height 형태로 입력 가능(E.g 120px 370px)<br />width만 입력하면 비율에 맞게 지정됨(E.g 120px) |        |
| cover   | 배경 이미지의 크기 비율을 유지하며, 요소의 더 넓은 너비에 맞춰짐<br />이미지가 잘릴 수 있음 |        |
| contain | 배경 이미지의 크기 비율을 유지하며, 요소의 더 짧은 너비에 맞춰짐<br />이미지가 잘리지 않음 |        |



## CSS / 속성 - 전환 & 변환



### 전환(Transitions)

CSS 속성의 시작과 끝을 지정(전환 효과)하여 중간 값을 애니메이션

속성 값

| 값                         | 의미                         | 기본값 |
| -------------------------- | ---------------------------- | ------ |
| transition-property        | 전환 효과를 사용할 속성 이름 | all    |
| transition-duration        | 전환 효과의 지속시간 설정    | 0s     |
| transition-timing-function | 타이밍 함수 지정             | ease   |
| transition-delay           | 전환 효과의 대기시간 설정    | 0s     |



####  transition-property

전환 효과를 사용할 속성 이름을 설정

| 값       | 의미                        | 기본값 |
| -------- | --------------------------- | ------ |
| all      | 모든 속성에 적용            | all    |
| 속성이름 | 전환 효과를 사용할 속성이름 |        |

  

#### transition-duration

전환 효과의 지속 시간을 설정

| 값   | 의미                      | 기본값 |
| ---- | ------------------------- | ------ |
| 시간 | 전환 효과가 지속되는 시간 | 0s     |



#### transition-timing-function

타이밍 함수(애니메이션 전환 효과를 계산하는 방법) 지정

| 값                    | 의미                  | 기본값 | Cubic Bezier 값               |
| --------------------- | --------------------- | ------ | ----------------------------- |
| ease                  | 빠르게 - 느리게       | ease   | cubic-bezier(.25, .1, .25, 1) |
| linear                | 일정하게              |        | cubic-bezier(0, 0, 1, 1)      |
| ease-in               | 느리게 - 빠르게       |        | cubic-bezier(0.42, 0, 1, 1)   |
| ease-out              | 빠르게 - 느리게       |        | cubic-bezier(0, 0, .58, 1)    |
| ease-in-out           | 느리게-빠르게-느리게  |        | cubic-bezier(0.42, 0, .58, 1) |
| cubic-bezier(n,n,n,n) | 자신만의 값을 정의    |        |                               |
| steps(n)              | n번 분할된 애니메이션 |        |                               |



#### transtition-delay

전환 효과가 몇 초 뒤에 시작할지 대기시간을 설정

| 값   | 의미                        | 기본값 |
| ---- | --------------------------- | ------ |
| 시간 | 전환 효과의 대기시간을 설정 | 0s     |



### 변환(Transforms)

요소의 변환 효과(변형)를 지정

요소를 비틀거나 이동하거나 등등

```css
transform: 변환함수1 변환함수2 변환함수3;
transform: 원근법 이동 크기 회전 기울임;
```

```css
.box {
  transform: ratate(20deg) translate(10px, 0);
}
```



#### 2D 변환 함수(transform)

 속성 값

| 값(변환함수)        | 의미             | 단위       |
| ------------------- | ---------------- | ---------- |
| translate(x, y)     | 이동(X축, Y축)   | 단위       |
| translateX(x)       | 이동(X축)        | 단위       |
| translateY(y)       | 이동(Y축)        | 단위       |
| scale(x, y)         | 크기(X축, Y축)   | 없음(배수) |
| scaleX(x)           | 크기(X축)        | 없음(배수) |
| scaleY(y)           | 크기(Y축)        | 없음(배수) |
| rotate(degree)      | 회전(각도)       | deg        |
| skew(x-deg, y-deg)  | 기울임(X축, Y축) | deg        |
| skewX(x-deg)        | 기울임(X축)      | deg        |
| skewY(y-deg)        | 기울임(Y축)      | deg        |
| matrix(n,n,n,n,n,n) | 2차원 변환 효과  | 없음       |



####  3D 변환 함수(transform)

| 값(변환함수)                              | 의미                           | 단위       |
| ----------------------------------------- | ------------------------------ | ---------- |
| translate3d(x, y, z)                      | 의미(X축,  Y축, Z축)           | 단위       |
| translateZ(z)                             | 이동(Z축)                      | 단위       |
| scale3d(x, y, z)                          | 크기(X축, Y축, Z축)            | 없음(배수) |
| scaleZ(z)                                 | 크기(Z축)                      | 없음(배수) |
| rotate3d(x, y, z, a)                      | 회전(X벡터,Y벡터, Z벡터, 각도) | 없음, deg  |
| rotateX(x)                                | 회전(X축)                      | deg        |
| rotateY(y)                                | 회전(Y축)                      | deg        |
| rotateZ(z)                                | 회전(Z축)                      | deg        |
| perspective(n)                            | 원근법(거리)                   | 단위       |
| matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n) | 3차원 변환 효과                | 없음       |



###  transform 변환 속성

| 속성                | 의미                                               |
| ------------------- | -------------------------------------------------- |
| transform-origin    | 요소의 변환의 기준점을 설정                        |
| transform-style     | 3D 변환 요소의 자식 요소도 3D 변환을 사용할지 설정 |
| perspective         | 하위 요소를 관찰하는 원근 거리를 설정              |
| perspective-origin  | 원근 거리의 기준점을 설정                          |
| backface-visibility | 3D 변환으로 회전된 요소의 뒷면 숨김을 설정         |



#### transform-origin

요소의 변환의 기준점을 설정

| 값   | 의미                         | 기본값 |
| ---- | ---------------------------- | ------ |
| X축  | left, right, center, %, 단위 | 50%    |
| Y축  | top, bottom, center, %, 단위 | 50%    |
| Z축  | 단위                         | 0      |



#### transform-style

3D 변환 요소의 자식 요소도 3D 변환을 사용할지 설정

| 값          | 의미                                 | 기본값 |
| ----------- | ------------------------------------ | ------ |
| flat        | 자식 요소의  3D 변환을 사용하지 않음 | flat   |
| preserve-3d | 자식 요소의 3D 변환을 사용함         |        |



#### perspective

하위 요소를 관찰하는 원근 거리를 설정

| 값   | 의미                      | 기본값 |
| ---- | ------------------------- | ------ |
| 단위 | px, em, cm 등 단위로 지정 |        |



#### perspective-origin

원근 거리의 기준점을 설정
| 값   | 의미                         | 기본값 |
| ---- | ---------------------------- | ------ |
| X축  | left, right, center, %, 단위 | 50%    |
| Y축  | top, bottom, center, %, 단위 | 50%    |



#### backface-visibility

3D 변환으로 회전된 요소의 뒷면 숨김을 설정

|값|의미|기본값|
|---|-----------|-------|
|visible|뒷면 숨기지 않음|visible|
|hidden|뒷면 숨김| |



#### matrix()

요소의 2차원 변환(transforms) 효과를 지정 scale(), skew(), translate() 그리고 rotate()를 지정





## CSS / 속성 - 애니메이션 & 다단



### 애니메이션(Animations)

요소에 애니메이션을 설정/제어

| 값                        | 의미                              | 기본값  |
| ------------------------- | --------------------------------- | ------- |
| animation-name            | @keyframes 규칙의 이름을 지정     | none    |
| animation-duration        | 애니메이션의 지속 시간 설정       | 0s      |
| animation-timing-function | 타이밍 함수 지정                  | ease    |
| animation-delay           | 애니메이션의 대기 시간 설정       | 0s      |
| animation-iteration-count | 애니메이션의 반복 횟수 설정       | 1       |
| animation-direction       | 애니메이션의 반복 방향 설정       | normal  |
| animation-fill-mode       | 애니메이션의 전후 상태(위치) 설정 | none    |
| animation-play-state      | 애니메이션의 재생과 정지 설정     | running |



```css
animation: 애니메이션 이름 지속시간 [타이밍함수 대기시간 반복횟수 반복방향 전후상태 재생/정지];
```

```css
.box {
  width: 100px;
  height: 100px;
  background: tomato;
  animation: hello 2s linear infinite	both;
}

@keyframes hello {
  0% { width: 200px; }
  100% { width: 50px; }
}
```



### Keyframes rule

2개 이상의 애니메이션 중간 상태(프레임)을 지정 

``` css
@keyframes 애니메이션이름 {
  0% { 속성: 값; }
  50% { 속성: 값; }
  100% { 속성: 값; }
}
```

```css
@keyframes move-box {
  0% { left: 100px; }
  100% { top: 200px; }
}
```



#### animation-name

@keyframes 규칙(애니메이션 프레임)의 이름을 지정

| 값              | 의미                                                | 기본값 |
| --------------- | --------------------------------------------------- | ------ |
| none            | 애니메이션을 지정하지 않음                          | none   |
| @keyframes 이름 | 이름이 일치하는 @keyframes 규칙의 애니메이션을 적용 |        |



#### animation-duration

애니메이션의 지속 시간 설정

| 값   | 의미             | 기본값 |
| ---- | ---------------- | ------ |
| 시간 | 지속 시간을 설정 | 0s     |



#### animation-timing-function

타이밍 함수(애니메이션 효과를 계산하는 방법) 지정

| 값                    | 의미                  | 기본값 | Cubic Bezier 값               |
| --------------------- | --------------------- | ------ | ----------------------------- |
| ease                  | 빠르게 - 느리게       | ease   | cubic-bezier(.25, .1, .25, 1) |
| linear                | 일정하게              |        | cubic-bezier(0, 0, 1, 1)      |
| ease-in               | 느리게 - 빠르게       |        | cubic-bezier(0.42, 0, 1, 1)   |
| ease-out              | 빠르게 - 느리게       |        | cubic-bezier(0, 0, .58, 1)    |
| ease-in-out           | 느리게-빠르게-느리게  |        | cubic-bezier(0.42, 0, .58, 1) |
| cubic-bezier(n,n,n,n) | 자신만의 값을 정의    |        |                               |
| steps(n)              | n번 분할된 애니메이션 |        |                               |



#### animation-delay

애니메이션의 대기 시간 설정

| 값   | 의미             | 기본값 |
| ---- | ---------------- | ------ |
| 시간 | 대기 시간을 설정 | 0s     |

> 음수 허용. 음수가 있을 경우 애니메이션을 바로 시작되지만, 그 값만큼 애니메이션이 앞서 시작 (애니메이션 주기 도중에 시작)



#### animation-iteration-count

애니메이션의 반복 횟수를 설정

| 값       | 의미             | 기본값 |
| -------- | ---------------- | ------ |
| 숫자     | 반복 횟수를 설정 | 1      |
| infinite | 무한 반복        |        |



#### animation-direction

애니메이션의 반복 방향을 설정

| 값                | 의미                             | 기본값 |
| ----------------- | -------------------------------- | ------ |
| normal            | 정방향만 반복                    | normal |
| reverse           | 역방향만 반복                    |        |
| alternate         | 정방향에서 역방향으로 반복(왕복) |        |
| alternate-reverse | 역방향에서 정방향으로 반복(왕복) |        |



#### animation-fill-mode

애니메이션의 전후 상태(위치)를 설정

| 값        | 의미                                                         | 기본값 |
| --------- | ------------------------------------------------------------ | ------ |
| none      | 기존 위치에서 시작 -> 애니메이션 시작 위치로 이동 -> 동작 -> 기존 위치에서 끝 | none   |
| forwards  | 기존 위치에서 시작 -> 애니메이션 시작 위치로 이동 -> 동작 -> 애니메이션 끝 위치에서 끝 |        |
| backwards | 애니메이션 시작 위치에서 시작 -> 동작 -> 기존 위치에서 끝    |        |
| both      | 애니메이션 시작 위치에서 시작 -> 동작 -> 애니메이션 끝 위치에서 끝 |        |



#### animation-play-state

애니메이션의 재생과 정지를 설정

| 값      | 의미                   | 기본값  |
| ------- | ---------------------- | ------- |
| running | 애니메이션을 동작      | running |
| paused  | 애니메이션 동작을 정지 |         |



#### Multi-Columns

일반 블록 레이아웃을 확장하여 여러 텍스트 다단으로 쉽게 정리하며, 가독성 확보



#### columns

다단을 정의

| 값           | 의미                               | 기본값 |
| ------------ | ---------------------------------- | ------ |
| auto         | 브라우저가 단의 너비와 개수를 설정 | auto   |
| column-width | 단의 최적 너비를 설정              | auto   |
| column-count | 단의 개수를 설정                   | auto   |

```
columns: 너비 개수;
```

```css
.text {
	columns: 100px 2;
}
```



#### column-width

단의 최적 너비를 설정

| 값   | 의미                        | 기본값 |
| ---- | --------------------------- | ------ |
| auto | 브라우저가 단의 너비를 설정 | auto   |
| 단위 | px, em, cm 등 단위로 지정   |        |

```css
column-width: 너비;
```

> 각 단이 줄어들 수 있는 최적 너비(최소 너비)를 설정하며, 
>
> 요소의 너비가 가변하여 하나의 단이 최적 너비보다 줄어들 경우 단의 개수가 조정됩니다.



#### column-count

단의 개수를 설정

| 값   | 의미                        | 기본값 |
| ---- | --------------------------- | ------ |
| auto | 브라우저가 단의 개수를 설정 | auto   |
| 숫자 | 단의 개수를 설정            |        |

```css
column-count: 개수;
```



#### column-gap

단과 단 사이의 간격 설정

| 값     | 의미                                       | 기본값 |
| ------ | ------------------------------------------ | ------ |
| normal | 브라우저가 단과 단 사이의 간격을 설정(1em) | normal |
| 단위   | px, em, cm 등 단위로 지정                  |        |

``` css
column-gap: 간격;
```



#### column-rule

단과 단 사이의 (구분)선을 지정

| 값           | 의미             | 기본값               |
| ------------ | ---------------- | -------------------- |
| column-width | 선의 두께를 지정 | medium               |
| column-style | 선의 종류를 지정 | none                 |
| column-color | 선의 색상을 지정 | 요소의 글자색과 동일 |

```css
column-rule: 두께 종류 색상;
```

> 구분선(column-rule)은 단과 단 사이의 간격 중간에 위치합니다.



## CSS / 속성 - 플랙스



### Flex Container

속성 값

| 속성            | 의미                                                  |
| --------------- | ----------------------------------------------------- |
| display         | Flex Container를 정의                                 |
| flex-flow       | flex-direction과 flex-wrap의 단축 속성                |
| flex-direction  | flex items의 주 축(main-axis)을 설정                  |
| flex-wrap       | flex items의 여러 줄 묶음(줄 바꿈) 설정               |
| justify-content | 주 축(main-axis)의 정렬 방법을 설정                   |
| align-content   | 교차 축(cross-axis)의 정렬 방법을 설정(2줄 이상)      |
| align-items     | 교차 축(cross-axis)에서 items의 정렬 방법을 설정(1줄) |



#### display

| 값          | 의미                                | 기본값 |
| ----------- | ----------------------------------- | ------ |
| flex        | Block 특성의 flex container를 정의  |        |
| inline-flex | Inline 특성의 Flex container를 정의 |        |

flex와 inline-flex의 차이는 단순하다

display: flex; 로 지정된 Flex Container는 block 요소와 같은 성향(수직 쌓임)을 가짐

display: inline-flex로 지정된 Flex container는 inline(inline block) 요소와 같은 성향(수평 쌓임)을 가짐

 

#### flex-flow

단축속성으로 flex items의 주 축(main-axis)을 설정하고 items의 여러 줄 묶음(줄 바꿈)도 설정

```
flex-flow: 주축 여러줄묶음;
```

```css
.flex-contatiner {
  flex-flow: row-reverse warp;
}
```

| 값             | 의미                               | 기본값 |
| -------------- | ---------------------------------- | ------ |
| flex-direction | items의 주 축(main-axis)을 설정    | row    |
| flex-warp      | items의 여러 줄 묶음(줄 바꿈) 설정 | nowrap |



#### flex-direction

items의 주 축(main-axis)을 설정

| 값           | 의미                                         | 기본값 |
| ------------ | -------------------------------------------- | ------ |
| row          | items를 수평축(왼쪽에서 오른쪽으로)으로 표시 | row    |
| row-reverse  | items를 row의 반대 축으로 표시               |        |
| column       | items를 수직축(위에서 아래로)으로 표시       |        |
| column-rever | items를 column의 반대 축으로 표시            |        |



#### 주 축(main-axis)과 교차 축(cross-axis)

값 row는 items를 수평축으로 표시하므로 이때는 주축이 수평이고 교차축은 수직이 된다.

반대로 값 column은 items를 수직축으로 표시하므로 주 축은 수직이며 교차 축은 수평이 된다

즉, 방향에 따라 주 축과 교차 축이 달라진다

![이미지](https://heropy.blog/images/screenshot/css-flexible-box/flex-direction-main-axis.jpg)



#### 시작점(flex-start)과 끝점(flex-end)

이는 주 축이나 교차 축의 시작하는 지점과 끝나는 지점을 지칭함. 역시 방향에 따라 시작점과 끝점이 달라진다.

![이미지](https://heropy.blog/images/screenshot/css-flexible-box/flex-direction-main-start.jpg)



#### flex-wrap

items의 여러 줄 묶음(줄 바꿈)을 설정한다

| 값           | 의미                                           | 기본값 |
| ------------ | ---------------------------------------------- | ------ |
| nowrap       | 모든 items를 여러 줄로 묶지 않음(한 줄에 표시) | nowrap |
| wrap         | items를 여러 줄로 묶음                         |        |
| warp-reverse | items를 wrap의 역 방향으로 여러 줄로 묶음      |        |



#### justify-content

주 축(main-axis)의 정렬 방법을 설정합니다.

| 값            | 의미                                                         | 기본값     |
| ------------- | ------------------------------------------------------------ | ---------- |
| flex-start    | items를 시작점(flex-start)으로 정렬                          | flex-start |
| flex-end      | items를 끝점(flex-end)으로 정렬                              |            |
| center        | items를 가운데 정렬                                          |            |
| space-between | 시작 item은 시작점에, 마지막 item은 끝점에 정렬되고 나머지 items는 사이에 고르게 정렬됨 |            |
| space-around  | items를 균등한 여백을 포함하여 정렬                          |            |

![이미지](https://heropy.blog/images/screenshot/css-flexible-box/flex-justify-content.jpg)



#### align-content

교차 축(cross-axis)의 정렬 방법을 설정합니다.

주의할 점은 flex-wrap 속성을 통해  items가 여러 줄(2줄 이상)이고 여백이 있을 경우만 사용할 수 있습니다.

> items가 한 줄일 경우 align-items 속성을 사용하세요.

| 값            | 의미                                                         | 기본값  |
| ------------- | ------------------------------------------------------------ | ------- |
| stretch       | Container의 교차 축을 채우기 위해 items를 늘림               | stretch |
| flex-start    | items를 시작점으로 정렬                                      |         |
| flex-end      | items를 끝점으로 정렬                                        |         |
| center        | items를 가운데 정렬                                          |         |
| space-between | 시작 item은 시작점에, 마지막  item은 끝점에 정렬되고 나머지 items는 사이에 고르게 정렬됨 |         |
| space-around  | items를 균등한 여백을 포함하여 정렬                          |         |

 

#### align-items

교차 축(cross-axis)에서 items의 정렬 방법을 설정한다.

items가 한 줄일 경우에 많이 사용

주의할 점 : items가 flex-wrap을 통해 여러 줄(2줄 이상) 일 경우에는 align-content 속성이 우선한다

따라서 align-items를 사용하려면 align-content 속성을 기본값(stretch)으로 설정해야함

| 값         | 의미                                           | 기본값  |
| ---------- | ---------------------------------------------- | ------- |
| stretch    | container의 교차 축을 채우기 위해 items를 늘림 | stretch |
| flex-start | items를 각 줄의 시작점(flex-start)으로 정렬    |         |
| flex-end   | items를 각 줄의 끝점(flex-end)으로 정렬        |         |
| center     | items를 가운데 정렬                            |         |
| baseline   | items를 문자 기준선에 정렬                     |         |



### flex items

속성 값

| 속성        | 의미                                                |
| ----------- | --------------------------------------------------- |
| order       | flex item의 순서를 설정                             |
| flex        | flew-grow, flew-shrink, flew-flex-basis의 단축 속성 |
| flex-grow   | flex item의 증가 너비 비율을 설정                   |
| flex-shrink | flex item의 감소 너비 비율을 설정                   |
| flex-basis  | flex item의 기본 너비 설정                          |
| align-self  | 교차 축(cross-axis)에서 item의 정렬 방법을 설정     |



#### order

item의 순서를 설정

숫자가 클수록 순서가 밀린다. 음수도 허용됨

| 값   | 의미               | 기본값 |
| ---- | ------------------ | ------ |
| 숫자 | item의 순서를 설정 | 0      |



#### flex-grow

item의 증가 너비 비율을 설정

숫자가 크면 더 많은 너비를 가진다

| 값   | 의미                         | 기본값 |
| ---- | ---------------------------- | ------ |
| 숫자 | item의 증가 너비 비율을 설정 | 0      |



#### flex-shrink

item이 감소하는 너비의 비율을 설정한다

숫자가 크면 더 많은 너비가 감소한다

| 값   | 의미                         | 기본값 |
| ---- | ---------------------------- | ------ |
| 숫자 | item의 감소 너비 비율을 설정 | 1      |



#### flex-basis

item의 기본 너비를 설정

값이  auto일 경우  width, height 등의 속성으로 item의 너비를 설정할 수 있다

하지만 단위 값이 주어진 경우 설정할 수 ㅇ벗다

| 값   | 의미                      | 기본값 |
| ---- | ------------------------- | ------ |
| auto | 가변 item과 같은 너비     | auto   |
| 단위 | px, em, cm 등 단위로 지정 |        |



#### flex

item의 너비(증가, 감소, 기본)를 설정하는 단축 속성

| 값          | 의미                                 | 기본값 |
| ----------- | ------------------------------------ | ------ |
| flex-grow   | item의 증가 너비 비율을 설정         | 0      |
| flex-shrink | item의 갑소 너비 비율을 설정         | 1      |
| flex-basis  | item의 (공간 배분 전) 기본 너비 설정 | auto   |



#### align-self

교차 축(cross-axis)에서 개발 item의 정렬 방법을 설정함

align-items는 container내 모든 items의 정렬 방법을 설정함

필요에 의해 일부 item만 정렬 방법을 변경하려고 할 경우 align-self를 사용할 수 있음

이 속성은 align-items 속성보다 우섢나다

| 값         | 의미                                          | 기본값 |
| ---------- | --------------------------------------------- | ------ |
| auto       | container의 align-items 속성을 상속받음       | auto   |
| stretch    | container의 교차 축을 채우기 위해 item을 늘림 |        |
| flex-start | item을 각 줄의 시작점(flex-start)으로 정렬    |        |
| flex-end   | item을 각 줄의 끝점(flex-end)으로 정렬        |        |
| center     | item을 가운데 정렬                            |        |
| baseline   | item을 문자 기준선에 정렬                     |        |



## CSS/ 속성 - Grid

CSS Grid(그리드)는 2차원(행과 열)의 레이아웃 시스템을 제공한다.

Flexible Box도 훌륭하지만 비교적 단순한 1차원 레이아웃을 위하며, 좀 더 복잡한 레이아웃을 위해 CSS Grid를 사용한다

| 속성              | 의미                                                       |
| ----------------- | ---------------------------------------------------------- |
| grid-row-start    | 그리드 아이템(item)의 행 시작 위치 지정                    |
| grid-row-end      | 그리드 아이템의 행 끝 위치 지정                            |
| grid-row          | grid-row-xxx의 단축 속성                                   |
| grid-column-start | 그리드 아이템의 열 시작 위치 지정                          |
| grid-column-end   | 그리드 아이템의 열 끝 위치 지정                            |
| grid-column       | grid-colunm-xxx의 단축 속성                                |
| grid-area         | 영역 이름을 설정하거나, grid-row와 grid-column의 단축 속성 |
| align-self        | 단일 그리드 아이템을 수직 정렬                             |
| justify-self      | 단일 그리드 아이템을 수평 정렬                             |
| place-self        | align-self와 justify-self의 단축 속성                      |
| order             | 그리드 아이템의 배치 순서를 지정                           |
| z-index           | 그리드 아이템의 쌓이는 순서를 지정                         |



### Grid Containers

#### display

Grid Container(컨테이너)를 정의한다.

정의된 컨테이너의 자식 요소들은 자동으로 Grid Items로 정의된다

> 그리드를 사용하기 위해서 컨테이너에 필수로 작성해야한다.

| 값          | 의미                                |
| ----------- | ----------------------------------- |
| grid        | Block 특성의 Grid Container를 정의  |
| inline-grid | Inline 특성의 Grid Container를 정의 |

```css
.container {
  display : grid;
}
```

 

#### grid-template-row

명시적 행의 크기를 정의

동시에 라인의 이름으로 정의하고 단위는  fr을 사용한다. repeat 함수를 사용 할 수 있음

사용 방법은 grid-template-columns 와 같다

```css
.container {
  display: grid;
  grid-template-rows: 1행크기 2행크기 ...;
  grid-template-rows: [선이름] 1행크기 [선이름] 2행크기 [선이름] ...;
}
```

```css
/* 각 행의 크기를 정의합니다. */
.container {
  grid-template-rows: 100px 200px;
}
/* 동시에 각 라인의 이름도 정의할 수 있습니다. */
.container {
  grid-template-rows: [first] 100px [second] 200px [third];
}
/* 라인에 중복된 이름을 지정할 수 있습니다. */
.container {
  grid-template-rows: [row1-start] 100px [row1-end row2-start] 200px [row2-end];
}
```

각 라인은 행과 열의 개수대로 숫자 라인 이름이 자동으로 지정되어 있어서, 꼭 필요한 경우가 아니면 라인 이름을 정의할 필요가 없다.

```css
.container {
  grid-template-rows: 100px 200px;
  /* grid-template-rows: [1 -3] 100px [2 -2] 200px [3 -1]; */
}
```

```css
.container {
  width: 400px;
  display: grid;
  grid-template-rows: repeat(3, 100px);
  grid-template-columns: repeat(3, 1fr);
}
```

![이미지](https://heropy.blog/images/screenshot/css-grid/grid-template-rows-1.jpg)



#### grid-template-column

명시적 열의 크기를 정의, 동시에 라인 이름도 정의하며  단위는 fr 그리고 repeat 함수를 사용 가능하다

> 사용 방법은 grid-template-rows 와 같다
>



#### grid-template-areas

지정된 그리드 영역 이름을 참조해 그리드 템플릿을 생성

> grid-area는 grid container가 아닌 grid item에 적용하는 속성입니다

```css
.container {
  display: grid;
  grid-template-rows: repeat(3, 100px);
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    "header header header"
    "main main aside"
    "footer footer footer";
}
header { grid-area: header; }
main   { grid-area: main;   }
aside  { grid-area: aside;  }
footer { grid-area: footer; }
```

![CSS Grid](https://heropy.blog/images/screenshot/css-grid/grid-template-areas-1.jpg)



.(마침표)를 사용하거나 명시적으로 none을 입력해서 민 영역을 정의 할 수도 있다.

```css
.container {
  display: grid;
  grid-template-rows: repeat(4, 100px);
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    "header header header"
    "main . ."
    "main . aside"
    "footer footer footer";
}
header { grid-area: header; }
main   { grid-area: main;   }
aside  { grid-area: aside;  }
footer { grid-area: footer; }
```

![이미지](https://heropy.blog/images/screenshot/css-grid/grid-template-areas-2.jpg)



#### grid-template

grid-template-row, grid-template-columns 그리고 grid-template-areas의 단축 속성

```css
.container {
  grid-template: <grid-template-rows> / <grid-template-columns>;
  grid-template: <grid-template-areas>;
}
```

아래 처럼 작성도 가능하다

```css
.container {
  grid-template:
    [1행시작선이름] "AREAS" 행너비 [1행끝선이름]
    [2행시작선이름] "AREAS" 행너비 [2행끝선이름]
    / <grid-template-columns>;
}
```



```css
.container {
  display: grid;
  grid-template:
    "header header header" 80px
    "main main aside" 350px
    "footer footer footer" 130px
    / 2fr 100px 1fr;
}
header { grid-area: header; }
main   { grid-area: main; }
aside  { grid-area: aside; }
footer { grid-area: footer; }
```

```css
.container {
  display: grid;
  grid-template-rows: 80px 350px 130px;
  grid-template-columns: 2fr 100px 1fr;
  grid-template-areas:
    "header header header"
    "main main aside"
    "footer footer footer";
}
```



#### row-gap(grid-row-gap)

각 행과 행 사이의 간격(gutter)을 지정한다

- 더 명확하게는 그리드 선(Grid Line)의 크기를 지정한다

```css
.container {
  row-gap: 크기;
}
```



#### column-gap(grid-column-gap)

각 열과 열 사이의 간격(Gutter)을 지정한다.

```
.container {
	column-gap: 크기;
}
```



#### gap(grid-gap)

각 행과 행, 열과 열 사이의 간격을 지정한다

row-gap와 column-gap의 단축 속성

```css
.container {
  gap: <grid-row-gap> <grid-column-gap>;
}
```

```css
.container {
  display: grid;
  grid-template-rows: repeat(2, 150px);
  grid-template-columns: repeat(3, 1fr);
  gap: 20px 10px;
}
 
.container {
  gap: 10px;
}

.container {
  gap: 10px 0;
  gap: 0 10px;
}
```



#### grid-auto-rows

*암시적 행(Track)*의 크기를 정의한다.

아이템이 grid-template-rows로 정의한 명시적 행 외부에 배치되는 경우 암시적 행의 크기가 적용된다.

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

```css
.container {
  width: 300px;
  height: 200px;
  display: grid;
  grid-template-rows: 100px 100px;
  grid-tempalte-columns: 150px 150px;
  gird-auto-rows: 100px;
}

.item:nth-child(3) {
  grid-row: 3 / 4;
}
```



#### grid-auto-columns

암시적 열의 크기를 정의한다

아이템이 grid-template-columns로 정의한 명시적 열 외부에 배치되는 경우 암시적 열의 크기가 자동 적용

```css
.container {
  width: 300px;
  height: 200px;
  display: grid;
  grid-template-rows: 100px 100px;
  grid-template-columns: 150px 150px;
  grid-auto-rows: 100px;
  grid-auto-columns: 100px;
}

.item:nth-child(3) {
  grid-row: 3 / 4;
  grid-columns: 3 / 4;
}
```



grid-auto-rows, grid-auto-columns로 암시적 크기가 적용되면 행과 열은 양수 라인 번호만 사용 가능하다 (음수 사용 불가)



#### grid-auto-flow

배치하지 않은 아이템을 어떤 방식의 '자동 배치 알고리즘'으로 처리할 것인지 정의

> 배치한 아이템은 grid-area를 사용한 아이템을 의미한다

| 값           | 의미                                       | 기본값 |
| ------------ | ------------------------------------------ | ------ |
| row          | 각 행 축을 따라 차례로 배치                | row    |
| column       | 각 열 축을 따라 차례로 배치                |        |
| row dense    | 각 행 축을 따라 차례로 배치, 빈 영역 메움! |        |
| column dense | 각 열 축을 따라 차례로 배치, 빈 영역 메움  |        |



row 예제

```css
.container {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: row || row dense || dense;
}

.item:nth-child(2) {
  grid-column: span 3;
}
```

![이미지](https://heropy.blog/images/screenshot/css-grid/grid-auto-flow-1.jpg)



columns 예제

```css
.container {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: column || column dense;
}

.item:nth-child(1) {
  grid-column: 2 / span 2; 
}

.item:nth-child(2) {
  grid-column: span 2;
}
```

![image](https://heropy.blog/images/screenshot/css-grid/grid-auto-flow-2.jpg)

 

#### align-content

그리드 콘텐츠를 수직 정렬한다

그리드 콘텐츠의 세로 너비가 그리드 컨테이너보다 작아야한다

| 값            | 의미                                                         | 기본값 |
| ------------- | ------------------------------------------------------------ | ------ |
| normal        | stretch와 같음                                               | normal |
| start         | 시작점 정렬                                                  |        |
| center        | 수직 가운데 정렬                                             |        |
| end           | 끝점(아래쪽) 정렬                                            |        |
| space-around  | 각 행 위아래에 여백으르 고르게 설정                          |        |
| space-between | 첫 행은 시작점에, 끝 행은 끝점에 정렬되고 나머지 여백으로 고르게 정렬 |        |
| space-evenly  | 모든 여백을 고르게 정렬                                      |        |
| stretch       | 열 축을 채우기 위해 그리드 콘텐츠를 늘림                     |        |

![이미지](https://heropy.blog/images/screenshot/css-grid/align-content-1.jpg)



#### justify-content

그리드 콘텐츠를 수평 정렬한다

그리드 콘텐츠의 가로 너비가 그리드 컨테이너보다 작아야한다

| 값            | 의미                                                         | 기본값 |
| ------------- | ------------------------------------------------------------ | ------ |
| normal        | stretch                                                      | normal |
| start         | 시작점 정렬                                                  |        |
| center        | 수평 가운데 정렬                                             |        |
| end           | 끝점 정렬                                                    |        |
| space-around  | 각 열 좌우에 여백을 고르게 설정                              |        |
| space-between | 첫 열은 시작점에, 끝 열은 끝점에 정렬되고 나머지 여백으로 고르게 정렬 |        |
| space-evenly  | 모든 여백을 고르게 정렬                                      |        |
| stretch       | 행 축을 채우기 위해 그리드 콘텐츠를 늘림                     |        |

![img](https://heropy.blog/images/screenshot/css-grid/justify-content-1.jpg)

