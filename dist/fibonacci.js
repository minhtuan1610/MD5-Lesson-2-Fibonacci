"use strict";
function displayFibonacci() {
    let f0 = 0;
    let f1 = 1;
    let fn = f0 + f1;
    console.log(f0, f1, fn);
    for (let i = 0; i < 10; i++) {
        f0 = f1;
        f1 = fn;
        fn = f0 + f1;
        console.log(fn);
    }
}
displayFibonacci();
