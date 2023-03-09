
let filmsform = document.querySelector("#filmform")
let searchinput = document.querySelector(".input")
let searchbtn = document.querySelector(".btn")
let yourselection = document.querySelector("#displayresults")
let filmdata = document.querySelector(".firstfilm")
let container1 =  document.querySelector("#container")
let films = []

let loadfilms = function() {
	let filmsloaded = localStorage.getItem("films")
	if(!filmsloaded) {
		return false;
	}

	filmsloaded = JSON.parse(filmsloaded);

	for (let i=0; i <filmsloaded.length; i++) {
		createbutton(filmsloaded[i])
		films.push(filmsloaded)
	}
}
let savefilms = function() {
	localStorage.setItem("films", JSON.stringify(films));
}


// JAVASCRIPT FETCH START

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '843a9b8887mshe96edcc84f6697dp1bfb41jsnd3973dc2394e',
		'X-RapidAPI-Host': 'mdblist.p.rapidapi.com'
	}
};

fetch('https://mdblist.p.rapidapi.com/?s=jaws&l=10', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

// __JAVASCRIPT FETCH END____________________________

// JQUERY START
// const settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://mdblist.p.rapidapi.com/?s=jaws&l=10",
// 	"method": "GET",
// 	"headers": {
// 		"X-RapidAPI-Key": "843a9b8887mshe96edcc84f6697dp1bfb41jsnd3973dc2394e",
// 		"X-RapidAPI-Host": "mdblist.p.rapidapi.com"
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });
// JQUERY END

// Local storage
let searchfunction = function(event) {
	event.preventDefault();
let film = searchinput.ariaValueMax.trim();

if (film) {

	getfilmdata(film);

	yourselection.textcontent = "";



}
}


// <!-- Load icon library -->
<link rel ="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>




// Add event listener 

searchbtn.addEventListener("click", searchfunction);