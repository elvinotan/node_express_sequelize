module.exports = (req, res, next) =>{
    req.body.loggedUser = {
        userName: 'Elvino'
    }
    next()
}