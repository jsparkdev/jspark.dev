---
title: 객체의 타입
description: TypeScript에서 객체의 타입을 정의하는 방법에 대해 알아봅니다.
date: 2024-12-16
category: TypeScript
tags:
  - TypeScript
lang: ko
---

## 타입 별칭과 인터페이스

TypeScript에서 객체의 타입을 정의하기 위한 두 가지 방법입니다.

### 타입 별칭

교차 타입을 이용해 객체의 타입을 확장할 수 있습니다.

```ts
type Song = {
  title: string
  singer: string
}

type ReleaseData = {
  year: number
  month: number
  day: number
}

type SongWithReleaseData = Song & ReleaseData

const mySong: SongWithReleaseData = {
  title: "Hello World",
  singer: "Jun",
  year: 2024,
  month: 12,
  day: 12
}
```

### 인터페이스

객체와 함수를 나타낼 수 있으며 `extends`를 사용하여 여러 인터페이스를 상속할 수 있습니다.

```ts
interface Bird {
  wings: number
}

interface Person {
  talk: () => void
}

interface Robot {
  power: number
}

interface Monster extends Bird, Person, Robot {
  move: () => void
}

const monster: Monster = {
  wings: 4,
  talk: () => console.log("hello"),
  power: 100,
  move: () => console.log("go")
}
```

### 비교

타입 별칭을 확장하기 위한 교차 타입은 사용될 때마다 다시 계산됩니다. 하지만, 인터페이스 상속은 최초 한 번 계산된 후 캐싱되어 재사용됩니다. 즉, 객체의 확장이 필요하다면 인터페이스를 사용하여 성능상 이점을 얻을 수 있습니다.

하지만, 동일한 이름의 인터페이스는 자동으로 병합됩니다. 이는 예상치 못한 문제를 일으킬 수 있기 때문에 타입 별칭을 사용하여 오류를 발생시키는 것이 좋습니다.

```ts
interface Person {
  name: string
}

interface Person {
  age: number
}

const user: Person = {
  name: "Jun",
  age: 50
}
```
### 비교

일반 객체의 타입을 정의하기 위해 `type`을 사용하고, 상속이 필요한 경우 인터페이스를 사용하는 것을 권장합니다.

## 동적 키

객체를 정의한 후, 동적으로 키를 추가하려고 하면 오류가 발생합니다.

```ts
const user = {
  name: "Jun"
}

user.age = 30 // 오류 발생
```

TypeScript에게 잠재적으로 객체에 키가 추가될 수 있다고 알려야 합니다. 이는 두 가지 방법을 사용하여 수행할 수 있습니다.

유니온 타입, 리터럴과 같은 복잡한 키를 사용할 수 있는 레코드를 사용하는 것을 권장합니다.

```ts
// 인덱스 시그니처
type User = {
  name: string
  [index: PropertyKey]: unknown
}

// 레코드 (권장)
type User = Record<PropertyKey, unknown>
```

## object 타입

프리미티브 타입과 `null`, `undefined`가 아닌 모든 타입을 포함합니다.

너무 광범위한 타입이기 때문에 TypeScript의 타입 검사 기능을 제대로 활용할 수 없어 거의 사용되지 않으며, 항상 더 구체적인 타입을 사용하는 것을 권장합니다.
