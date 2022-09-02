/* Item in the shopping cart. */
const items = require("./fakeDb")

class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;

    items.push(this);
  }

  static findAll(){
    return items
  }

  static update(name, data) {
    let foundItem = Item.find(name);
    if (foundItem === undefined) {
      throw {message: "Not Found", status: 404}
    }
    foundItem.name = data.name;
    foundItem.price = data.price;

    return foundItem;
  }

  /* Find item. */

  static find(name) {
    const foundItem = items.find(v => v.name === name);
    if(foundItem === undefined){
      throw { message: "Not Found", status: 404 }
    }
    return foundItem
  }

  /* Remove item */


  static remove(name) {
    let foundItem = items.findIndex(v => v.name === name);
    if (foundItem === -1) {
      throw {message: "Not Found", status: 404}
    }
    items.splice(foundItem, 1);
  }
}

module.exports = Item;
