fetch("https://127.0.0.1:5500/script.js")
    .then(responce => responce.text())
    .then(source => {
    console.log(source);
    let script = document.createElement("script");
    script.innerHTML = source;
    document.body.append(script);
})