if (typeof window === 'undefined') {
    module.exports = (action) => {setTimeout(action,0);};;
} else {
    window.asasync = (action) => {setTimeout(action,0);};
}
