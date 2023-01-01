"use strict";

 
// let firstInput = document.getElementById("fname"),
//  lastInput = document.getElementById("lname"),
//  emailInput = document.getElementById("email"),
//  passwordInput = document.getElementById("password"),
//  form = document.getElementById("js-form"),
//  errorMsg = document.getElementsByClassName("warning"),
//  icon = document.getElementsByClassName("icon");



// functions id and classes were created to clean up code from above
 let id = (id) => document.getElementById(id);

 let classes = (className) => document.getElementsByClassName(className);

 let firstInput = id("fname"),
 lastInput = id("lname"),
 emailInput = id("email"),
 passwordInput = id("password"),
 form = id("js-form"),
 errorMsg = classes("warning"),
 icon = classes("icon");



form.addEventListener("submit", (event) => {

	// html forms by default are submitted on the backend and we will handle this
	// with js using --->
	event.preventDefault();

	formMessage(firstInput, 0, "First Name cannot be empty");
	formMessage(lastInput, 1, "Last Name cannot be empty");
	formMessage(emailInput, 2, "Looks like this is not an email");
	formMessage(passwordInput, 3, "Password cannot be empty");

})

	// all of the validations are packed into formMessage()--->

let formMessage = (id, index, message) => {
	if(id.value.trim() === "") {
	errorMsg[index].innerHTML = message;
	icon[index].style.opacity = "1";

	} else {
		errorMsg[index].innerHTML = "";
		icon[index].style.opacity = "0";
	}		
}


	


