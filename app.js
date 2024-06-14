// server.js
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const kambingRouter = require('./routes/kambingRouter');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/api', kambingRouter);

sequelize.sync()
    .then(() => {
        console.log('Database connected and synchronized');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => console.log('Error: ' + err));