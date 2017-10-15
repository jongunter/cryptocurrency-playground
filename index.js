const sha = require('crypto-js/sha256');


function mineSuccess(hash) {
    const testChar = 30;
    return ( hash && hash.indexOf('12345678') !== -1 );
}

function getRandomNumber(){
    return Math.random()  * 100000000 * Math.random() * 50 * Math.random() * 2000000000 * Math.random() * Math.random();
}

function hash(message){
    message = String(message);
    const binary = sha(message);
    return binary.toString();
}

let digest;
let message;
while(!mineSuccess(digest)){
    message = getRandomNumber();
    console.log('trying with message', message)
    digest = hash(message);
    console.log('trying with hash', digest);
}

console.log('Mining operaiton successful.');
console.log('The winning digset is', digest);
console.log('The winning message is ', message);
