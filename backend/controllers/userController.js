const { User } = require("../models");
const { getToken } = require("../helpers/jwt");
const ctrl = {};

ctrl.login = async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(user){
        const isValid = user.comparePassword(password);
        if(isValid){
            res.send({msg: 'Bienvenido 🥳', 
                    data: {
                        _id: user._id,
                        name: user.name,
                        email: user.email,
                        isAdmin: user.isAdmin,
                        token: getToken(user)
                    }})
        }else{
            res.send({error: 'Contraseña incorrecta 😑'})
        }
    }else{
        res.send({error: 'Usuario no encontrado 😓'})
    }
}

ctrl.register = async (req, res) => {
    const {email, password, name, password_confirmation} = req.body;
    const user = await User.findOne({
        $or: [
            {email},
            {name}
        ]
    });
    if(user){
        res.send({error: 'Ese usuario ya existe 😐'})
    }else{
        const user = new User({
            name,
            email,
            password,
            password_confirmation
        });
        user.save((error, info) => {
            if(error) {
                console.log(error)
                return res.send({error: error.message})
            }else{
                res.send({
                    msg: 'Usuario creado con exito 🤗', 
                    data: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    token: getToken(user)
                    }
                })
            }
        })
    }
}

ctrl.addFavorite = async (req, res) => {
    const {name, animeName} = req.body;
    const user = await User.findOne({name});
    if(user){
        if(user.favorite.indexOf(animeName) > -1){
            res.send({error: 'Ese anime ya fue añadido a favoritos 😐'})
        }else{
            const favorite = [...user.favorite, animeName]
            await user.updateOne({
               favorite  
            }); 
            user.save()
            res.send({msg: 'Anime añadido 👍', data: user});
        }
    
    }else{
        res.send({error: 'Usuario no encontrado 😓'});
    }
}

ctrl.getFavorite = async (req, res) => {
    const {name} = req.body;
    const user = await User.findOne({name});
    if(user){
        res.send({data: user.favorite});
    }else{
        res.send({error: 'Usuario no encontrado 😓'});
    }
}

ctrl.deleteFavorite = async (req, res) => {
    const {name, id} = req.body;
    const user = await User.findOne({name});
    if(user){
        if(user.favorite.indexOf(id) > -1){
            const favoriteFilter = await user.favorite.filter(anime => anime != id);
            await user.updateOne({
                favorite: favoriteFilter
            });
            user.save();
            res.send({msg: 'Anime favorito eliminado con exito 👌'});
        }else{
            res.send({error: 'Anime favorito no encontrado 😓'});
        }
    }else{
        res.send({error: 'Usuario no encontrado 😓'});
    }
}

module.exports = ctrl;