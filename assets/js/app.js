const listaTweets = document.getElementById('lista-tweets');

//Event listeners
eventListeners();

function eventListeners() {
    //Enviar formulario
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);
    //Borrar tweets
    listaTweets.addEventListener('click', borrarTweet);
    //Contenido cargado
    document.addEventListener('DOMContentLoaded', localStorageListo);
}


//Functions

//Agregar Tweets
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
    //Añadir Tweet al Local Storage
    addLocalStorage(tweet);
}

//Elimina tweets del DOM
function borrarTweet (e) {
    e.preventDefault();
    if (e.target.className === 'borrar-tweet') {
        e.target.parentElement.remove();
        alert('Tweet eliminado');
    }
}

//Agrega Tweets al Local Storage
function addLocalStorage(tweet) {
    let tweets;
    tweets = obtenerTweets();
    //Añadir el nuevo Tweet
    tweets.push(tweet);
    //Convertir de string a arreglo para el Local Storage
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

//Comprobar que haya elementos en local storage, retorna un arreglo
function obtenerTweets() {
    let tweets;
    //Revisamos valores de Local Storage
    if (localStorage.getItem('tweets') === null) {
        tweets = [];
    } else {
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}

//Mostrar datos de Local Storage en la lista
function localStorageListo() {
    let tweets;
    tweets = obtenerTweets();
    tweets.forEach(function(tweet){
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
    });
}