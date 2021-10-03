function callback(first, second, call) {
    console.log(first, second, call);
    call(first, second);
}

function sum(first, second) {
    console.log(`Total sum ${first+second}`);
}
callback(1, 2, sum);
