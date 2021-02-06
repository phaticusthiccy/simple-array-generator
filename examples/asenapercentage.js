const RANGE_ITER = (x,y) => (function*(){
  while (x <= y) yield x++;
})();

for (let n of RANGE_ITER(0,100)){
  console.log('    r_text[' + n + '] = "*%' + n + '*";');
}
