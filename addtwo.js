function twoNumberSum(array, targetSum) {
    const mapper = {};

    for (const num of array) {
        const difference = targetSum - num;
        if (difference in mapper) {
			return [difference, num]
    }
