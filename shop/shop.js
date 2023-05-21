const data = [
  {name: "Item 1", image: "branch-logo.png", text: "Details for item 1", price: "$10"},
  {name: "Item 2", image: "branch-logo.png", text: "Details for item 2", price: "$20"},
  {name: "Item 3", image: "branch-logo.png", text: "Details for item 3", price: "$30"},
  {name: "Item 4", image: "branch-logo.png", text: "Details for item 4", price: "$40"},
  {name: "Item 5", image: "branch-logo.png", text: "Details for item 5", price: "$50"},
  {name: "Item 6", image: "branch-logo.png", text: "Details for item 6", price: "$60"},
];

var shopItemIds = ["shop-image-1", "shop-image-2", "shop-image-3", "shop-image-4", "shop-image-5", "shop-image-6"];

function loadShopItems() {
  for(var i = 0; i < shopItemIds.length; i++) {
      (function (i) {
    const name = data[i]["name"];
    const image = data[i]["image"];
    const text = data[i]["text"];
    const price = data[i]["price"];
    import("/shop/item.js").then((itemModule) => {
      console.log(name);
      var item = new itemModule.Item(name, image, text, price);
      const element = document.getElementById(shopItemIds[i]);
      console.log(i);
      console.log(shopItemIds[i]);
      element.src = image;
          }).call(this, i);
    });
  }
}

document.addEventListener("DOMContentLoaded", loadShopItems);
