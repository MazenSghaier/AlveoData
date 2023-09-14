import express from 'express';
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import cors from 'cors';

import usersRoutes from './Routes/routerUsers.js'
import coursesRoutes from './Routes/routerCourses.js'

import { UserModel } from './Module/User.js'


const app = express()
const PORT =5000
const ConnectionURL = "mongodb+srv://Alveodata:Alveodata123@firstcluster.v33gplb.mongodb.net/?"


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

mongoose.connect(ConnectionURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    app.listen(PORT , () => console.log(`Server running on port : http://localhost:${PORT}`));
    console.log("Connected!");
  })
  .catch((err) => {
    console.error(err);
  });


app.use('/users', usersRoutes);

app.use('/courses', coursesRoutes);

app.get("/", (req,res) => {
    console.log("[TEST]!");

    res.send('Hello from home page')
});

