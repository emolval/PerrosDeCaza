let imagenes = [
    {
        "url": "../img/perros/Alano español.jpg",
        "nombre": "Alano español",
        "descripcion": "Un perro fuerte y valiente, históricamente utilizado para la caza mayor y como perro de presa. Es leal, protector y necesita ejercicio regular para mantenerse en forma."
        
    },
    {
        "url": "../img/perros/Beagle.jpg",
        "nombre": "Beagle",
        "descripcion": "Un sabueso pequeño pero enérgico, conocido por su gran olfato y espíritu curioso. Perfecto para la caza menor y una excelente mascota familiar por su carácter amistoso."

    },
    {
        "url": "../img/perros/Cocker Spaniel.jpg",
        "nombre": "Cocker Spaniel",
        "descripcion": "Un perro elegante y alegre, criado originalmente para la caza de aves. Es sociable, inteligente y disfruta del ejercicio al aire libre, además de ser un gran compañero."

    },
    {
        "url": "../img/perros/El Braque Francés.jpg",
        "nombre": "Braque Francés",
        "descripcion": "Un perro de muestra excepcional con un carácter equilibrado y obediente. Es ideal para la caza en campo abierto y también un excelente perro de familia."

    },
    {
        "url": "../img/perros/jagd terrier.webp",
        "nombre": "jagd terrier",
        "descripcion": "Un perro de caza versátil y valiente, especializado en la caza de madriguera. Su temperamento enérgico y su instinto cazador lo hacen un perro incansable en el trabajo."

    },
    {
        "url": "../img/perros/Perro de Agua Español.jpg",
        "nombre": "Perro de Agua Español",
        "descripcion": "Inteligente y ágil, este perro es excelente en la caza de aves acuáticas y en labores de rescate. Su pelaje rizado e impermeable lo protege del frío y la humedad."

    },
    {
        "url": "../img/perros/Podenco andaluz.jpg",
        "nombre": "Podenco andaluz",
        "descripcion": "Un perro veloz y resistente, ideal para la caza en terrenos difíciles. Tiene un gran instinto cazador y es muy independiente, pero también cariñoso con su familia."

    },
    {
        "url": "../img/perros/Pointer.jpg",
        "nombre": "Pointer",
        "descripcion": "Un perro de muestra elegante y atlético, especializado en señalar la ubicación de la presa. Es obediente, inteligente y necesita mucho ejercicio para estar en su mejor forma."

    },
    {
        "url": "../img/perros/Setter Inglés.jpg",
        "nombre": "Setter Inglés",
        "descripcion": "Un perro de caza refinado, famoso por su capacidad de rastrear y señalar aves. Es dócil, afectuoso y muy trabajador en el campo."

    },
    {
        "url": "../img/perros/teckel.jpg",
        "nombre": "Teckel",
        "descripcion": "Originalmente criado para la caza de madriguera, especialmente de tejones y zorros. Su cuerpo alargado y patas cortas le permiten entrar en túneles estrechos. Es valiente, curioso y buen perro de compañía."

    },
]

document.addEventListener("DOMContentLoaded", function () {
    let atras = document.getElementById('atras');
    let adelante = document.getElementById('adelante');
    let imagen = document.getElementById('img');
    let puntos = document.getElementById('puntos');
    let texto = document.getElementById('texto');
    let actual = 0;

    function actualizarCarrusel() {
        imagen.innerHTML = `<img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy">`;
        texto.innerHTML = `<h3>${imagenes[actual].nombre}</h3><p>${imagenes[actual].descripcion}</p>`;
        posicionCarrusel();
    }

    atras.addEventListener('click', function () {
        actual = (actual - 1 + imagenes.length) % imagenes.length;
        actualizarCarrusel();
    });

    adelante.addEventListener('click', function () {
        actual = (actual + 1) % imagenes.length;
        actualizarCarrusel();
    });

    function posicionCarrusel() {
        puntos.innerHTML = "";
        for (let i = 0; i < imagenes.length; i++) {
            puntos.innerHTML += `<p class="${i === actual ? 'bold' : ''}">.</p>`;
        }
    }

    actualizarCarrusel();
});
