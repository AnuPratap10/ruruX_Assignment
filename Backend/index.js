const express = require("express");
const cors = require("cors");
const {connection} = require("./Config/db");

const app = express();


// Import route files from route folder

const studentRoutes = require('./routes/studentRoutes');
const streamRoutes = require('./routes/streamRoutes');
const subjectRoutes = require('./routes/subjectRoutes');
const marksRoutes = require('./routes/marksRoutes');

app.use(cors());
app.use(express.json());


app.use('/api', studentRoutes);
app.use('/api', streamRoutes);
app.use('/api', subjectRoutes);
app.use('/api', marksRoutes);



app.listen(8000, async () => {
  try {
    await connection;
    console.log("connect to DB successfully Great!");
  } catch (err) {
    console.log(err, "Connection to DB Failed");
  }
});
