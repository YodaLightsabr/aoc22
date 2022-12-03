const pri = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;

console.log(
    lines.map(s => [s.substring(0, s.length / 2), s.substring(s.length / 2)])
        .map(([first, second]) => second
            .split('')
        .filter(a => first
            .includes(a))
        .map(a => (pri.indexOf(a) + 1))[0])
        .reduce((a, b) => a + b)
);

console.log(
    ' '
        .repeat(lines.length / 3)
        .split('')
        .map((_, i) => lines.slice(i * 3, i * 3 + 3))
        .map(group => pri.split('')
            .map(letter => group[0]
                .includes(letter) && group[1].includes(letter) && group[2].includes(letter) ? letter : undefined).sort()[0])
        .map(a => pri.indexOf(a) + 1)
        .reduce((a, b) => a + b)
);