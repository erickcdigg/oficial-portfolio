fetch('./data/imagenes.json')
    .then(response => response.json())
    .then(imagenes => {
        console.log("Array de imagenes => ", imagenes);
        var galeria = document.querySelector("#galeria");

        imagenes.forEach(function(imagen) {
            var divProyecto = document.createElement("div");
            divProyecto.classList.add("proyecto");

            divProyecto.innerHTML = `<a href="${imagen.url}" target="_blank">
                                        <img src="${imagen.direction}" alt="${imagen.titulo}">
                                        <div class="overlay">
                                            <h3>${imagen.titulo}</h3>
                                            <p>${imagen.description}</p>
                                        </div>
                                    </a>`;
            galeria.appendChild(divProyecto);
        });
    })
    .catch(error => console.error('Error fetching the JSON data:', error));



/* 
var imagenes = [
    {
        titulo: "Calculadora",
        description: "Calculadora basica en html, css y javascript",
        direcction: "./img/calculadora.avif",
        url:"https://calculator-operation-demo.netlify.app/"
    },
    {
        titulo: "Portafolio",
        description: "Portafolio con mi experiencia",
        direcction: "./img/erickloza.avif",
        url:"https://erickloza.netlify.app/"
    },
    {
        titulo: "¿Como se declara un programador?",
        description: "simple juego para conquistar",
        direcction: "./img/declaracion-de-amor.avif",
        url:"https://programador-enamorado.netlify.app/"
    }
]

console.log("Array de imagenes => ", imagenes);

var galeria = document.querySelector("#galeria");

imagenes.forEach(function(imagen){
    var divProyecto = document.createElement("div");
    divProyecto.classList.add("proyecto");
    
    divProyecto.innerHTML = `<a href=${imagen.url} target="_blank">
                                <img src=${imagen.direcction} alt=${imagen.titulo}>
                                <div class="overlay">
                                    <h3>${imagen.titulo}</h3>
                                    <p>${imagen.description}</p>
                                </div>
                            </a>
                            `;
    galeria.appendChild(divProyecto);
});
*/