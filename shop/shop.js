const data = [
  {name: "Item 1", image: "branch-logo.png", text: "Details for item 1", price: "$10"},
  {name: "Item 2", image: "branch-logo.png", text: "Details for item 2", price: "$20"},
  {name: "Item 3", image: "branch-logo.png", text: "Details for item 3", price: "$30"},
  {name: "Item 4", image: "branch-logo.png", text: "Details for item 4", price: "$40"},
  {name: "Item 5", image: "branch-logo.png", text: "Details for item 5", price: "$50"},
  {name: "Item 6", image: "branch-logo.png", text: "Details for item 6", price: "$60"},
];

var shopItemIds = ["shop-item-1", "shop-item-2", "shop-item-3", "shop-item-4", "shop-item-5", "shop-item-6"];

function loadShopItems() {
  for(var i = 0; i < shopItemIds.length; i++) {
    const name = data[i]["name"];
    const image = data[i]["image"];
    const text = data[i]["text"];
    const price = data[i]["price"];
    import("item.js").then((itemModule) => {
      var item = new Item(name, image, text, price);
      const element = document.getElementById(shopItemIds[i]);
      element.src = image;
    });
  }
}

document.addEventListener("DOMContentLoaded", loadShopItems);
