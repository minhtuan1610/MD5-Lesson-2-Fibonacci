function displayFibonacci() {
    let previous: number = 0;
    let current: number = 1;
    let next: number = previous + current;
    console.log(previous, current, next);
    for (let i = 0; i < 10; i++) {
        previous = current;
        current = next;
        next = previous + current;
        console.log(next);
    }
}

function sumOfFibonacci() {

}

displayFibonacci();