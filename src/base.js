const elements = {
	content: document.querySelector(".content"),

	banner: document.createElement("div"),
  leftBox: document.createElement("div"),
  imageBox: document.createElement("div"),
  navigation: document.createElement("nav"),


  home: document.createElement("div"),
	about: document.createElement("div"),
	menu: document.createElement("div"),
	contact: document.createElement("div"),
	notFound: document.createElement("div"),


};

const base = (() => {
	// HEADER
	elements.banner.classList.add("banner");
  elements.leftBox.classList.add("left-box");
  elements.imageBox.classList.add("img-box");
  elements.navigation.classList.add("nav");
  elements.sliderContent.classList.add("type1");
  elements.sliderContent.innerHTML = `
      <h1>Exquisite Dishes</br> From Chef</h1>
      <h4>Far far away, behind the word mountains, far from the
        countries Vokalia</br> and Consonantia, there live the blind texts.</h4>
  `;

	elements.content.appendChild(elements.header);
  elements.header.appendChild(elements.sliderInner);
  elements.header.appendChild(elements.sliderContent);


  /// MAIN
	elements.main.classList.add("main");
	elements.about.classList.add("tab", "tab-about");
	elements.about.textContent = "about";
	elements.menu.classList.add("tab", "tab-menu");
	elements.menu.textContent = "menu";
	elements.contact.classList.add("tab", "tab-contact");
	elements.contact.textContent = "contact";


	elements.main.appendChild(elements.about);
	elements.main.appendChild(elements.menu);
	elements.main.appendChild(elements.contact);
	elements.content.appendChild(elements.main);


})();

export { elements, base };
