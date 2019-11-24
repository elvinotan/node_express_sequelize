const { userBean, roleBean, roleUserBean } = require('../models/index')
const ot = require('../utils/objectTool')

// Pada level Dao, penambalian harus berupa promise

module.exports = {
    getRole (roleId) {
        console.log('RoleDao.getRole', roleId)

        return roleBean.findOne({ where: { roleId }, attributes: roleBean.attributes})
    },

    getRoles () {
        console.log('RoleDao.getRoles')

        return roleBean.findAll({
            attributes: roleBean.attributes, 
            include: [
                { association: roleBean.users, require: false, attributes: userBean.attributes }
            ]
        })
    },

    saveRole (role, t) {
        console.log('RoleDao.saveRole', role)

        const pk = 'roleId'

        if (role[pk]) {
            return roleBean
                .update(ot.auditTrail(role, pk), { where: { roleId: role[pk] }, transaction: t })
                .then(()=> role[pk])
        } else {
            return roleBean
                .create(ot.auditTrail(role, pk), { transaction: t })
                .then((role)=> role[pk]);
        }
    }
}
