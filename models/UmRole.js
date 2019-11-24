'use strict';
module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define('roleBean', {
    roleId: {
      type: DataTypes.INTEGER,
      field: 'role_id',
      primaryKey: true,
      autoIncrement: true
    },
    roleName: {
      type: DataTypes.STRING,
      field: 'role_name'
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
    tableName: 'um_role',
    timestamps: false,
  });

  model.associate = function({ userBean, roleUserBean }) {
    model.users = model.belongsToMany(userBean, { through: roleUserBean, as: 'users', foreignKey: 'roleId', otherKey: 'userId' })
  };

  model.attributes = ['roleId', 'roleName', 'active'];

  return model;
};