const data = [
  {name: "Item 1", image: "A_blue.png", text: "Details for item 1", price: "$10"},
  {name: "Item 2", image: "B_pink.png", text: "Details for item 2", price: "$20"},
  {name: "Item 3", image: "C_green.png", text: "Details for item 3", price: "$30"},
  {name: "Item 4", image: "D_orange.png", text: "Details for item 4", price: "$40"},
  {name: "Item 5", image: "E_teal.png", text: "Details for item 5", price: "$50"},
  {name: "Item 6", image: "F_purple.png", text: "Details for item 6", price: "$60"},
  {name: "Item 7", image: "G_yellow.png", text: "Details for item 6", price: "$60"},
  {name: "Item 8", image: "H_red.png", text: "Details for item 6", price: "$60"}
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
  loadImage("shop-image-1", 0);
  loadImage("shop-image-2", 1);
  loadImage("shop-image-3", 2);
  loadImage("shop-image-4", 3);
  loadImage("shop-image-5", 4);
  loadImage("shop-image-6", 5);

}

document.addEventListener("DOMContentLoaded", loadShopItems);
