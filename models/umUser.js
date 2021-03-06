'use strict';
module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define('userBean', {
    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id',
      primaryKey: true,
      autoIncrement: true
    },
    userName: {
      type: DataTypes.STRING,
      field: 'user_name'
    },
    displayName: {
      type: DataTypes.STRING,
      field: 'display_name'
    },
    password: {
      type: DataTypes.STRING,
      field: 'password'
    },
    token: {
      type: DataTypes.STRING,
      field: 'token'
    },
    active: {
      type: DataTypes.BOOLEAN,
      field: 'active'
    },
    createdBy: {
      type: DataTypes.STRING,
      field: 'created_by'
    },
    createdDate: {
      type: DataTypes.DATE,
      field: 'created_date'
    },
    modifiedBy: {
      type: DataTypes.STRING,
      field: 'modified_by'
    },
    modifiedDate: {
      type: DataTypes.DATE,
      field: 'modified_date'
    }
  }, {
    tableName: 'um_user',
    timestamps: false,
  });

  model.associate = function({ roleBean, roleUserBean }) {
    model.roles = model.belongsToMany(roleBean, { through: roleUserBean, as: 'roles', foreignKey: 'userId', otherKey: 'roleId' })
  };

  model.attributes = ['userId', 'userName', 'displayName', 'password', 'token', 'active'];

  return model;
};