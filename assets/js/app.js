const listaTweets = document.getElementById('lista-tweets');

//Event listeners
eventListeners();

function eventListeners() {
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);
}


//Functions

function agregarTweet(e) {
    e.preventDefault();
    //Leer el valor del text area
    const tweet = document.querySelector('#tweet').value;
    //Crear botón de eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';
    //Crear elemento y añadirle el contenido a la lista
    const li = document.createElement('li');
    li.innerText = tweet;
    //Añade el botón de borrar al tweet
    li.appendChild(botonBorrar);
    //Añade el Tweet a la lista
    listaTweets.appendChild(li);
}