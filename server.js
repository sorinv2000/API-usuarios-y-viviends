const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const swaggerSetup = require('./config/swagger');
const userRoutes = require('./routes/userRoutes');
const houseRoutes = require('./routes/houseRoutes');

app.use(bodyParser.json());

swaggerSetup(app);

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/users/:userId/houses', houseRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/api/v1`);
});
