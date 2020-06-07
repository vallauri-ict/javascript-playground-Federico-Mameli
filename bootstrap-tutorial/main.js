$(document).ready(function(){
	$('.header').height($(window).height());
})

function flashContact(){
	let div=document.getElementById("contactUs");
	div.style.backgroundColor= "rgb(127, 127, 127)";
	let timer=setTimeout( function() { div.style.backgroundColor= "rgb(55, 55, 55)";}, 1000);
}