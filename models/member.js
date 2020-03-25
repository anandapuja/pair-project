'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;

  class Member extends Model {}

  Member.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, { sequelize })

  Member.associate = function(models) {
    // associations can be defined here
    Member.hasMany(models.Transaction);
    Member.belongsToMany(models.Product, {
      through: 'MemberProduct',
      foreignKey: 'MemberId'
    });
  };
  return Member;
};