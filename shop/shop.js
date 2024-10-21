const data = [
  {name: "Astrocreep", image: "A_blue.png", color: "#d8e8f6", textcolor: "#18689c", text: "travel", description: "When your little monsters are ready to play, this Astrocreep's ready to jump in and make magic happen!", title: "This Astrocreep is ready to play!"},
  {name: "Starbeast", image: "B_pink.png", color: "#f0dee6", textcolor: "#9d172a", text: "retail", description: "When your little monsters are ready to play, this Starbeast's ready to jump in and make magic happen!", title: "This Starbeast is ready to play!"},
  {name: "Cosmic Critter", image: "C_green.png", color: "#daeae5", textcolor: "#1a6a37", text: "fintech", description: "When your little monsters are ready to play, this Cosmic Critter's ready to jump in and make magic happen!", title: "This Cosmic Critter is ready to play!"},
  {name: "Galaxy Gobbler", image: "D_orange.png", color: "#f2e7de", textcolor: "#90571a", text: "lifestyle", description: "When your little monsters are ready to play, this Galaxy Gobbler's ready to jump in and make magic happen!", title: "This Galaxy Gobbler is ready to play!"},
  {name: "Cuddlekins", image: "E_teal.png", color: "#d1eff6", textcolor: "#00b4c5", text: "finance", description: "When your little monsters are ready to play, this Cuddlekins is ready to jump in and make magic happen!", title: "This Cuddlekins is ready to play!"},
  {name: "Pipsqueak", image: "F_purple.png", color: "#dfd4e8", textcolor: "#80378d", text: "qsr", description: "When your little monsters are ready to play, this Pipsqueak's ready to jump in and make magic happen!", title: "This Pipsqueak is ready to play!"},
  {name: "Snugglebug", image: "G_yellow.png", color: "#f5f1df", textcolor: "#a08614", text: "entertainment", description: "When your little monsters are ready to play, this Snugglebug's ready to jump in and make magic happen!", title: "This Snugglebug is ready to play!"},
  {name: "Little Critter", image: "H_red.png", color: "#e3d3d8", textcolor: "#912629", text: "ecommerce", description: "When your little monsters are ready to play, this Little Critter's ready to jump in and make magic happen!", title: "This Little Critter is ready to play!"}
];

function loadImage(id, index, badgeId) {
  const name = data[index]["name"];
  const image = data[index]["image"];
  const color = data[index]["color"];
  const textcolor = data[index]["textcolor"];
  import("/shop/item.js").then((itemModule) => {
    var item = new itemModule.Item(name, image, color, textcolor);
    const element = document.getElementById(id);
    if(!element) { return; }
    element.src = image;
    element.addEventListener('click', function (e) {
      window.index = index;
      window.location.href = '/shop/item-detail.html?' + 'id=' + index;
      return false;
    });
    const badge = document.getElementById(badgeId);
    badge.style.color = textcolor;
    badge.style.backgroundColor = color;
    badge.style.borderRadius = "15px";
  });
}

function loadMonsterDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get('id');
  var i = myParam;
  document.getElementById("monster-detail-image").src = data[i]["image"];
  var name = data[i]["name"];
  var color = data[i]["color"];
  var textColor = data[i]["textcolor"];
  var text = data[i]["text"];
  // addOpenGraphMetaTags(data[i]["title"], data[i]["description"], data[i]["image"])
  const badge = document.getElementById("details-badge-text");
  badge.style.color = textColor;
  badge.style.backgroundColor = color;
  badge.style.borderRadius = "48px";
  badge.align = "left";
  badge.innerHTML = text;
  document.getElementById("monster-details-title").innerHTML = name;
  trackEvent('VIEW_ITEM');
}

function addOpenGraphMetaTags(title, description, image) {
  const ogTitle = document.createElement('meta');
  ogTitle.setAttribute('property', 'og:title');
  ogTitle.setAttribute('content', title);

  const ogDescription = document.createElement('meta');
  ogDescription.setAttribute('property', 'og:description');
  ogDescription.setAttribute('content', description);

  const ogImage = document.createElement('meta');
  ogImage.setAttribute('property', 'og:image');
  ogImage.setAttribute('content', image);

  const head = document.getElementsByTagName('head')[0];
  head.appendChild(ogTitle);
  head.appendChild(ogDescription);
  head.appendChild(ogImage);
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
