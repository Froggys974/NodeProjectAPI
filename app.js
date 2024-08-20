const express = require('express')
const app = express()
const port = 3000


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017')

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

const postRoute = require('./api/routes/postRoute');
postRoute(app);
const commentRoutes = require('./routes/commentRoute');
commentRoutes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
