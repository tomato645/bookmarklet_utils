(function() {
    var isOpenNewTabForSearchingEnable;
    if (!isOpenNewTabForSearchingEnable) {
        let button = document.createElement("button");
        button.id = "open-new-tab-for-searching";
        button.innerHTML = "Open new tab about ..."
        button.style = `position:fixed; right:50px; bottom:50px; z-index:100; opacity:0.9;`;
        document.body.prepend(button);

        document.onselectionchange = () => {
            let text = document.getSelection().toString();
            button.innerHTML = `Open new tab about <strong>${text}</strong>`;
            button.onclick = () => {
                window.open(`https://duckduckgo.com/?q=${text}`, "_blank");
            };
        };
    };
}())