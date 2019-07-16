import { elements } from "./base";
import base from "./base";
import {about} from './about.js'
import {contact} from './contact.js'
import {menu} from './menu.js'
import {notFound} from './notfound.js'


const tabs = ["about", "contact", "menu", "notFound"]

			// elements.main.appendChild(paragraph);



const activeState = tab => {
	for (let key of tabs) {
		elements[key].classList.remove("activeState");
	}
	elements[tab].classList.add("activeState");
};

const loadHome = () => {
	elements.main.removeChild(elements.main.lastChild);
	elements.main.appendChild(paragraph);
	activeState("home");
};

const loadAbout = () => {
	elements.main.removeChild(elements.main.lastChild);
	elements.main.appendChild(paragraph);
	activeState("about");
};

const loadMenu = () => {
	elements.main.removeChild(elements.main.lastChild);
	elements.main.appendChild(gallary);
	activeState("contact");
};

const loadContact = () => {
	elements.main.removeChild(elements.main.lastChild);
	elements.main.appendChild(contact);
	activeState("menu");
};

const loadnotFound = () => {
	elements.main.removeChild(elements.main.lastChild);
	elements.main.appendChild(contact);
	activeState("notFound");
};

loadHome();

elements.home.addEventListener("click", loadHome);
elements.about.addEventListener("click", loadAbout);
elements.contact.addEventListener("click", loadContact);
elements.menu.addEventListener("click", loadMenu);
elements.notFound.addEventListener("click", loadnotFound);
