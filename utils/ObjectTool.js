module.exports = {  
    auditTrail (bean, primaryKey) {
        if (bean[primaryKey]) {
            bean.modifiedBy = bean.loggedUser.userName
            bean.modifiedDate = new Date()
        }else{
            bean.createdBy = bean.loggedUser.userName
            bean.createdDate = new Date()
        }
        return bean;
    }
}