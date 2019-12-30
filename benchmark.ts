var Benchmark = require("benchmark");

var suiteArguments = new Benchmark.Suite({
});

// add tests
suiteArguments
  .add("[ARGUMENTS] - Array.from Strat", function() {
    function is(types) {
      let arr = types;
      if (!Array.isArray(types)) {
        arr = Array.from(arguments);
      }
      return;
    }
    is("application/json");
    return;
  })
  .add("[ARGUMENTS] - Spread Strat", function() {
    function is(types) {
      let arr = types;
      if (!Array.isArray(types)) {
        arr = [...arguments];
      }
      return;
    }
    is("application/json");
    return;
  })
  .add("[ARGUMENTS] - Clone Strat", function() {
    function is(types) {
      let arr = types;
      if (!Array.isArray(types)) {
        arr = new Array(arguments.length);
        for (var i = 0; i < arr.length; i++) {
          arr[i] = arguments[i];
        }
      }

      return;
    }
    is("application/json");
    return;
  })
  .add("[ARGUMENTS] - slice.apply", function() {
    function is(types) {
      let arr = types;
      if (!Array.isArray(types)) {
        arr = [].slice.apply(arguments);
      }
      return;
    }
    is("application/json");
    return;
  })
  // add listeners
  .on("cycle", function(event) {
    console.log(String(event.target));
  })
  .on("complete", function() {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  .run({ async: false });


