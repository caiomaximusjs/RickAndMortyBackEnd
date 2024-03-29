require('dotenv').config();
const express = require('express');
const cors = require('cors');
const route = require('./src/routes/route');
const connectToDatabase = require('./src/database/db');
const routesSwagger = require('./src/swagger/swagger.routes')

const userRoute = require('./src/users/users.route');
const authRoute = require('./src/auth/auth.route');

const port = process.env.PORT || 3300;

const app = express();
connectToDatabase();


app.use(cors());
app.use(express.json());
app.use('/api-docs', routesSwagger)
app.use('/characters', route);
app.use('/users', userRoute);
app.use('/auth', authRoute);



app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
