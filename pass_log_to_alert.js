(function () {
    var isConsoleOverwritten;
    console.log(isConsoleOverwritten);
    if (!isConsoleOverwritten) {
        window.console.log = function (message) {
            alert(message);
        };
        window.console.warn = function (message) {
            alert(message);
        };
        window.console.error = function (message) {
            alert(message);
        };
    };

    window.isConsoleOverwritten = true;
})();
