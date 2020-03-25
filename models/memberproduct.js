'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;

  class MemberProduct extends Model {}

  MemberProduct.init({
    MemberId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER
  }, { sequelize });

  MemberProduct.associate = function(models) {
    // associations can be defined here
    MemberProduct.belongsTo(models.Member);
    MemberProduct.belongsTo(models.Product);
  };
  return MemberProduct;
};