# React



## React tutorial

### JSX

```react
import React from 'react';
import Hello from './Hello'; // 컴포넌트 이름의 시작은 항상 대문자

function App() {
  return (
  	<div>
      <Hello />
      <Hello />
      <Hello />
    </div> // HTML처럼 보이지만 Babel이라는 도구를 사용해 변환한 JavaScript 코드 이다
  )
}
```

위처럼 JSX를 사용하기 위해서는 몇가지 규칙을 준수해야한다.

- 태그는 무조건 닫혀있어야한다. \<div> ~~\</div>~~ 
- 만약 \<input> 같은 닫는 태그가 없는 것을 사용한다면 \<input /> 이렇게 사용해야함
- 2개 이상의 태그는 부요 요소가 있어야한다. 만약 사용하기 까다로운 상황이라면 \<> \</> 라는 플래그먼트를 넣어주면 된다
  - 이 태그는 개발자도구로 확인하면 태그가 보이지 않는다



```react
import React from 'react';
import Hello from './Hello'; 

function App() {
  const name = 'react'
  return (
  	<>
    	<Hello />
    	<div>{name}</div>
    </>
  )
}
```

JSX 내부에서 JS의 값을 출력하고 싶다면 변수이름 옆에 중괄호를 씌워준다 {name}



HTML에서처럼 CSS를 태그에 직접 적용 할 수 없다

```react
import React from 'react';
import Hello from './Hello'; 

function App() {
  const name = 'react'
  const style = {
    backgroundColor: 'black', // 원래 CSS에서는 background-color로 표기하지만 카멜케이스 문법을 사용해야함
    color: 'aqua',
    fontSize: 24, // 단위 명시가 없을 시 px가 기본
    padding: '1rem' // 단위 명시가 필요하면 ''를 사용해서 지정
  }
  return (
  	<>
    	<Hello />
    	<div style={style}>{name}</div> // 스타일 지정 방법
    </>
  )
}
```



다른 방법으로는 CSS파일을 Import 시키는 방법이다. 위의 코드와 아래 코드는 같은 동작을 하는 코드이다

```css
/* App.css */
.div {
  	backgroundColor: 'black', 
    color: 'aqua',
    fontSize: 24,
    padding: '1rem' 
}
```

```react
// App.js
import React from 'react';
import Hello from './Hello'; 
import 'App.css'

function App() {
  const name = 'react'
  return (
  	<>
    	<Hello />
    	<div>{name}</div> // 스타일 지정 방법
    </>
  )
}
```



### props를 통해 컴포넌트에게 값 전달

```react
// App.js
import React from 'react';
import Hello from './Hello'; 


function App() {
  const name = 'react'
  return (
  	<Hello name="react" />
  )
}
```

```react
// Hello.js
import React from 'react';

function Hello(props) {
  return (
  	<div>안녕하세요 {props.name}</div> // props.name은 App.js에서 받아온 react라는 값을 담고 있다.
  )
}
```



### 조건부 렌더링

특정 조건에 따라서 다른 값을 렌더링하는 것

 

