handle_menu = function() {
	if(document.documentElement.clientWidth > 803) {
		document.getElementById("menu").style.display = "block";
	}
	else {
		document.getElementById("menu-icon").onclick = function() {menu_click()};
		document.getElementById("menu").style.display = "none";

		function menu_click() {
			menu = document.getElementById("menu");
			if (menu.style.display === "none") {
				menu.style.display = "block";
			}
			else {
				menu.style.display = "none";
			}
		}
	}
}

window.onload = function() {handle_menu()};
window.onresize = function() {handle_menu()};