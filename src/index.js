// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!arguments.length || !matrix.length) {
        return [];
    }

    let res = [];

    for (let i = 0; i < matrix.length; i += 1) {
        !(i % 2)
            ? res.push(...matrix[i].sort((a, b) => a - b))
            : res.push(...matrix[i].sort((a, b) => b - a));
    }

    return res;
};
