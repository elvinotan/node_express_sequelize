'use strict';
module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define('um_role_user', {
    roleId: {
      type: DataTypes.INTEGER,
      field: 'role_id',
      primaryKey: true
    },
    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id',
      primaryKey: true
    }
  }, {
    tableName: 'um_role_user',
    timestamps: false,
  });

  model.associate = function(models) {
  };

  model.attributes = ['roleId', 'userId'];

  return model;
};