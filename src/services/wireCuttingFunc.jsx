function cut(n, prices) {
    // Замеряем время начала выполнения алгоритма
    const startTime = performance.now();

    let results = Array(n + 1).fill(0);
    let cuts = Array(n + 1).fill(0);

    for (let j = 1; j <= n; j++) {
        let max_val = 0;
        for (let i = 1; i <= j; i++) {
            if (prices[i - 1] !== undefined && max_val < prices[i - 1] + results[j - i]) {
                max_val = prices[i - 1] + results[j - i];
                cuts[j] = i;
            }
        }
        results[j] = max_val;
    }

    let lengths = [];
    while (n > 0) {
        lengths.push(cuts[n]);
        n = n - cuts[n];
    }

    let decisionTree = buildDecisionTree(lengths);

    // Замеряем время окончания выполнения алгоритма
    const endTime = performance.now();

    // Рассчитываем время выполнения в миллисекундах
    const executionTime = endTime - startTime;

    return { maxProfit: results[results.length - 1], lengths: lengths, decisionTree: decisionTree, executionTime: executionTime };
}

function buildDecisionTree(lengths, index = 0) {
    if (lengths.length === 0) {
        return null;
    }

    const midIndex = Math.floor(lengths.length / 2);
    const midValue = lengths[midIndex];

    const leftBranch = buildDecisionTree(lengths.slice(0, midIndex), index * 2 + 1);
    const rightBranch = buildDecisionTree(lengths.slice(midIndex + 1), index * 2 + 2);

    return { name: midValue.toString(), children: [leftBranch, rightBranch].filter(Boolean), key: index };
}

export default cut;
