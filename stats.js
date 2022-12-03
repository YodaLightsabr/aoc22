import fs from 'fs';

const md = fs.readFileSync('./template.md', 'utf8');

fs.writeFileSync('README.md', md.replace('{{%stats%}}', fs.readdirSync('.').filter(a => +a).map(a => +a).sort((a, b) => (a - b)).map(day => fs.readFileSync(`./${day}/index.js`, 'utf8').split('\n').length - 1).filter(a => a).map((a, i) => `Day ${i + 1} | ${a + 1} | [\`./${a + 1}/index.js\`](https://github.com/YodaLightsabr/aoc22/blob/main/${a + 1}/index.js)`).join('\n')), 'utf8');