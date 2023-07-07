import "/style.css";

const menuToggle = document.getElementById("menu-toggle");
const menuContainer = document.getElementById("menu-container");
const menuItemsContainer = document.getElementById("menu-items");
const hiddenItems = document.querySelectorAll(".polera");


function moveHiddenItems() {
    menuItemsContainer.innerHTML = ""; 

    hiddenItems.forEach((item) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = item.href;
    link.textContent = item.textContent;
    listItem.appendChild(link);
    menuItemsContainer.appendChild(listItem);
    });
}


menuToggle.addEventListener("click", () => {
    menuContainer.classList.toggle("hidden");
});


if (window.matchMedia("(max-width: 981px)").matches) {
    moveHiddenItems();
}


window.addEventListener("resize", () => {
    if (window.matchMedia("(max-width: 981px)").matches) {
    moveHiddenItems();
    } else {
    menuContainer.classList.add("hidden"); 
    }
});
