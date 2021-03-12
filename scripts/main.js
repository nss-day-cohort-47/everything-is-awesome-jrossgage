console.log("hello beautiful")
import { loadLegos, useLegos } from './legos/LegoData.js'
import { makeLegoList } from './legos/LegoList.js';

//find location on the DOM
const navElement = document.querySelector("nav");  //designating navElement as "nav" location on html (under the <h1>)

//Add click event Listener for nav buttons
navElement.addEventListener("click", (event) => {     //adding a click event listener to the navElement
	if (event.target.id === "showRed") {				//conditional statement targeting "showBlue" id (the blue button id). Saying if the "click" event happens on the "showBlue" target.
		filterLegos("Red")}
	else if (event.target.id === "showGreen") {				//conditional statement targeting "showBlue" id (the blue button id). Saying if the "click" event happens on the "showBlue" target.
			filterLegos("Green") 						//Calls function filterLegos accepting a parameter of "Blue". *Why is Blue a string here*??
  } else if (event.target.id === "showAll") {			//else if conditional statement targeting "showAll" id (the showAll button). *Is this just a method to keep the code dry?*
			makeLegoList(useLegos())						//Calls function makeLegoList accepting a parameter of the function useLegos
		}
	})

//accepts click event listener for blue button. Filters list for blue legos
const filterLegos = (whatFilter) => {					//declares filterLegos function with a parameter of whatFilter
	const filterArray = useLegos().filter(singleLego => {	//declares filterArray variable storing useLego function with a filter method.
		if (singleLego.LegoName.includes(whatFilter)) {		//inside the filter method return, singleLego is the parameter. 
			return singleLego;								//An if statement designating the singleLego (the parameter storing filtered information from useLegos()) LegoName key value.
		}													//a method function .includes is called on the key value accepting whatFilter parameter (outside input)
	})														//makeLegoList is called accepting the filterArray information.
	makeLegoList(filterArray);
}

//What is this??
const startEIA = () => {								//declares startEIA function with no parameter (no outside input)
	loadLegos()											//return calls loadLego function
		.then(legoArray => {								//after loadLego has been completed, the response (legoArray) is inputted into makeLegoList function
			makeLegoList(legoArray)
		})

}

startEIA();										//startEIA is called. 