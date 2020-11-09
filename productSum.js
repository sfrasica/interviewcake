function productSum(array, multiplier=1) {
    let sum = 0;
    for (const element of array) {
        sum += productSum(element, multiplier + 1)
    }
}