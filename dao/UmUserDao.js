const db = require('../models/index')
const ot = require('../utils/ObjectTool')

module.exports = {
    getUser(userId) {
        console.log('UmUserDao.getUser', userId)

        return db.um_user.findOne({ where:{userId} })
    },

    saveUser(user) {
        console.log('UmUserDao.saveUser', user)
        const pk = 'userId'

        if (user[pk]) {
            await db.um_user.update(ot.auditTrail(user, pk), { where:{userId: user[pk]} })
        } else {
            await db.um_user.create(ot.auditTrail(user, pk));
        }
    }
}
