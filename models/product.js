'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;

  class Product extends Model {}

  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, { sequelize });

  Product.associate = function(models) {
    // associations can be defined here
    Product.belongsToMany(models.Member, {
      through: 'MemberProduct',
      foreignKey: 'ProductId'
    });
  };
  return Product;
};