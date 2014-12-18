var variant = "n-queens for n=8. ";

var tests = 10;

console.log(variant + tests + " tests");

console.time('total');
for (var example = 0; example < tests; example++){
  console.time("time " + example);
  console.log('solutions for 8: ' + countNQueensSolutions(8))
  console.timeEnd("time " + example);
}

console.log('');

console.timeEnd('total');

console.log("");
