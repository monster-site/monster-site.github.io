export class Item {
  constructor(name, image, color, textcolor) {
    this.name = name;
    this.image = image;
    this.color = color;
    this.textcolor = textcolor;
  }
  
  getName() {
    return this.name;
  }
  
  getImage() {
    return this.image;
  }
  
  getColor() {
    return this.color;
  }
  
  getTextColor() {
    return this.textcolor;
  }
}
