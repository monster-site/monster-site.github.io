const data = [
  {name: "Monster 1", image: "A_blue.png", color: "#d8e8f6", textcolor: "#18689c"},
  {name: "Monster 2", image: "B_pink.png", color: "#f0dee6", textcolor: "#9d172a"},
  {name: "Monster 3", image: "C_green.png", color: "#daeae5", textcolor: "#1a6a37"},
  {name: "Monster 4", image: "D_orange.png", color: "#f2e7de", textcolor: "#90571a"},
  {name: "Monster 5", image: "E_teal.png", color: "#d1eff6", textcolor: "#00b4c5"},
  {name: "Monster 6", image: "F_purple.png", color: "#dfd4e8", textcolor: "#80378d"},
  {name: "Monster 7", image: "G_yellow.png", color: "#f5f1df", textcolor: "#a08614"},
  {name: "Monster 8", image: "H_red.png", color: "#e3d3d8", textcolor: "#912629"}
];

function loadImage(id, index, badgeId) {
  const name = data[index]["name"];
  const image = data[index]["image"];
  const color = data[index]["color"];
  const textcolor = data[index]["textcolor"];
  import("/shop/item.js").then((itemModule) => {
    var item = new itemModule.Item(name, image, color, textcolor);
    const element = document.getElementById(id);
    element.src = image;
    element.addEventListener('click', function (e) {
      window.location.href = '/shop/item-detail.html';
      window.index = index;
    });
    const badge = document.getElementById(badgeId);
    badge.style.color = textcolor;
    badge.style.backgroundColor = color;
    badge.style.borderRadius = "15px";
  });
}

function loadMonsterDetails() {
  document.getElementById("monster-detail-image").src = "../" + data[window.index]["image"];
}

function loadShopItems() {
  loadImage("monster-image-1", 0, "monster-badge-1");
  loadImage("monster-image-2", 1, "monster-badge-2");
  loadImage("monster-image-3", 2, "monster-badge-3");
  loadImage("monster-image-4", 3, "monster-badge-4");
  loadImage("monster-image-5", 4, "monster-badge-5");
  loadImage("monster-image-6", 5, "monster-badge-6");
  loadImage("monster-image-7", 6, "monster-badge-7");
  loadImage("monster-image-8", 7, "monster-badge-8");
}

document.addEventListener("DOMContentLoaded", loadShopItems);
