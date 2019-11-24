const userDao = require('../dao/UserDao')
const roleDao = require('../dao/RoleDao')
const { sequelize } = require('../models/index')

// Pada level Service, penambalian harus berupa real object, non promise

module.exports = {
    /*----------  User Management  ----------*/
    async getUser (userId) {
        console.log('UserManagementService.getUser', userId)

        return await userDao.getUser(userId)
    },

    async getUsers () {
        console.log('UserManagementService.getUsers')

        return await userDao.getUsers()
    },

    async saveUser(user) {
        console.log('UserManagementService.saveUser', user)

        let t = null
        try {

            t = await sequelize.transaction()
            const userId = await userDao.saveUser(user, t)
            await t.commit()

            return await userDao.getUser(userId)
        }catch(e) { 
            if (t) t.rollback(); throw e; 
        }
    },

    /*----------  Role Management  ----------*/
    async getRole (roleId) {
        console.log('UserManagementService.getRole', roleId)

        return await roleDao.getRole(roleId)
    },

    async getRoles () {
        console.log('UserManagementService.getRoles')

        return await roleDao.getRoles()
    },

    async saveRole(role) {
        console.log('UserManagementService.saveRole', role)

        let t = null
        try {

            t = await sequelize.transaction()
            const roleId = await roleDao.saveRole(role, t)
            await t.commit()

            return await roleDao.getRole(roleId)
        }catch(e) { 
            if (t) t.rollback(); throw e; 
        }
    }
}