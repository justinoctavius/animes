const jwt = require('jsonwebtoken');
const config = require('../config/config');

const getToken = user => {
    return jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
    }, config.JWT_SECRET, {
        expiresIn: '24h'
    });
}

const isAuth = (req, res, next) => {
    const token = req.header.authorization;
    if(token){
        const onlyToken = token.slice(7, token.length);
        jwt.verify(onlyToken, config.JWT_SECRET, (err, decode) => {
            if(err){
                return res.send({error: 'Token invalido 😠'})
            }
            req.user = decode;
            return next();
        })
    }else{
        return res.send({error: 'Token no suministrado 🤔'})
    }
}

const isAdmin = (req, res, next) => {
    if(req.user && req.user.isAdmin){
        return next();
    }

    return res.send({error: 'No eres administrador 🙂'});
}

module.exports = {getToken, isAuth, isAdmin}