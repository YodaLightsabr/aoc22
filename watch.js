import fs from 'fs';

async function run (args) {
    global.input = fs.readFileSync('./' + day + '/input.txt', 'utf8');
    global.lines = input.split('\n');

    console.log(args ? '\nDetected change, reloading...\n====================' : '====================');
    try {
        await import(`./${day}/index.js?${Date.now()}`);
    } catch (err) {
        console.error(err);
    }
    console.log('====================\n');


    const md = fs.readFileSync('./template.md', 'utf8');

    fs.writeFileSync('README.md', md.replace('{{%stats%}}', fs.readdirSync('.').filter(a => +a).map(a => +a).sort((a, b) => (a - b)).map(day => fs.readFileSync(`./${day}/index.js`, 'utf8').split('\n')).filter(a => a[0]).map((a, i) => `Day ${i + 1} | ${a.length}`).join('\n')), 'utf8');

}

const day = process.argv.filter(a => +a).map(a => +a)[0] ?? fs.readdirSync('.').filter(a => +a).map(a => +a).sort((a, b) => (b - a))[0];
fs.watch(`./${day}`, run);

console.log(`Watching day`, day, '\n');
run();