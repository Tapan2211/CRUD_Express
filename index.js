const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");

const createNewUser = require('./routes/user.route');

const app = express();
//This line for static image or url to get access on browser or else
app.use("/uploads",express.static("uploads"));
// enable cors
app.use(cors());
app.options("*", cors());


const PORT = 8081;
const DB_URI = 'mongodb://localhost:27017/test';
// const DB_URI = "mongodb+srv://tghataliya:opfVe8sdf9LzxkUM@cluster0.vwzc2vc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to DB", DB_URI))
    .catch((err) => console.error("Failed to connect to DB", err));

app.use(express.json());
app.use('/user', createNewUser);


app.listen(PORT, (error) => {
    if (!error) {
        console.log(`Server is running on port ${PORT}`);
    } else {
        console.log(`Error occurred, server can't start ${error}`);
    }
})