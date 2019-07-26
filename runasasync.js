if (typeof window === 'undefined') {
    module.exports = (action) => {setTimeout(action,0);};;
} else {
    window.runasasync = (action) => {setTimeout(action,0);};
}
