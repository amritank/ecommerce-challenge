// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// {
//   onDelete: "CASCADE",
// }
// Products belongsTo Category
Product.belongsTo(Category); //will create a foreign key in product

// Categories have many Products
Category.hasMany(Product); //will create a foreign key in product

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  onDelete: "CASCADE",
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
