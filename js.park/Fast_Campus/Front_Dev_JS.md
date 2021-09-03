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





