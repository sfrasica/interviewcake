function fib(n) {
    const fibArray = [0, 1]

    if (n < 2) {
        return n;
    }
    for (let i = 2; i <= n; i++) {
        fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
    }
    return fibArray;
}

/*memoized
function memoize(fn) {
    const cache = {};
    return function(...args) {
        if (cache[args]){
            return cache[args];
        }
        const result = fn.apply(this, args);
        cache[args] = result;

        return result;
    }
}


*/