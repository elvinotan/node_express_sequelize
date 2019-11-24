const umUserDao = require('../dao/UmUserDao')
const db = require('../models/index')

// Pada level Service, penambalian harus berupa real object, non promise

module.exports = {
    async getUser (userId) {
        console.log('UmService.getUser', userId)

        return await umUserDao.getUser(userId)
    },

    async getUsers () {
        console.log('UmService.getUsers')

        return await umUserDao.getUsers()
    },

    async saveUser(user) {
        console.log('UmService.saveUser', user)

        let t = null
        try{
            t = await db.sequelize.transaction()
            const userId = await umUserDao.saveUser(user, t)
            await t.commit()

            return await umUserDao.getUser(userId)
        }catch(e) { 
            if (t) t.rollback(); throw e; 
        }
    }
}