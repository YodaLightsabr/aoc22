import fs from 'fs';

const day = process.argv.filter(a => +a).map(a => +a)[0] ?? fs.readdirSync('.').filter(a => +a).map(a => +a).sort((a, b) => (b - a))[0];
global.input = fs.readFileSync('./' + day + '/input.txt', 'utf8');
global.lines = input.split('\n');

import(`./${day}/index.js`);