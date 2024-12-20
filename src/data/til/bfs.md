---
title: BFS
description: BFS 알고리즘
date: 2024-12-21
category: Algorithm
tags:
  - BFS
lang: ko
draft: true
---


를 마스터하기 위한 학습

## 기본

크큐방방방 큐쉬돌 조방큐
CCBBB CSD JBC

- 크기를 선언
- 큐를 선언
- 방문 배열 선언
- 방문
- 방향 배열 선언

- 큐가 빌 때까지
- 쉬프트로 요소 가져와서
- 돌린다.

- 조건이 만족하면
- 방문하고
- 큐에 넣는다.

### 예시

프로그래머스의 게임 맵 최단거리 문제를 예시로 보여드림.

```js
function solution(maps) {
  // 크기를 선언
  const n = maps.length;
  const m = maps[0].length;

  // 큐를 선언
  const queue = []

  // 방문 배열 선언 (왜 이렇게 하는지는 뒤에서 다룸)
  const visited = Array(n).fill().map(() => Array(m).fill(false))

  // 방향 배열 선언
  const dx = [-1, 1, 0, 0]
  const dy = [0, 0, -1, 1]

  // 방문
  queue.push({ x: 0, y: 0, dist: 1})
  visited[0][0] = true;

  // 큐가 빌 때까지
  while (queue.length) {
    // 쉬프트로 요소 가져와서
    const { x, y, dist } = queue.shift();

    if (x === n - 1 && y === m - 1) return dist;

    // 돌린다.
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      // 조건이 만족하면
      if (nx >= 0 && nx < n && ny >= 0 && ny < m && !visited[nx][ny] && maps[nx][ny]) {
        // 방문하고
        visited[nx][ny] = true

        // 큐에 넣는다.
        queue.push({
          x: nx,
          y: ny,
          dist: dist + 1
        })
      }
    }
  }

  return -1;
}
```

## 다차원 배열 선언 시 주의 사항

정확히는 `fill` 메서드는 얕은 복사를 한다는 점을 주의해야 함.

다음 코드는 문제를 발생시킴. 여러 행 중 하나의 행을 변경하면 모든 행이 변경된다.

```js
const visited = Array(n).fill(Array(m).fill(false))
```

왜냐면 `fill` 메서드는 얕은 복사를 수행하기 때문. 즉, 첫 배열을 만든 후, 모든 행이 그 배열을 참조하도록 만든다.

그래서 다차원 배열을 선언할 때는 다음 두 방법 중 하나를 사용하도록 해야함.

```js
const visited = Array.from({ length: n }, () => Array(m).fill(false))
const visited = Array(n).fill().map(() => Array(m).fill(false))
```
