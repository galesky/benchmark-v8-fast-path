# Hardware

* SO: Linux leoxxxxxxxxx 4.14.158-1-MANJARO #1 SMP PREEMPT Fri Dec 6 07:01:33 UTC 2019 x86_64 GNU/Linux
* RAM: 16GB 2133Hz DDR4
* Processor: Intel(R) Core(TM) i7-8550U CPU @ 1.80GHz
* Benchmarkin lib: https://www.npmjs.com/package/benchmark
* Package infos can be found in the package-lock.json file

# Referencing Express' current implementation

This implementation tries to parse the `arguments` object to an Array

Node v9.10.0 - File `benchmark.ts`
```
[ARGUMENTS] - Array.from Strat x 2,278,083 ops/sec ±2.68% (83 runs sampled)
[ARGUMENTS] - Spread Strat x 2,529,490 ops/sec ±1.11% (90 runs sampled)
[ARGUMENTS] - Clone Strat x 12,080,753 ops/sec ±1.57% (79 runs sampled)
[ARGUMENTS] - slice.apply x 5,558,908 ops/sec ±0.71% (89 runs sampled)
Fastest is [ARGUMENTS] - Clone Strat
```

Node v12.13.1 - File `benchmark.ts`
```
[ARGUMENTS] - Array.from Strat x 2,354,053 ops/sec ±1.61% (89 runs sampled)
[ARGUMENTS] - Spread Strat x 2,648,971 ops/sec ±3.59% (75 runs sampled)
[ARGUMENTS] - Clone Strat x 15,077,486 ops/sec ±11.30% (70 runs sampled)
[ARGUMENTS] - slice.apply x 12,543,501 ops/sec ±1.00% (88 runs sampled)
Fastest is [ARGUMENTS] - Clone Strat
```

Node v13.5.0 - File `benchmark.ts`
```
[ARGUMENTS] - Array.from Strat x 2,414,389 ops/sec ±1.28% (87 runs sampled)
[ARGUMENTS] - Spread Strat x 3,220,896 ops/sec ±2.88% (87 runs sampled)
[ARGUMENTS] - Clone Strat x 19,488,275 ops/sec ±1.69% (87 runs sampled)
[ARGUMENTS] - slice.apply x 11,424,320 ops/sec ±1.25% (86 runs sampled)
Fastest is [ARGUMENTS] - Clone Strat
```


# Referencing a simple number/object array shallow copy

This implementation tries to shallow copy an Array

Node v9.10.0 - File `int-benchmark.ts`
```
[INTEGER] - Array.from Strat x 114 ops/sec ±1.08% (72 runs sampled)
[INTEGER] - Clone Strat x 1,504 ops/sec ±1.45% (85 runs sampled)
[INTEGER] - slice.apply x 1,335 ops/sec ±2.86% (69 runs sampled)
[INTEGER] - Spread Strat x 147 ops/sec ±1.97% (74 runs sampled)
[OBJECT] - Array.from Strat x 66.94 ops/sec ±2.36% (68 runs sampled)
[OBJECT] - Clone Strat x 935 ops/sec ±1.14% (86 runs sampled)
[OBJECT] - slice.apply x 919 ops/sec ±1.03% (85 runs sampled)
[OBJECT] - Spread Strat x 126 ops/sec ±2.81% (72 runs sampled)
Fastest is [INTEGER] - Clone Strat
```

Node v12.13.1 - File `int-benchmark.ts`
```
[INTEGER] - Array.from Strat x 2,135 ops/sec ±2.74% (79 runs sampled)
[INTEGER] - Clone Strat x 1,282 ops/sec ±3.46% (77 runs sampled)
[INTEGER] - slice.apply x 1,735 ops/sec ±0.89% (86 runs sampled)
[INTEGER] - Spread Strat x 1,729 ops/sec ±0.98% (90 runs sampled)
[OBJECT] - Array.from Strat x 1,615 ops/sec ±1.17% (85 runs sampled)
[OBJECT] - Clone Strat x 1,263 ops/sec ±1.11% (87 runs sampled)
[OBJECT] - slice.apply x 1,649 ops/sec ±1.60% (85 runs sampled)
[OBJECT] - Spread Strat x 1,669 ops/sec ±1.18% (90 runs sampled)
Fastest is [INTEGER] - Array.from Strat
```

Node v13.5.0 - File ``
```
[INTEGER] - Array.from Strat x 2,033 ops/sec ±5.04% (70 runs sampled)
[INTEGER] - Clone Strat x 1,493 ops/sec ±7.55% (72 runs sampled)
[INTEGER] - slice.apply x 1,870 ops/sec ±5.01% (77 runs sampled)
[INTEGER] - Spread Strat x 1,630 ops/sec ±1.65% (85 runs sampled)
[OBJECT] - Array.from Strat x 1,710 ops/sec ±1.44% (86 runs sampled)
[OBJECT] - Clone Strat x 1,253 ops/sec ±1.27% (87 runs sampled)
[OBJECT] - slice.apply x 1,743 ops/sec ±1.80% (83 runs sampled)
[OBJECT] - Spread Strat x 1,820 ops/sec ±1.56% (89 runs sampled)
Fastest is [INTEGER] - Array.from Strat
```

# Conclusion

For the express use case, the simple clone strategy is still the fastest;

# Observations
* As the perfomance differences on the benchmark were huge (up to 10x), no more efforst were put in evaluating the exact ratio;
* In order to really narrow down to a more predictable range, a more precise approach would need to include more scenarios/runs/hardware;
*