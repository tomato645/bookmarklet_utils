(function () {
    var isOpenNewTabForSearchingEnable;
    if (!isOpenNewTabForSearchingEnable) {
        let button = document.createElement("button");
        button.id = "open-new-tab-for-searching";
        button.style = `
        position:fixed;
        right:20px;
        bottom:20px;
        z-index:100;
        opacity:0.9;
        max-height:20%;
        overflow: hidden;
        text-overflow : ellipsis;
        `;
        document.body.prepend(button);
        refresh();

        function refresh() {
            button.innerHTML = "Open new tab about ";
            let text = document.getSelection().toString();
            let spaceCount = (text.match(/ /g) || []).length;
            let appendText = "";
            if (text.length == 0) {
                appendText = "<strong>...</strong>";
            } else {
                appendText = `<strong>${text}</strong>`;
            }
            button.innerHTML += appendText;
            button.onclick = () => {
                window.open(`https://duckduckgo.com/?q=${text}`, "_blank");
            };
        }

        document.onselectionchange = refresh;
    }
})();
