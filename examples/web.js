//include "runasasync.js" file in root to page with a script tag: <script src="runasasync.js"></script>

function example() {
    runasasync(() => { console.log('async'); });
    console.log('sync');
}

example();

//sync
// <- undefined (function ended, but nothing returned)
//async
