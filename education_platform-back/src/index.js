import express from 'express';
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import cors from 'cors';

import usersRoutes from './Routes/users.js'


const app = express()
const PORT =5000

app.use(bodyParser.json());

app.use('/users',usersRoutes);

app.get("/", (req,res) => {
    console.log("[TEST]!");

    res.send('Hello from home page')
});

app.listen(PORT , () => console.log(`Server running on port : http://localhost:${PORT}`));