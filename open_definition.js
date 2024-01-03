(function(){
    var isOpenNewTabForSearchingEnable;
    if (!isOpenNewTabForSearchingEnable){
        let button = document.createElement("button");
        button.id = "open-new-tab-for-searching"
        button.style = "position:fixed; right:50px; buttom:50px; z-index:100;";
        
        document.onselectionchange = function() {
            let text = document.getSelection().toString();
            console.log(text);
            
            button.innerHTML = `Open new tab about <strong>${text}</strong>`;
            
            button.onclick = function() {
                console.log("Open new tab!!!!");
                window.open(`https://duckduckgo.com/?q=${text}`, "_blank");
            }

            document.body.prepend(button);
        }
    }
}())