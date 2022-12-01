console.log(
    input
        .split("\n\n")
        .map(a => a.split('\n')
        .map(Number)
        .reduce((s, a) => s + a, 0))
        .sort((a, b) => a - b)
        .reverse()
        .slice(0, 3)
        .reduce((s, a) => s + a, 0)
);