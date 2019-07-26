//include "asasync.js" file in root to page with a script tag: <script src="asasync.js"></script>

function example() {
    async(() => { console.log('async'); });
    console.log('sync');
}

example();

//sync
// <- undefined (function ended, but nothing returned)
//async
