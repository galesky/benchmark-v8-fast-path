# Goal

The goal of this benchmark is to acess if V8's fast path is feasible for express' req.is() array transformations;

# Results
[Detailed results](./RESULTS.md)
tl;dr:
For the express use case, the simple clone strategy is still faster than `Spread` and `Array.from`;

# References
[V8 v7.2 - Speeding up spread elements](https://v8.dev/blog/spread-elements)
