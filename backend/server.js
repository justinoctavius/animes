const express = require('express');
const router = require('./routes');
const cors = require('cors');
const { PORT } = require('./config/config')
const app = express();

//middleware
app.use(express.json());
app.use(cors())

//database
require('./database/database');

//routes
app.use('/api', router);

//server
app.listen(PORT, _ => console.log('server running on port: ' + PORT))