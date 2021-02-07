const ARRAY_GEN = (x,y) => (function*(){
  while (x <= y) yield x++;
})();

for (let array of ARRAY_GEN(1,5)){ 
  // Push numbers from 1 to 5. (1 and 5 included)
  console.log(array);
}
