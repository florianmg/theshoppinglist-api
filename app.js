const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const foodRoutes = require('./routes/food.routes');
const recipesRoutes = require('./routes/recipes.routes');

require("dotenv").config();
const corsConfig = { credentials: true, origin: process.env.FRONT_ENDPOINT };

app.use(express.json());
app.use(cors(corsConfig));

mongoose.connect(
  process.env.DATABASE_LINK,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  () => {
    console.log("✅ Database connected");
  }
);

app.listen(process.env.PORT, () => {
  console.log("✅ Server started");
});

app.use('/api', foodRoutes);
app.use('/api', recipesRoutes);


module.exports = app;
