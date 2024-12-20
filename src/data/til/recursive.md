---
title: 재귀 함수
description: 재귀 함수
date: 2024-12-21
category: Algorithm
tags:
  - 재귀 함수
lang: ko
draft: true
---


재귀 함수는 절대로 이해하려고 하면 안되는 것 같다.

그냥 나만의 원칙만 지켜서 구현하면 신기할 정도로 모든게 맞아 떨어진다.

핵심은 다음과 같다.

1. 재귀 함수는 항상 인자를 전달받고, 종료 조건을 가진다.
2. 최초 호출 시에는 초기 값을 인자로 전달 받으며, 함수 내부에서 다시 호출될 때 종료 조건에 가까워지도록 업데이트된 인자를 전달 받는다.

예시를 통해 알아보자.

```js
function countToN(n) {
  if (n === 0) return;

  countToN(n - 1);
  console.log(n);
}

countToN(5)
```

위 재귀 함수의 종료 조건은 `n === 0`이다. 즉, n이 0이 되는 순간 함수가 호출되지 않는다.

그리고 함수의 최초 인자는 5이며, 함수 내부에서 호출될 때는 종료 조건에 더 가까워지도록 `n - 1`이 전달되었다.

또한, 내가 하고 싶은건 각 인자를 출력하는 것이므로 이를 구현하였다.

조금 더 어려운 예시를 보자.

프로그래머스의 모음 사전이다.

```js
function solution(word) {
  let list = ['A', 'E', 'I', 'O', 'U']
  let wordList = []

  function rescursive(current) {
    wordList.push(current)
    if (current.length === 5) {
      return;
    }

    for (const c of list) {
      rescursive(`${current}${c}`)
    }
  }

  rescursive("")
  return wordList.indexOf(word)
}
```

1. 재귀 함수는 인자의 크기가 5가 되면 종료된다.
2. 첫 인자는 빈 문자이며, 재귀 호출이 될 때마다 인자에 배열의 요소가 추가된다.

원리는 정말 모르겠다. 그냥 종료 조건을 정하고, 인자를 그 조건에 점점 가까이 하도록 코드를 작성하면 문제가 해결된다.
