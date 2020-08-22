const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

function validator() {
    console.log(this.password, this.password_confirmation, 'habichuela')
    if(this.isModified('password')){
        if (this.password === this.password_confirmation){
            return true
        }else{
            return false  
        }
    }
    return true
}

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: [16, 'Nombre de usuario muy largo debe ser menor o igual a 16 caracteres'],
        minlength: [3, 'Nombre de usuario muy corto debe ser mayor o igual a 3 caracteres']
    },
    email: {
        type: String, 
        required: true,
        unique: true
    },
    password: {
        type: String, 
        required: true,
        minlength: [8, 'la contraseña es muy corta debe ser mayor o igual a 8 caracteres'],
        validate: {
            validator: validator,
            message: 'Las contraseñas no coinciden'
        }
    },
    favorite: {
        type: Array
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
});

userSchema.virtual('password_confirmation').get( _ => {
    return this.p_c;
}).set( password => {
    this.p_c = password;
});

userSchema.pre('save', function(next) {
    if(this.isModified('password')){
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(this.password, salt);
        this.password = hash;
        next();
    }
});

userSchema.methods.comparePassword = function(password) {
    const isValid = bcrypt.compareSync(password, this.password);
    return isValid
}

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;