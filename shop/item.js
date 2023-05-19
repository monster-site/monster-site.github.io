export class Item {
  constructor(name, image, text, price) {
    this.name = name;
    this.image = image;
    this.text = text;
    this.price = price;
  }
  
  getName() {
    return this.name;
  }
  
  getImage() {
    return this.image;
  }
  
  getText() {
    return this.text;
  }
  
  getPrice() {
    return this.price;
  }
}
