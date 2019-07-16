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

	elements.banner.classList.add("banner");
  elements.leftBox.classList.add("left-box");
  elements.imageBox.classList.add("img-box");
  elements.navigation.classList.add("nav");
  elements.home.classList.add("type1");
  elements.home.innerHTML = `
      <div class="caption">
        <h1>Nothing brings people together like Good<span>Food</span</h1>
      </div>

      <div class="call-to-action">
        <button type="button" name="button">View Our Menu</button>
      </div>
  `;
	elements.navigation.innerHTML = `
		<nav class="nav">
			<ul>
				<li>Good<span>Food</span></li>
				<li><a href="#">Home</a></li>
				<li><a href="#">About us</a></li>
				<li><a href="#">Contact us</a></li>
			</ul>
		</nav>
	`;

	elements.content.appendChild(elements.banner);
  elements.banner.appendChild(elements.leftBox);
  elements.banner.appendChild(elements.imageBox);
  elements.leftBox.appendChild(elements.navigation);
  elements.leftBox.appendChild(elements.home);
  elements.leftBox.appendChild(elements.about);
  elements.leftBox.appendChild(elements.menu);
  elements.leftBox.appendChild(elements.contact);
  elements.leftBox.appendChild(elements.notFound);


	elements.home.classList.add("home-tab");
	elements.about.classList.add("tab", "about-tab");
	elements.about.textContent = "about";
	elements.menu.classList.add("tab", "menu-tab");
	elements.menu.textContent = "menu";
	elements.contact.classList.add("tab", "contact-tab");
	elements.contact.textContent = "contact";


	// elements.banner.appendChild(elements.home);
	// elements.banner.appendChild(elements.about);
	// elements.banner.appendChild(elements.contact);
	// elements.banner.appendChild(elements.menu);
	// elements.banner.appendChild(elements.notFound);
	// elements.content.appendChild(elements.banner);


})();

export { elements, base };
