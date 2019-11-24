const db = require('../models/index')
const ot = require('../utils/ObjectTool')

// Pada level Dao, penambalian harus berupa promise

module.exports = {
    getUser (userId) {
        console.log('UmUserDao.getUser', userId)

        return db.um_user.findOne({ where:{userId}, attributes: db.um_user.attributes})
    },

    getUsers () {
        console.log('UmUserDao.getUsers')

        return db.um_user.findAll({
            attributes: db.um_user.attributes, 
            include:[
                { association:db.um_user.roleUser, require:false, attributes:db.um_role.attributes }
            ]
        })
    },

    saveUser (user, t) {
        console.log('UmUserDao.saveUser', user)
        const pk = 'userId'

        let promise
        if (user[pk]) {
            promise = db.um_user
                .update(ot.auditTrail(user, pk), { where:{ userId: user[pk]}, transaction:t })
                .then(()=> user[pk])
        } else {
            promise = db.um_user
                .create(ot.auditTrail(user, pk), { transaction:t })
                .then((user)=> user[pk]);
        }
        return promise
    }
}
