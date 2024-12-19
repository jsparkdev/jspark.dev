---
title: 배열과 튜플
description: TypeScript에서 배열과 튜플을 다루는 방법에 대해 알아봅니다.
date: 2024-12-16
tags:
  - TypeScript
---

## 배열

배열의 타입은 두 가지 방법으로 정의할 수 있습니다. 두 방법의 작동 방식은 동일합니다.

```ts
const array: number[] = [1, 2, 3];
const array: Array<number> = [1, 2, 3];
```

배열 요소의 타입이 복잡한 경우 이를 처리하는 방법도 다릅니다.

```ts
// 첫 번째 방법
const array: number[][] = [[1, 2, 3], [4, 5, 6]];
const array: (number | string)[] = [1, "a", 2, "b", 3, "c"];
const array: (keyof Person)[] = ["name", "age", "isStudent"];

// 두 번째 방법
const array: Array<Array<number>> = [[1, 2, 3], [4, 5, 6]];
const array: Array<number | string> = [1, "a", 2, "b", 3, "c"];
const array: Array<keyof Person> = ["name", "age", "isStudent"];
```

### 읽기 전용 배열

원본 배열을 변경하는 작업 (예: `push`, `pop` 등)을 방지합니다. 물론 런타임에서는 배열의 변경을 막지 않습니다.

```ts
const array: readonly number[] = [1, 2, 3];
const array: ReadonlyArray<number> = [1, 2, 3];
```

읽기 전용 배열의 자리에 일반 배열이 전달될 수 있습니다. 하지만, 일반 배열의 자리에는 읽기 전용 배열을 전달할 수 없습니다.

```ts
function getReadOnlyArray(array: readonly string[]) {
  // ...
}

function getArray(array: string[]) {
  // ...
}

const array = ["a", "b"];
const readonlyArray: readonly string[] = ["a", "b"];

getReadOnlyArray(array);
getReadOnlyArray(readonlyArray);
getArray(array);
getArray(readonlyArray); // 오류 발생
```

이는 일반 배열을 전달받아 그 배열을 변경하지 않는 것은 가능하지만, 읽기 전용 배열을 전달받아 이를 변경하는 것은 불가능하기 때문입니다.

## 튜플

크기와 각 요소의 타입이 정해진 배열입니다.

```ts
// 배열
const array: string[] = ["a", "b", "c"];

// 튜플
const tuple: [string, number, boolean] = ["a", 1, true];
```

### 네임드 튜플

튜플의 각 요소에 이름을 붙일 수 있습니다.

더 읽기 쉬우며, IDE에 각 요소에 대한 정보도 제공하므로 사용하지 않을 이유가 없습니다.

```ts
const tuple: [name: string, age: number, isStudent: boolean] = ["a", 1, true];
```
