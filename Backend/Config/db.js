require("dotenv").config();

const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const connection = mongoose.connect(
  `mongodb+srv://anu:anu@cluster0.shzbu0m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
);
module.exports={connection}


// mongodb+srv://anu:<password>@cluster0
// .shzbu0m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
