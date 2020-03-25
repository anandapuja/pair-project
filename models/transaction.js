'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;

  class Transaction extends Model {}

  Transaction.init({
    date: DataTypes.DATE,
    total_price: DataTypes.INTEGER,
    point: DataTypes.INTEGER,
    product_name: DataTypes.STRING,
    money: DataTypes.INTEGER,
    change_money: DataTypes.INTEGER,
    MemberId: DataTypes.INTEGER
  }, { sequelize });

  Transaction.associate = function(models) {
    // associations can be defined here
    Transaction.belongsTo(models.Member);
  };
  return Transaction;
};