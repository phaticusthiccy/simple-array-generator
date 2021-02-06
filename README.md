# Simple Array Generator
<p align="center">
  <a href="https://github.com/phaticusthiccy">
    <img src="https://img.shields.io/badge/Powered%20by-Xenon-red?style=plastic&logo=appveyor">
    
  </a>
  <a href="https://www.npmjs.com/package/simple-array-generator">
    <img src="https://img.shields.io/npm/v/simple-array-generator?style=plastic&logo=appveyor">
    
  </a>
  <a href="https://t.me/phaticusthiccy">
    <img src="https://img.shields.io/badge/Contact-Me-patriot?style=plastic&logo=appveyor">
  </a>
</p>

Here are a few different ways to create an array. So simple and fast.

##

### Usage 1 *(Lower Bottom)*
##### Example: [arraylower.js](https://github.com/phaticusthiccy/simple-array-generator/blob/gh-pages/examples/arraylower.js)

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
```
##

### Usage 2 *(Side by Side)*
##### Example: [arraysidebyside.js](https://github.com/phaticusthiccy/simple-array-generator/blob/gh-pages/examples/arraysidebyside.js)

```js
const ARRAY_GEN = (x,y) => Array.from((function*(){
  while (x <= y) yield x++;
})());

console.log(ARRAY_GEN(1,5));
```
`Output:`

```json
{
    "output": "[1, 2, 3, 4, 5]"
}
```
##

### Usage 3 *(Letters)*
##### Example: [arrayletters.js](https://github.com/phaticusthiccy/simple-array-generator/blob/gh-pages/examples/arrayletters.js)

```js
function range(s, e, str){
  function *gen(s, e, str){
    while(s <= e){
      yield (!str) ? s : str[s]
      s++
    }
  }
  if (typeof s === 'string' && !str)
    str = 'abcdefghijklmnopqrstuvwxyz'
  const from = (!str) ? s : str.indexOf(s)
  const to = (!str) ? e : str.indexOf(e)
  // Return function.
  return [...gen(from, to, str)]
}

console.log(range('a', 'e'))
// For Lowercase
// [ 'a', 'b', 'c', 'd', 'e' ]


console.log(range('a', 'e').map(v=>v.to.reverse())
// For Lowercase and Reverse
// [ 'e', 'd', 'c', 'b', 'a' ]


console.log(range('a', 'e').map(v=>v.toUpperCase()))
// For Uppercase
// [ 'A', 'B', 'C', 'D', 'E' ]


console.log(range('a', 'e').map(v=>v.toUpperCase()).reverse())
// For Uppercase and Reverse
// [ 'E', 'D', 'C', 'B', 'A' ]
```
##

### TO-DO List

- [ ] More Array Generators
- [ ] Emoji Array Generator
- [x] Reverse Array Generator


