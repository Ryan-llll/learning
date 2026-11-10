const {writeFileSync} = require('fs');

for (let i = 0; i < 10000; i++) {
    const line = Array.from({length: 10}, () => Math.random().toString(36).substring(2)).join('');
    writeFileSync('./big.txt', line + '\n', {flag: 'a'})
}