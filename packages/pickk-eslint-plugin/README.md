# Hello @pickk/eslint-plugin!

Pickk의 eslint custom rules 등을 정의합니다.

## Usage

#### Configuring Rules

- "off" or 0 - turn the rule off
- "warn" or 1 - turn the rule on as a warning (doesn't affect exit code)
- "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)

```js
// .eslintrc.js
module.exports = {
  // ...
  plugins: ["pickk"],
  rules: {
    "pickk/array-naming-convention": 1,
  },
};
```

## Supported Rules

| Name                          | Description                             | example            |
| ----------------------------- | --------------------------------------- | ------------------ |
| pickk/array-naming-convention | 배열 변수는 영문 복수형으로 명명합니다. | `const looks = []` |
