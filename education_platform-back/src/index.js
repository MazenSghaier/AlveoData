import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import usersRoutes from './Routes/routerUsers.js';
import coursesRoutes from './Routes/routerCourses.js';

dotenv.config();

const app = express();
const PORT = 5000;
const ConnectionURL = process.env.MONGODB_Connection_URL;

// Configure CORS middleware
const corsOptions = {
  origin: 'http://localhost:3000', // Replace with your React app's URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Allow cookies, if your API uses cookies for authentication
};


app.use(cors(corsOptions));

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

mongoose.connect(ConnectionURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
    console.log("Connected!");
  })
  .catch((err) => {
    console.error(err);
  });

app.use('/users', usersRoutes);
app.use('/courses', coursesRoutes);

app.get("/", (req, res) => {
  console.log("[TEST]!");
  res.send('Hello from home page');
});
