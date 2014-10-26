build_header = function() {
  header = document.getElementById("header");

    // <a href="#" class="header">THE DISTRICT HEAT</a>
    titleLink = document.createElement("a");
    titleHref = document.createAttribute("href");
    titleHref.value = "#";
    titleLink.setAttributeNode(titleHref);
    titleClass = document.createAttribute("class");
    titleClass.value = "header";
    titleLink.setAttributeNode(titleClass);
    titleText = document.createTextNode("THE DISTRICT HEAT");
    titleLink.appendChild(titleText);
    header.appendChild(titleLink);

    // <nav>
    nav = document.createElement("nav");

      // <a id="menu-icon"></a>
      menuIconLink = document.createElement("a");
      menuIconId = document.createAttribute("id");
      menuIconId.value = "menu-icon";
      menuIconLink.setAttributeNode(menuIconId);
      nav.appendChild(menuIconLink);

      // <ul id="menu">
      menu = document.createElement("ul");
      menuId = document.createAttribute("id");
      menuId.value = "menu";
      menu.setAttributeNode(menuId);

      // <li><a href='home.html'>HOME</a></li>
      menuItemHome = document.createElement("li");
      linkHome = document.createElement("a");
      linkHref = document.createAttribute("href");
      linkHref.value = "home.html";
      linkHome.setAttributeNode(linkHref);
      linkText = document.createTextNode("HOME");
      linkHome.appendChild(linkText);
      menuItemHome.appendChild(linkHome);
      menu.appendChild(menuItemHome);

      // <li><a href='music.html'>MUSIC</a></li>
      menuItemMusic = document.createElement("li");
      linkMusic = document.createElement("a");
      linkHref = document.createAttribute("href");
      linkHref.value = "music.html";
      linkMusic.setAttributeNode(linkHref);
      linkText = document.createTextNode("MUSIC");
      linkMusic.appendChild(linkText);
      menuItemMusic.appendChild(linkMusic);
      menu.appendChild(menuItemMusic);

      // <li><a href='shows.html'>SHOWS</a></li>
      menuItemShows = document.createElement("li");
      linkShows = document.createElement("a");
      linkHref = document.createAttribute("href");
      linkHref.value = "shows.html";
      linkShows.setAttributeNode(linkHref);
      linkText = document.createTextNode("SHOWS");
      linkShows.appendChild(linkText);
      menuItemShows.appendChild(linkShows);
      menu.appendChild(menuItemShows);

      // <li><a href='bio.html'>BIO</a></li>
      menuItemBio = document.createElement("li");
      linkBio = document.createElement("a");
      linkHref = document.createAttribute("href");
      linkHref.value = "bio.html";
      linkBio.setAttributeNode(linkHref);
      linkText = document.createTextNode("BIO");
      linkBio.appendChild(linkText);
      menuItemBio.appendChild(linkBio);
      menu.appendChild(menuItemBio);

      // <li><a href='blog.html'>BLOG</a></li>
      menuItemBlog = document.createElement("li");
      linkBlog = document.createElement("a");
      linkHref = document.createAttribute("href");
      linkHref.value = "blog.html";
      linkBlog.setAttributeNode(linkHref);
      linkText = document.createTextNode("BLOG");
      linkBlog.appendChild(linkText);
      menuItemBlog.appendChild(linkBlog);
      menu.appendChild(menuItemBlog);

      // <li><a href='merch.html'>MERCH</a></li>
      menuItemMerch = document.createElement("li");
      linkMerch = document.createElement("a");
      linkHref = document.createAttribute("href");
      linkHref.value = "merch.html";
      linkMerch.setAttributeNode(linkHref);
      linkText = document.createTextNode("MERCH");
      linkMerch.appendChild(linkText);
      menuItemMerch.appendChild(linkMerch);
      menu.appendChild(menuItemMerch);

      // <li><a href='contact.html'>CONTACT</a></li>
      menuItemContact = document.createElement("li");
      linkContact = document.createElement("a");
      linkHref = document.createAttribute("href");
      linkHref.value = "contact.html";
      linkContact.setAttributeNode(linkHref);
      linkText = document.createTextNode("CONTACT");
      linkContact.appendChild(linkText);
      menuItemContact.appendChild(linkContact);
      menu.appendChild(menuItemContact);

    nav.appendChild(menu);
  header.appendChild(nav);
}

highlight_menu = function() {
  currentURL = document.URL
  menuItems = document.getElementById("menu").children;
  for (var i = 0; i < menuItems.length; i++) {
    if (currentURL === menuItems[i].children[0].href) {
      menuItems[i].style.backgroundColor = "#4A4A4A";
    }
  }  
}

handle_menu = function() {
  if(document.documentElement.clientWidth > 820) {
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

if (document.addEventListener)
  document.addEventListener("DOMContentLoaded", function(){
    build_header();
    handle_menu();
    highlight_menu();
  }, false)
else if (document.all && !window.opera){
  document.write('<script type="text/javascript" id="contentloadtag" defer="defer" src="javascript:void(0)"><\/script>')
  var contentloadtag = document.getElementById("contentloadtag")
  contentloadtag.onreadystatechange = function(){
    if (this.readyState=="complete"){
      build_header()
      handle_menu()
      highlight_menu()
    }
  }
}

window.onresize = function() {handle_menu()};