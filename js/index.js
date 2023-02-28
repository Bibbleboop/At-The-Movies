// LOGIC FOR THIS PROJECT
// START BUTTON TO INTRODUCE SEARCH BUTTONS MODAL
// SEARCH BY NAME, RANDOM BUTTON, SEARCH BY TYPE
// STORE THESE SEARCHES AND RESULTS LCOALLY
// ASK WHAT IS YOUR NAME
// STORE THIS LOCALLY WITH USERS HISTORY
// HIDE AND CLEAR BUTTONS 
//
let button = document.getElementById("namebtn");
// document.getElementById().innerHTML ="You chose: " + x.value;

//variables for API data & defining buttons

// TEST with first 150 instead of entire pokemon list before run all data
const pokemonCount = 10;



let pokemonsChars = document.getElementById("name" + "types" + "sprites/front/shiny");

// Show Pokemon API Url to use from Pokeapi.io ensuring using latest version
// let url = "https://pokeapi.co/api/v2/pokemon/{ + "name/" + "types/" + "sprites/front/shiny"};

// let url = "https://pokeapi.co/api/v2/pokemon/item/master-ball/"

// Matching with lables in Resource List  
// let pokemonsName = document.getElementById("nameBtn").addEventListener("input", pokemonsName);
function pokemonsName(){event.preventDefault();
// console.log(pokemonsName);// GET https://pokeapi.co/api/v2/ability/{id or name}/
let url ="https://pokeapi.co/api/v2/ability/{name}/"
 // make a get request to url

fetch(url)
.then(function(response) {
  // request was successful
  if (response.ok) {
    response.json().then(function(data) {console.log(data)
    });
}
});
};
let pokemonsTypes = document.getElementById("types");
let pokemonsImg = document.getElementById("sprites.front_shiny");


//Buttons used to input and select 
let namebtn = document.getElementById("pokemonsName");
console.log("name");
let input = document.getElementById("userinput");
console.log(input);
let randombtn = document.getElementById("random");
console.log(randombtn);
// Fetch API fetch the URL (promise in js) This gets the raw data that is transformed into JSON - also catches & console logs any errors
let searchPokemon = function (apiobj) {
get(url)
.then((rawdata) => rawdata.json())
.then((data) => addHTML(data))
.catch((error) => {
    // if error occurs, the following message displayed to advise next steps 
    pokemonhtml.innerHTML = '<h1> Error Alert. Time to check your code! </h1>'
    console.log(error)})
}
// // API response required to fetch from database using await as asynchronus
// let response = get(url); 
// console.log("Pokemon Characters" + pokemonsChars);
// let pokemonChars = response.json();
//async function 
// let pokemonChars = await fetch(url);
// document.getElementById("url").innerHTML = "pokemonsChars";



// // Object  - destructured
// let {url, pokemonsName,pokemonsType} = apiobj 
// // URL String
// let apiurl = '${url}${pokemonsName}/${pokemonsType}'
// // GET https://pokeapi.co/api/v2/pokemon/{id or name}/

// Add event listener 


// ****** check if this works
//to clear th escreen for new search
// let clearSearch = function () {
//     for (let type of pokemonsChars) {
//         console.log(type)
//     }
// }

//To place results in HTML page using DOM
let pokemonHtml = document.querySelector('.pokemon')
//Adds a variable to the values from API
let toAddin = 'My Name is : ${data.name}, whats yours?'
// // using innerHTML, can add in the HTML
// pokemonHtml.innerHTML = to Addin ****** check this 


// //Try this to make button for searches-->
// //Add event handler -->
// button.addEventListener ("click", function() {
//   alert("did something");
// });


// Local storage


// <!-- Load icon library -->
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

// <!-- The form -->
// <form class="example" action="action_page.php">
//   <input type="text" placeholder="Search.." name="search">
//   <button type="submit"><i class="fa fa-search"></i></button>
// </form>

// button.addEventListener("click",searchfunction);