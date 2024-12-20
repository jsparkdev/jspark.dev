---
title: 불변성
description: TypeScript에서 불변성을 다루는 방법에 대해 알아봅니다.
date: 2024-12-16
tags:
  - TypeScript
lang: ko
---

## 변수

JavaScript에서 `let`으로 선언한 변수의 값을 변경할 수 있습니다. 하지만 `const`로 선언한 변수의 값은 변경할 수 없습니다.

```ts
let name = "Jun"; // string
const name = "Jun"; // "Jun"
```

`let`으로 선언한 변수는 언제든지 값이 변경될 수 있어 비교적 넓은 `string` 타입으로 추론되며, `const`로 선언한 변수는 값이 변경될 수 없기 때문에 구체적인 리터럴 타입으로 추론됩니다.

## 객체

JavaScript 객체의 프로퍼티도 언제든지 변경될 수 있기 때문에 더 넓은 타입으로 추론됩니다. 이 경우 다음과 같은 문제가 발생할 수 있습니다.

```ts
type Device ={
  os: "Linux" | "Windows" | "OSX";
}

function getDevice(device: Device) {
  // ...
}

const myComputer = {
  os: "OSX" // os: string
}

getDevice(myComputer) // 오류 발생
```

이 문제를 해결하기 위해, 객체 프로퍼티의 타입을 더 구체적으로 추론해야 하며, 이를 위한 두 가지 방법이 존재합니다.

### 인라인 객체 사용

함수 인자로 인라인 객체를 전달하면 변경이 불가능하므로 리터럴 타입으로 추론합니다.

```ts
getDevice({ os: "OSX" })
```

### 타입 명시

변수에 타입을 명시하여 이 문제를 해결할 수도 있습니다.

```ts
const myComputer: Device = {
  os: "OSX" // os: "Linux" | "Windows" | "OSX"
}

getDevice(myComputer)
```

대부분의 객체는 변수에 저장해 사용하기 때문에, 두 번째 방법을 사용할 것입니다. 하지만, 이는 객체를 더 넓은 범위로 추론합니다.

## as const

객체의 모든 프로퍼티를 불변으로 처리하여 리터럴 타입으로 추론할 수 있습니다.

```ts
const myComputer = {
  os: "OSX" // os: "OSX"
} as const

getDevice(myComputer)
```

물론 `readonly`처럼 런타임에 프로퍼티 값이 변하는 것을 막지 못합니다. 하지만 다음 방법을 사용하여 런타임에 객체를 불변으로 만들 수는 있습니다.

```ts
const myComputer = Object.freeze({
  os: "OSX" // os: "OSX"
})
```

하지만 이는 1레벨 깊이에서만 적용된다는 점, 런타임에 불변성을 유지할 이유가 없다는 점 때문에 `as const`를 사용하는 것을 권장합니다.
