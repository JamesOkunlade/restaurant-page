const elements = {
	content: document.querySelector(".content"),

	header: document.createElement("header"),
  sliderInner: document.createElement("div"),
  sliderContent: document.createElement("div"),


  main: document.createElement("main"),
	about: document.createElement("div"),
	menu: document.createElement("div"),
	contact: document.createElement("div"),


};

const base = (() => {
	// HEADER
	elements.header.classList.add("slider");
  elements.sliderInner.classList.add("slider_inner");
  elements.sliderContent.classList.add("slider_content");
  elements.sliderContent.classList.add("slider_help");
  elements.sliderContent.classList.add("type1");

	elements.content.appendChild(elements.header);
  elements.header.appendChild(elements.main);


  /// MAIN
	elements.main.classList.add("main");
	elements.main.classList.add("overlay");
	elements.about.classList.add("tab", "tab-about");
	elements.about.textContent = "about";
	elements.menu.classList.add("tab", "tab-menu");
	elements.menu.textContent = "menu";
	elements.contact.classList.add("tab", "tab-contact");
	elements.contact.textContent = "contact";


	elements.main.appendChild(elements.about);
	elements.main.appendChild(elements.menu);
	elements.main.appendChild(elements.contact);


})();

export { elements, base };
