// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("mouseenter" ,function(){
// 	console.log("CLicked")
// })
var button =document.getElementById("enter");
var remove =document.getElementById("remove");
var input =document.getElementById("userinputjs");
var ul = document.querySelector("ul");


function Addfunc(){
		// console.log(input.value);
		// console.log("Button Clicked");
		var li = document.createElement("li"); //Creates new list item
		var btn = li.appendChild(document.createElement("BUTTON")); //Creates a new button
		var textbtn = li.appendChild(document.createTextNode("Delete")); //
		li.appendChild(document.createTextNode(input.value));//adds input text to the variable li	
		btn.appendChild(textbtn);//adds text to button
		li.appendChild(btn);//Adds button to the list item 
		ul.appendChild(li);//Adds list item to the ul
		input.value = "";//Default value of input
		btn.addEventListener("click", function(){
			console.log("Delete Pressed")
			ul.removeChild(li);
			input.value = "";
		});
		li.addEventListener("click",function ToggleClass() {
				li.toggleClass("done");
			}
		);
}

function addliAfterClick() {
	if (input.value.length > 0) {
		Addfunc();
	}
}


function addliAfterKeyPress() {
	if (input.value.length > 0 && event.keyCode === 13) {
		console.log(event);
		Addfunc();
	}
}

button.addEventListener("click",addliAfterClick);

input.addEventListener("keypress",addliAfterKeyPress);