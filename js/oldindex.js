//variables for API data & defining buttons
// TEST with first 150 instead of entire pokemon list before run all data
const pokemonCount = 150;
// ****** check if this works
//to clear th escreen for new search
let clearSearch = function () {
    for (let type of Types) {
        console.log(type)
    }
}
// Show Pokemon API Url to use from Pokeapi.io ensuring using latest version
let url = "https://pokeapi.co/api/v2/pokemon" + "name" + "types" + "sprites.front_shiny";

// Matching with lables in Resource List  
let pokemonsTypes = pokemonChars["types"];
let pokemonsName = pokemonChars["name"];
let pokemonsImg = pokemonChars["sprites"]["front_shiny"];

// Fetch API fetch the URL (promise in js) This gets the raw data that is transformed into JSON - also catches & console logs any errors
// let searchPokemon = function (apiobj) {
// fetch(url)
// .then((rawdata) => rawdata.json())
// .then((data) => addHTML(data))
// .catch((error) => {
    // if an error occurs, the following message displayed to advise next steps pokemonhtml.innerHTML = '<h1> Error Alert. Time to check your code! </h1>
//     console.log(error)})
// }
// API response required to fetch from database using await as asynchronus
// // let pokemonChars = response.json();
// async function 
// let pokemonChars = await fetch(url);
// document.getElementById("url").innerHTML = pokemonChars;

// let response = fetch(url); 
console.log("Pokemon Characters" + pokemonChars);
// // Object  - destructured
// let {url, pokemonsName,pokemonsType} = apiobj 
// // URL String
// let apiurl = '${url}${pokemonsName}/${pokemonsType}'
// // GET https://pokeapi.co/api/v2/pokemon/{id or name}/

// Add event listener 


//To place results in HTML page using DOM
let pokemonHtml = document.querySelector('.pokemon')
//Adds a variable to the values from API
let toAddin = 'My Name is : ${data.name}, whats yours?'
// // using innerHTML, can add in the HTML
// pokemonHtml.innerHTML = to Addin ****** check this 
//Buttons used to input and select 
let namebtn = document.querySelectorTagName("button")[0];
console.log(namebtn);
let input = document.querySelectorId("userinput");
let randombtn = document.querySelectorId("random");

// Local storage

