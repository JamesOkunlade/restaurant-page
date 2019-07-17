const food = {
	item1: document.createElement("img"),
	item2: document.createElement("img"),
	item3: document.createElement("img")
};

food.item1.src = "img/meal1.png";
food.item2.src = "img/meal2.png";
food.item3.src = "img/meal1.png";

food.item1.classList.add("meal-1");
food.item2.classList.add("meal-2");
food.item3.classList.add("meal-3");

const menu = document.createElement("div");
menu.classList.add("tab-dis", "tab-dis-menu");

menu.appendChild(food.item1);
menu.appendChild(food.item2);
menu.appendChild(food.item3);

export { menu };
