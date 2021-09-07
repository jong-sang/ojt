# JavaScript

기본적인 문법에 대해서는 충분히 숙지하고 있기에 유용한 내용 위주로 정리한다



## 배열 내장 함수

배열을 다룰 때 유용한 내장 함수들에 대해서 알아보자



### forEach

기존에 사용하던 for 문을 대체 시킬 수 있는 내장 함수

```js
const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지']
```

위의 배열 안의 원소들을 모두 출력해야 할 때 for 을 사용하면 length를 이용해서 구현이 가능하지만 foreach를 사용하면 더 간단하게 가능

```js
const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지']

superheroes.forEach(hero => {
  console.log(hero);
})
```



### map

배열 안의 각 원소를 변환 할 때 사용되며 이 과정에서 새로운 배열이 만들어짐

```js
const array = [1, 2, 3, 4, 5, 6, 7, 8];
```

위의 배열이 존재할 때 모든 숫자를 제곱해서 새로운 배열을 만들고 싶다면 map함수를 사용하지 않는다면 아래와 같이 구현이 가능하다

```js
const array = [1, 2, 3, 4, 5, 6, 7, 8];

const squared = [];
for (let i = 0; i < array.length; i++) {
  squared.push(array[i] * array[i]);
}

console.log(squared);
```

위의 forEach를 사용하면 아래처럼 구현이 가능하다

```js
const array = [1, 2, 3, 4, 5, 6, 7, 8];

const squared = [];

array.forEach(n => {
  squared.push(n*n);
});

console.log(squared);
```

그러나 map 함수를 이용하면 더 쉽게 구현이 가능하다.

```js
const array = [1, 2, 3, 4, 5, 6, 7, 8];

const square = n => n*n;
const squared = array.map(square);

console.log(squared);
```

3가지 코드 모두 같은 결과가 출력된다.

map 함수의 파라미터로는 변화를 주는 함수를 전달해준다. 이를 변화함수라고 부른다

그리고 변화 함수는 꼭 이름을 붙여서 사용하지 않아도 된다

```js
const squared = array.map(n => n*n);
console.log(squared)
```



### indexOf

배열에서 원하는 항목이 몇번째 원소인지 찾아주는 함수

```js
const superheros = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];
const index = superheros.indexOf('토르');
console.log(index)
```

결과는 2를 출력한다

0:아이언맨, 1:캡틴 아메리카, 2:토르 순으로 출력되어 2라는 값을 출력



### findIndex

배열 안에 있는 값이 객체이거나, 배열이라면 indexOf로 찾을수 없다. 그럴때 findIndex함수를 사용하면 된다

```js
const todos = [
  {
    id: 1,
    text: '자바스크립트 입문',
    done: true
  },
  {
    id: 2,
    text: '함수 배우기',
    done: true
  },
  {
    id: 3,
    text: '객체와 배열 배우기',
    done: true
  },
  {
    id: 4,
    text: '배열 내장함수 배우기',
    done: false
  }
];

const index = todos.findIndex(todo => todo.id === 3);
console.log(index);
```

배열은 0번부터 시작이니 결과값으로 2가 출력된다



### find

find 함수는 findIndex와 유사하지만 찾아낸 값 그 자체를 반환한다

```js
const todos = [
  {
    id: 1,
    text: '자바스크립트 입문',
    done: true
  },
  {
    id: 2,
    text: '함수 배우기',
    done: true
  },
  {
    id: 3,
    text: '객체와 배열 배우기',
    done: true
  },
  {
    id: 4,
    text: '배열 내장함수 배우기',
    done: false
  }
];

const todo = todos.find(n => n.id === 3)
```

결과는 아래와 같다

```json
{id:3, text: "객체와 배열 배우기", done: true}
```



### filter

filter 함수는 배열에서 특정 조건을 만족하는 값들만 따로 추출하여 새로운 배열 생성

아래 코드는 우리가 방금 만들었던 todos 배열에서 done 값이 false 인 항목들만 따로 추출하는 코드이다.

```js
const todos = [
  {
    id: 1,
    text: '자바스크립트 입문',
    done: true
  },
  {
    id: 2,
    text: '함수 배우기',
    done: true
  },
  {
    id: 3,
    text: '객체와 배열 배우기',
    done: true
  },
  {
    id: 4,
    text: '배열 내장함수 배우기',
    done: false
  }
];

const tasksNotDone = todos.filter(n => n.done === 'false')
```

결과 값은 아래와 같다.

```json
[
  {
    id:4,
    text: '배열 내장 함수 배우기',
    done: false
  }
];
```



### splice

splice 는 배열에서 특정 항목을 제거할 때 사용한다.

```js
const numbers = [10,20,30,40];
```

위 배얼에서 30을 지운다고 가정하면 30이 몇번째 index인지 알아낸 후, 이를 splice를 통해서 지워줄 수 있다.

```js
const numbers = [10, 20, 30, 40];
const index = numbers.indexOf(30);
numbers.splice(index,1);
console.log(numbers);
```

위와 같은 코드를 작성하고 결과 값을 확인하면

```
[10, 20, 40]
```

splice를 사용 할 때 첫번째 파라미터는 어떤 인덱스부터 지울지를 의미하고 두번째 파라미터는 그 인덱스부터 몇개를 지울 것인지 의미한다.



### slice

slice는 splice와 매우 유사하다. 배열을 잘라낼 때 사용하지만 기존의 배열은 건들지 않는다는 것이 특징이다.

```js
const numbers = [10, 20, 30, 40];
const sliced = number.slice(0,2);

console.log(sliced); // [10, 20]
console.log(numbers); // [10, 20, 30, 40]
```

slice에는 두개의 파라미터를 넣게 되는데 첫번째 파라미터는 어디서부터 자를지, 그리고 두번째 파라미터는 어디까지 자를지를 의미한다.



### shift & pop

shift 와 pop 는 비슷하지만 다르다

shift는 첫번째 원소를 배열에서 추출한다. (추출하는 과정에서 배열에서 해당 원소는 사라진다.)

```js
const numbers = [10, 20, 30, 40];
const value = numbers.shift();
console.log(values); // 10
console.log(numbers); // [20, 30, 40]
```



이번에는 pop를 사용 하면 아래처럼 출력이 된다

```js
const numbers = [10, 20, 30, 40];
const value = numbers.pop();
console.log(value); // 40
console.log(numbers); // [10, 20, 30]
```

pop 은 push의 반대라고 생각하면 된다. push 는 배열의 맨 마지막에 새 항목을 추가하고, pop 는 가장 마지막 항목을 추출한다.



### unshift

unshift 는 shift의 반대 개념이다

배열의 맨 앞에 새 원소를 추가한다

```js
const numbers = [10, 20, 30, 40];
numbers.unshift(5);
console.log(numbers) // [5, 10, 20, 30, 40]
```



### concat

concat 은 여러개의 배열을 하나의 배열로 합쳐준다.

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concated = arr1.concat(arr2);

console.log(concated) // [1,2,3,4,5,6]
```

또한 concat은 기존 배열에 영항을 주지 않는다.



### join

join 은 배열 안의 값들을 문자열 형태로 합쳐준다.

```js
const array = [1, 2, 3, 4, 5];
console.log(array.join()); // 1,2,3,4,5
console.log(array.join(' ')) // 1 2 3 4 5
console.log(array.join(', ')) // 1, 2, 3, 4, 5
```



### reduce

잘 사용하면 정말 유용한 내장함수. 만약 주어진 배열에 대하여 총합을 구하는 코드를 작성한다면 아래처럼 작성할 것이다.

```js
const numbers = [1, 2, 3, 4, 5];

let sum = 0;
numbers.forEach(n => {
  sum += n;
});

console.log(sum); // 15
```

여기서 sum을 계산하기 위해서 사전에  sum을 선언하고, forEach 문으로 계속해서 덧샘을 하는 방식으로 구현.

하지만 reduce를 사용하면 아래처럼 구현이 가능하다

```js
const numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, cur) => acc + cur, 0);

console.log(sum);
```

reduce는 총 4개의 파라미터를 받는데 생략 가능하다

위에서는 2개의 파라미터를 전달했는데 첫번째 파라미터는 acc와 cur를 파라미터로 가져와서 결과를 반환하는 콜백함수

두번째는 reduse 함수에서 사용 할 초기 값이다.

이를 이용해서 평균 값도 계산이 가능하다

```js
const numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, cur, index, arr) => {
  if(index === arr.length -1) {
    return (arr + cur) / arr.length;
  }
  return acc + cur;
}, 0)

console.log(sum); // 3
```

위 코드에서 reduce 에서 사용한 콜백함수에서는 추가 파라미터로  index 와 arr를 받아왔다.

index는 현제 처리하고 있는 항목이 몇번째인지를 가르키고, array 는 현재 처리하고 있는 배열 자신을 의미한다.



## 알고있으면 유용한 JS 문법

### 삼항연산자

```js
condition ? test = 1 : test = 2
```

condition 이라는 변수 값이 true면 test=1 이라는 코드가 실행되고 false라면 test=2 라는 코드가 실행 된다

```js
const arr = [];
let text = '';
if (arr.length === 0) {
  text = "배열이 비어있습니다.";
} else {
  text = "배열이 비어있지 않습니다.";
}

console.log(text); // 배열이 비어있습니다.
```

위의 코드를 삼항연산자를 사용하면 더 간결하고 쉽게 사용이 가능하다

```js
const arr = [];
let text = arr.length === 0 
	? "배열이 비어있습니다." 
	: "배열이 비어있지 않습니다."

console.log(text) // 배열이 비어있습니다.
```

한 줄이 길어진다 생각되면 위 처럼 개행 처리해서 사용도 가능하다

또한 여러개의 삼항연산자 사용도 가능하다

```js
const con1 = false;
const con2 = false;

const value = con1 
	? '와우!'
	: con2
		? 'blabla'
		: 'foo'

console.log(value) // foo
```

이렇게 사용이 가능하지만 오히려 코드의 파악이 더 힘들 수 있음으로 if else 구문을 사용하는 것이 좋다



### Truthy & Falsy

문법보다는 개념에 가까움

```js
console.log(!undefined); // true
console.log(!null); // true
console.log(!0); // true
console.log(!''); // true
console.log(!NaN); // true
console.log(!false); // true

falsy 거짓 같은 것 정도로 이해하면 됨
```

마찬가지로 truthy도 이것과 유사하다

```js
console.log(!3); // false
console.log(!'hello'); // false
console.log(!['arr']); // false
console.log(![]); // false
console.log(!{}); // false

truthy 참 같은 것 정도
```



### 단축 평가 논리 계산법

논리 연산자로 코드를 더 짧게 작성하는 것

```js
console.log(true && 'hello') // hello
console.log('false' && 'hello') // false
console.log('hello' && 'bye') // bye
console.log(null && 'hello') // null
```

&& 연산 할 때 앞에 truthy 값이 존재한다면 무조건 뒤의 값이 출력된다

반대로 && 연산 앞에 falsy 값이 존재한다면 뒤의 값을 확인하지 않고 falsy 값을 출력한다



### 함수의 기본 파라미터

함수 선언 시 파라미터 값을 전달 해야할 때 그 값이 존재하지 않으면 falsy한  값을 리턴한다

이런 상황을 방지하기 위해서 값이 없을 때 초기값을 설정할 수 있는데 ES6 문법에서는 아래처럼 선언이 가능하다

```js
function calculateCircleArea(r =  1) {
  return Math.PI * r * r;
}

const area = calculateCircleArea();
console.log(area) // 3.141592....
```

화살표 함수로도 구현이 가능하다

```js
const calculateCircleArea = (r = 1) => Math.PI * r * r

const area = calculateCircleArea();
console.log(area) // 3.141592....
```



### 조건문 더 스마트하게 사용하기

```js
function isAnimal(text) {
  return (
  	text === '고양이' || text === '개' || text === '거북이' || text === '너구리'
  );
}

console.log(isAnimal('개')) // true
console.log(isAnimal('노트북')) // false
```

위와 같이 조건이 길어지면 리턴 코드가 매우 길어진다

```js
const isAnimal = (text) => ['고양이','개','거북이','너구리'].includes(text);

function isAnimal(text) {
  const animals = ['고양이','개','거북이','너구리'];
  return animals.includes(text)
}
```

위의 두가지 방법으로 같은 기능을 하는 코드를 작성 할 수 있다.

물론 코드가 짧다고 다 좋은건 아니고 짧으면서도 이해하기 쉬운 방법이 가장 좋다.

또한 조건에 따라 행동을 다르게 해야한다면 객체를 이용해서 사용하는 것도 방법이다.

```js
function getSound(animal) {
  const sounds = {
    개: '멍멍',
    고양이 : '야옹',
    참새: '짹짹',
    비둘기: '구구 구 구'
  };
  return sounds[animal] || '...?';
}

console.log(getSound('개')); // 멍멍
console.log(getSound('고양이')); // 야옹
console.log(getSound('인간')); // ...?
```



### 비구조화 활당

```js
const object = { a: 1, b: 2};
const { a, b } = object
console.log(a);
console.log(b);
```

이렇게도 사용이 가능하다

```js
const object = { a: 1, b: 2};

function print({ a, b }) {
  console.log(a);
  console.log(b);
}

print(object)
```

그리고 또 값이 없을 경우를 위해서 초기값을 설정 할 수 있는데 이렇게 설정도 가능하다

```js
const object = { a: 1 };

function print({ a, b = 2 }) {
  console.log(a);
  console.log(b);
}

print(object)
```

다음은 비구조화 할당 시 이름을 바꾸는 방법이다

```js
const animal = {
  name : '멍멍이',
  type: '개'
}

const { name: nickname } = animal;
console.log(nickname);
```

그리고 배열 또한 이러한 방법으로 할당이 가능한데 이번에는 [ ] (대괄호)를 사용하면 된다

```js
const arr = [1, 2];
const [one, two] = arr;

console.log(one);
console.log(two);
```

마찬가지로 초기값도 설정이 가능하다

```js
const arr = [1];
const [one, two = 2] = arr;

console.log(one);
console.log(two);
```



이번에는 깊은 곳에 저장된 값을 꺼낼때 사용하는 방법이다

```js
const deepObject = {
  state: {
    information: {
      name: 'velopert',
      languages: ['korean', 'english', 'chinese']
    }
  },
  value: 5
}

const { name, languages } = deepObject.state.information;
const { value } = deepObject;

const extracted = {
  name, // name: name 과 같은 의미, 키값과 벨류값의 이름이 같으면 이렇게 생략이 가능하다
  languages,
  value
}

console.log(extracted)
```

다른 방법으로 한번에 추출 가능 ( 내 기준에서는 이게 더 어려움 )

```js
const deepObject = {
  state: {
    information: {
      name: 'velopert',
      languages: ['korean', 'english', 'chinese']
    }
  },
  value: 5
}

const {
  state: {
    information: {
      name, languages
    }
  },
  value
} = deepObject;

const extracted = {
  name, // name: name 과 같은 의미, 키값과 벨류값의 이름이 같으면 이렇게 생략이 가능하다
  languages,
  value
}

console.log(extracted)
```



### spread 연산자

```js
const slime = {
  name: '슬라임'
};

const cuteSlime = {
  ...slime, // ...은 하나의 연산자 -> spread라는 연산자를 의미 -> 배열의 값을 그대로 복사해온다
  attribute: 'cute'
};

const purpleCuteslime = {
  name: '슬라임',
  attribute: 'cute',
  color: 'purple'
};
```

이렇게 사용하면 원본  slime의 값은 그대로이다

즉 slime != cuteSlime 가 된다. 배열을 복사하여 사용한다 라는 의미



### rest

...연산자는 동일하지만 그 역활이 좀 다르다

```js
const purpleCuteslime = {
  name: '슬라임',
  attribute: 'cute',
  color: 'purple'
};

const { color, ...rest } = purpleCuteslime;
console.log(color) // purple
console.log(rest) // name: '슬라임', attribute: 'cute'
```

비 구조화 할당 시  color 값을 제외한 나머지 값들이 rest에 추출되어 저장되는 모습이 확인 가능하다.

마찬가지로 배열에서도 사용가능하다

```js
const numbers = [0, 1, 2, 3, 4, 5, 6];

const [one, ...rest] = numbers; // const [ ...rest, last ] = numbers; 이렇게는 사용이 불가능하다
console.log(one); // 0
console.log(rest); // [1,2,3,4,5,6]
```



### scope

scope에는 3종류가 있다. Global, Function, Block

이는 다른 언어에서 전역 변수, 지역 변수의 개념으로 이해하면 된다

```js
const value = 'hello!';

function myFunction() {
  const value = 'bye!';
  const anotherValue = 'world';
  function functionInside() {
    console.log('functionInside :');
    console.log(value); // bye
    console.log(anotherValue) // world
  }
  functionInside();
}

myFunction();
console.log('global scope');
console.log(value); // hello
console.log(anotherValue); // not definded
```



### hoisting

아직 선언되지 않은 함수, 변수 등을 끌어올려서 사용하는 개념

```js
myFunction();

function myFunction() {
  console.log('hello world');
}
```

위와 같이 작성해도 자바스크립트에서는 동작을 한다.

다른 언어 (C, Golang, Python 등)에서는 작동하지 않는다

가능은 하지만 가급적 사용하면 안된다. 코드 읽기가 힘들다



## 비동기 처리 다루기

### 비동기 처리

```js
function work() {
  setTimeout(() => {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {

    }
    const end = Date.now();
    console.log(end-start+'ms');
  },0) 
}

console.log('작업시작');
work();
console.log('작업끝');
```

위 코드를 실행하면 원래의 코드흐름은 '작업시작' - > work() - > 작업끝 순서대로 한줄식 시작하게 되지만 비동기 처리로 work 함수는 백그라운드에서 작업이 되고 종료 수 반환한다. 흐름은 같지만 백그라운드에서 작업하는 동안 다음 코드를 실행시켜 '작업시작' - '작업끝' - work() 순으로 진행된다



### Promise

비동기 작업을 좀 더 편하게 처리하기 위해서 ES6부터 추가 됨

callback 함수의 단점인 가독성 부분을 처리

```js
function increaseAndPrint(n, callback) {
  setTimeout(() => {
    const increased = n + 1;
    console.log(increased);
    if (callback) {
      callback(increased);
    }
  }, 1000)
}

increaseAndPrint(0, n => {
  increaseAndPrint(n, n => {
    increaseAndPrint(n, n => {
      increaseAndPrint(n, n => {
        increaseAndPrint(n, n => {
          console.log('작업 끝')
        })
      })
    })
  })
})
```

위처럼 콜백 함수를 많이 사용해야하면 코드를 보기만해도 현기증이 남

이러한 부분을 해결하기 위해서 Promise가 등장

```js
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  },1000)
});

myPromise.then(result => {
  console.log(result);
}).cateh(e => {
  console.error(e);
})
```



### async, await

```js
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve,ms));
}

async function process() {
  console.log('안녕하세요!');
  await sleep(1000);
  console.log('반갑습니다!');
  
  return true;
}
// 이렇게 사용하면 return값으로 promise를 반환하여 .then을 이어서 사용 가능함

process.then(value => {
  console.log(value)
})
```

 

### Promise all

```js
const getDog = async () => {
  await sleep(1000);
  return '멍멍이'
}

const getRabbit = async () => {
  await sleep(500);
  return '토끼'
}

const getTurtle = async () => {
  await sleep(3000);
  return '거북이'
}

async function preocss() {
  const result = await Promise.all([getDog(),getRabbit(),getTurtle()]);
  // 3가지 프로미스가 모두 끝났을때 모든 값을 배열로 리턴한다
  // result = ['멍멍이','토끼','거북이']
}
```



### Promise.race

```js
const getDog = async () => {
  await sleep(1000);
  return '멍멍이'
}

const getRabbit = async () => {
  await sleep(500);
  return '토끼'
}

const getTurtle = async () => {
  await sleep(3000);
  return '거북이'
}

async function preocss() {
  const result = await Promise.race([getDog(),getRabbit(),getTurtle()]);
  // 3가지 프로미스 중 가장 먼저 끝난 값을 리턴한다
  // 여기서 토끼가 0.5초로 가장 빠르니 토끼가 리턴된다
}
```

