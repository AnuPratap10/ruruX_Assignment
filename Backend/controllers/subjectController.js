const Subject = require("../Models/SubjectSchema");


exports.createSubject = async (req, res) => {
  try {
    const subject = new Subject(req.body);
    await subject.save();
    res.status(201).json(subject);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};


exports.getAllSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find();
    res.json(subjects);
  } catch (err) {
    res.status(500).json({message: err.message});
  }
};


exports.getSubjectById = async (req, res) => {
  try {
    const subject = await Subject.findById(req.params.id);
    if (!subject) {
      return res.status(404).json({message: "Subject not found"});
    }
    res.json(subject);
  } catch (err) {
    res.status(500).json({message: err.message});
  }
};

// Update a subject by ID
exports.updateSubject = async (req, res) => {
  try {
    const {id} = req.params;
    const subject = await Subject.findByIdAndUpdate(id, req.body, {new: true});
    if (!subject) {
      return res.status(404).json({message: "Subject not found"});
    }
    res.json(subject);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};

// Delete a subject by ID
exports.deleteSubject = async (req, res) => {
  try {
    const {id} = req.params;
    const subject = await Subject.findByIdAndDelete(id);
    if (!subject) {
      return res.status(404).json({message: "Subject not found"});
    }
    res.json({message: "Subject deleted successfully"});
  } catch (err) {
    res.status(500).json({message: err.message});
  }
};
