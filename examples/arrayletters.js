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
  // Return fonction.
  return [...gen(from, to, str)]
}

// console.log(range('a', 'e'))
// For Lowercase
// [ 'a', 'b', 'c', 'd', 'e' ]


// console.log(range('a', 'e').map(v=>v.to.reverse())
// For Lowercase and Reverse
// [ 'e', 'd', 'c', 'b', 'a' ]


// console.log(range('a', 'e').map(v=>v.toUpperCase()))
// For Uppercase
// [ 'A', 'B', 'C', 'D', 'E' ]


// console.log(range('a', 'e').map(v=>v.toUpperCase()).reverse())
// For Uppercase and Reverse
// [ 'E', 'D', 'C', 'B', 'A' ]
