
let searchinput = document.querySelector("#inputfilm")
let filmsform = document.querySelector("#filmform")
// let searchinput = document.querySelector(".input")
let searchbtn = document.querySelector(".btn")
let yourselection = document.querySelector("#displayresults")
let filmdata = document.querySelector(".firstfilm")
let container1 =  document.querySelector("#container") 
var title = document.querySelector("#title") 
var year = document.querySelector('#year')
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
	// console.log('started')
	event.preventDefault();
let film = searchinput.value.trim();
  	console.log(film)
if (film) {

	getfilmdata(film);

	
	}
else {
	alert("Your Selctionif not Valid");

}
};

let getfilmdata = function (film) {
	console.log(film)

	fetch('https://mdblist.p.rapidapi.com/?s=' + film + '&l=1', options)
	.then(function(response) {
	// request was successful
	if (response.ok) {
		response.json().then(function(data) {
	displaydata(data);  
		})	}
});
} 

var displaydata = function (data){
	title.textContent = data.search[0].title 
	// console.log('#title');
	// score.textcontent = data.search[0].score
	// 	// console.log('#score');
	yourselection.textcontent = "";
	// displayresults.replacechildren(); 
	// 	displayresults(); 
	searchinput.value ="";
}   

// <!-- function to render all the film buttons and append -->

function renderButtons() {
	// let filmsCard = $('filmdata');	
	// let filmsContainer = $('#filmdata');
	let filmsCard = $('#displayresults');	
	// let filmsContainer = $('#displayresults');

	//create button for each film and append
	films.forEach(function (film) {
		let filmButton = $('<button>');
		filmButton.text(film);
		filmButton.attr("data-film", film);
		// filmsCard.append(filmButton);
		filmsCard.append(filmButton);
	});
}
$("addfilm").on("click", function(event) {
	event.preventDefault();

		let newFilm = $('getfilmdata').val().trim();
		console.log(newFilm); 

		film.push(newFilm);
		renderButtons();

});

renderButtons();
// Add event listener 

searchbtn.addEventListener("click", searchfunction);