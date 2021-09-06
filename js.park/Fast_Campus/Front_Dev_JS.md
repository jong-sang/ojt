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



