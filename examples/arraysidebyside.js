const ARRAY_GEN = (x,y) => Array.from((function*(){
  while (x <= y) yield x++;
})());

console.log(ARRAY_GEN(1,5));
// Push Numbers 1 to 5 side by side. (1 and 5 included)
