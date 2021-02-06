# Simple Array Generator

Here are a few different ways to create an array. So simple and fast.

### Usage

##

```js
const ARRAY_GEN = (x,y) => (function*(){
  while (x <= y) yield x++;
})();

for (let res of ARRAY_GEN(1,5)){
  console.log(res);
}
```
`Output:`

```json
{
    "output": "
    1
    2
    3
    4
    5
    "
}

