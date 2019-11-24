const umUserDao = require('../dao/UmUserDao')

module.exports = {
    getUser (userId) {
        console.log('UmService.getUser', userId)

        return umUserDao.getUser(userId)
    },

    saveUser(user) {
        console.log('UmService.saveUser', user)

        return umUserDao.saveUser(user)
    }
}