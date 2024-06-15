document.addEventListener('DOMContentLoaded', function(){
    fetch("./componentes/navbar.html")
    .then(response => response.text())
    .then(data => {
        var navbar = document.querySelector("#header");
        navbar.innerHTML = data;
    })

    fetch("./componentes/footer.html")
    .then(response => response.text())
    .then(data => {
        var footer = document.querySelector("#foot");
        footer.innerHTML = data;
    })
});