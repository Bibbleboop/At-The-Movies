//variables for API data & defining buttons

//To place results in HTML using DOM
let pokemon_html = document.querySelector('.pokemon')
//Adda variable to the values from API
let toAddin = 'My Name is : ${data.name}, whats yours?'
// using innerHTML, can add in the HTML
pokemon_html.innerHTML = to Addin
//Buttons used to input and select 
let btn = document.querySelectorTagName("button")[0];
let input = document.querySelectorId("userinput");
let randombtn = document.querySelectorId("random");

// Fetch API fetch the URL (promise in js) This gets the raw data that is transformed into JSON - also catches & console logs any errors
let searchPokemon = (api_obj) => {

// Object  - destructured
let {url, type, name} = api_obj 
// URL String
let api_url = '${url}${type}/${name}'

fetch(url)
.then( (raw_data) => raw_data.json())
.then((data) => addHTML(data))
.catch((error) => { // if an error occurs, the following message id displayed to advise next steps pokemon_html.innerHTML = '<h1> SomeError Occurred. Time to check your code! </h1>
    console.log(error)})
}



// Local storage

