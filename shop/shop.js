const data = [
  {name: "Monster 1", image: "A_blue.png", color: "#d8e8f6"},
  {name: "Monster 2", image: "B_pink.png", color: "#f0dee6"},
  {name: "Monster 3", image: "C_green.png", color: "#daeae5"},
  {name: "Monster 4", image: "D_orange.png", color: "#f2e7de"},
  {name: "Monster 5", image: "E_teal.png", color: "#d1eff6"},
  {name: "Monster 6", image: "F_purple.png", color: "#dfd4e8"},
  {name: "Monster 7", image: "G_yellow.png", color: "#f5f1df"},
  {name: "Monster 8", image: "H_red.png", color: "#e3d3d8"}
];

function loadImage(id, index) {
  const name = data[index]["name"];
  const image = data[index]["image"];
  const text = data[index]["text"];
  const price = data[index]["price"];
  import("/shop/item.js").then((itemModule) => {
    var item = new itemModule.Item(name, image, text, price);
    const element = document.getElementById(id);
    element.src = image;
  });
}

function loadShopItems() {
  loadImage("monster-image-1", 0);
  loadImage("monster-image-2", 1);
  loadImage("monster-image-3", 2);
  loadImage("monster-image-4", 3);
  loadImage("monster-image-5", 4);
  loadImage("monster-image-6", 5);
  loadImage("monster-image-7", 6);
  loadImage("monster-image-8", 7);
}

document.addEventListener("DOMContentLoaded", loadShopItems);
