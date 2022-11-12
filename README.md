# 타입스크립트 튜토리얼

본 문서는 노마드코더의 TypeScript 무료 강의인 [TypeScript로 블록체인 만들기](https://nomadcoders.co/typescript-for-beginners)를 기반으로 작성되었다.

## Basic Guides

TypeScript에 대한 보다 자세한 내용은 [The TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)를 참고한다.
핸드북에서는 다음 네 가지 기본 튜토리얼 가이드를 제공한다.

-   TypeScript for New Programmers
-   TypeScript for JavaScript Programmers
-   TypeScript for OOP Programmers
-   TypeScript for Functional Programmers

## Contents - Basics

1. 기본 개념
    1. 기본 타입 (string, boolean, number...)
    2. 기본 함수 선언 방법
2. 함수
    1. Call Signature
    2. Overloading
    3. Arrow Functions
    4. Polymorphism
3. 클래스
    1. 기본 Class 개념
    2. Interface
    3. Polymorphism

## Contetns - Practice

앞서 배운 개념을 통해 crypto 라이브러리를 사용하여 간단하게 블록을 만드는 방법의 실습을 진행한다.
먼저 npm 세팅과함께 타입스크립트를 설치한다.

```
npm init -y
npm install -D typescript
```

이후 tsconfig.js 파일을 생성하여 환경설정을 진행한다.

```
{
    "include": [
        "src"
    ],
    "compilerOptions": {
        "outDir": "build",  // 빌드 파일을 어디로 내보낼 것인지
        "target": "ES6",    // 타입스크립트를 버전 몇의 자바스크립트로 변환할 것인지
        "lib": ["ES6"],     // 웹페이지에서 작업할거면 "DOM" 옵션 추가
        "strict": true,     // 매우 엄격하게 타입을 검토
        "esModuleInterop": true,
        "module": "CommonJS",
    }
}
```

원활한 디버깅을 위하여 package.json의 scripts 부분을 수정한다.

```
"scripts": {
    build": "tsc",
    "dev": "nodemon --exec ts-node src/index.ts",
    "start": "node build/index.js"
}
```

실시간 디버깅을 위해 nodemon을 설치하고 노드를 실행한다.

```
npm i -D ts-node
npm i nodemon
npm run build && npm start
npm run dev
```
