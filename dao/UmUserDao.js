const { userBean, roleBean, roleUserBean } = require('../models/index')
const ot = require('../utils/ObjectTool')

// Pada level Dao, penambalian harus berupa promise

module.exports = {
    getUser (userId) {
        console.log('UmUserDao.getUser', userId)

        return userBean.findOne({ where: { userId }, attributes: userBean.attributes})
    },

    getUsers () {
        console.log('UmUserDao.getUsers')

        return userBean.findAll({
            attributes: userBean.attributes, 
            include: [
                { association: userBean.roles, require: false, attributes: roleBean.attributes }
            ]
        })
    },

    saveUser (user, t) {
        console.log('UmUserDao.saveUser', user)

        const pk = 'userId'

        if (user[pk]) {
            return userBean
                .update(ot.auditTrail(user, pk), { where: { userId: user[pk] }, transaction: t })
                .then(()=> user[pk])
        } else {
            return userBean
                .create(ot.auditTrail(user, pk), { transaction: t })
                .then((user)=> user[pk]);
        }
    }
}
