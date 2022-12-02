console.log(
    input.split('\n').map(round => {
        const [a, b] = round.split(' ').map(a => ({ A: 0, B: 1, C: 2, X: 0, Y: 1, Z: 2 })[a]);
        if ((a + 1) % 3 === b) return 6 + b + 1;
        if (a === b) return 3 + b + 1;
        return 0 + b + 1;
    }).reduce((a, b) => a + b)
);

console.log(
    input.split('\n').map(round => {
        const [a, result] = round.split(' ').map(a => ({ A: 0, B: 1, C: 2 })[a] ?? a);
        const b = ({ X: (a + 2) % 3, Y: a, Z: (a + 1) % 3 })[result];
        if ((a + 1) % 3 === b) return 6 + b + 1;
        if (a === b) return 3 + b + 1;
        return 0 + b + 1;
    }).reduce((a, b) => a + b)
);