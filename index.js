const sha = require('crypto-js/sha256');

const hash = sha('helloworld').toString();
console.log(hash);