import fs from 'fs';

async function run (args) {
    global.input = fs.readFileSync('./' + day + '/input.txt', 'utf8');

    console.log(args ? '\nDetected change, reloading...\n====================' : '====================');
    try {
        await import(`./${day}/index.js?${Date.now()}`);
    } catch (err) {
        console.error(err);
    }
    console.log('====================\n');
}

const day = process.argv.filter(a => +a).map(a => +a)[0] ?? fs.readdirSync('.').filter(a => +a).map(a => +a).sort((a, b) => (b - a))[0];
fs.watch(`./${day}`, run);

console.log(`Watching day`, day, '\n');
run();