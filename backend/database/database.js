const mongoose = require('mongoose');
const {MONGODB_URL} = require('../config/config')
mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(res => console.log('db is connected'))
    .catch(err => console.log(err.reason))