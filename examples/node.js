var async = require('../index.js');

function example() {
    async(() => { console.log('async'); });
    console.log('sync');
}

example();

// sync
// async
