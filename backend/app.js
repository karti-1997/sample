const path = require("path");
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const userRoutes=require('./routes/user');
const postRoutes=require('./routes/posts');
const getpostRoutes=require('./routes/getdata');
mongoose.connect("mongodb://localhost:27017/Ec", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
.then(()=>{
  console.log('connected to database');
})
.catch(() =>{
  console.log('connection failed');
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded( {extended: false} ));
app.use("/images", express.static(path.join("backend/images")));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Acces-Control-Methods",
        "GET, POST, PUT, PATCH, DELETE, OPTIONS"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
       "POST, PUT, GET, DELETE, OPTIONS"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});
app.use("/api/user",userRoutes);
app.use("/api/posts",postRoutes);
app.use("/api/getdata",getpostRoutes);
module.exports = app;