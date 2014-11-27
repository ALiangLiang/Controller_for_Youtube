var loc = document.getElementById("key");
loc.value = localStorage.keycode;
loc.onkeydown = function(e) {
	loc.value = "";
	localStorage.keycode = e.keyCode;
}