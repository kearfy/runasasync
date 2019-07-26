var async = require('runasasync');

function example() {
    async(() => { console.log('async'); });
    console.log('sync');
}

example();

// sync
// async
