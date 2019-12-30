
var Benchmark = require("benchmark");
let b = [];
let c = [];
for (let a = 0; a < 100000; a++) {
  b.push(a);
}
for (let a = 0; a < 100000; a++) {
  c.push({simple:'object'});
}
var suiteInteger = new Benchmark.Suite({});


suiteInteger
  .add("[INTEGER] - Array.from Strat", function() {
    let arr = Array.from(b);
    return;
  })
  .add("[INTEGER] - Clone Strat", function() {
    let arr = new Array(b.length);
    for (var i = 0; i < arr.length; i++) {
      arr[i] = b[i];
    }
    return;
  })
  .add("[INTEGER] - slice.apply", function() {
    let arr = [].slice.apply(b);
    return;
  })
  .add("[INTEGER] - Spread Strat", function() {
    let arr = [...b];
    return;
  })
  .add("[OBJECT] - Array.from Strat", function() {
    let arr = Array.from(c);
    return;
  })
  .add("[OBJECT] - Clone Strat", function() {
    let arr = new Array(c.length);
    for (var i = 0; i < arr.length; i++) {
      arr[i] = c[i];
    }
    return;
  })
  .add("[OBJECT] - slice.apply", function() {
    let arr = [].slice.apply(c);
    return;
  })
  .add("[OBJECT] - Spread Strat", function() {
    let arr = [...c];
    return;
  })
  // add listeners
  .on("cycle", function(event) {
    console.log(String(event.target));
  })
  .on("complete", function() {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  // run async
  .run({ async: false });
