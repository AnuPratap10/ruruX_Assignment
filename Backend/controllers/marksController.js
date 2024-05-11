const Mark = require('../Models/MarksSchema');

// Create a new mark
exports.createMark = async (req, res) => {
  try {
    const mark = new Mark(req.body);
    await mark.save();
    res.status(201).json(mark);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all marks
exports.getAllMarks = async (req, res) => {
  try {
    const marks = await Mark.find().populate('stream').populate('subject');
    res.json(marks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get marks by student ID
exports.getMarksByStudentId = async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const marks = await Mark.find({ studentName: studentId }).populate('stream').populate('subject');
    res.json(marks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a mark by ID
exports.updateMark = async (req, res) => {
  try {
    const { id } = req.params;
    const mark = await Mark.findByIdAndUpdate(id, req.body, { new: true }).populate('stream').populate('subject');
    if (!mark) {
      return res.status(404).json({ message: 'Mark not found' });
    }
    res.json(mark);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a mark by ID
exports.deleteMark = async (req, res) => {
  try {
    const { id } = req.params;
    const mark = await Mark.findByIdAndDelete(id).populate('stream').populate('subject');
    if (!mark) {
      return res.status(404).json({ message: 'Mark not found' });
    }
    res.json({ message: 'Mark deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
