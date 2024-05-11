// models/StudentSchema.js
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  year: {type: Number, required: true},
  stream: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Stream",
    required: true,
  },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject",
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {type: String, required: true},
  email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Student", studentSchema);
