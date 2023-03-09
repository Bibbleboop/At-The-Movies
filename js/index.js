
let searchinput = document.querySelector("#inputfilm")
// let filmsform = document.querySelector("#filmform")
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
	console.log('started')
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
		displaydata(data); // why does this break everything?? 
			
		})
	}
});
		 

		
	
} 

var displaydata = function (data){
	title.textContent = data.search[0].title 
	console.log(title);
	year.textcontent = data.search[0].year 

	yourselection.textcontent = "";
	// displayresults.replacechildren(); 
	// 	displayresults(); 
	

	searchinput.value ="";
}


// <!-- Load icon library -->





// Add event listener 

searchbtn.addEventListener("click", searchfunction);