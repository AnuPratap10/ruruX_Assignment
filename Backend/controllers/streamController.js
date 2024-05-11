const Stream = require('../Models/StreamSchema');

// Create a new stream
exports.createStream = async (req, res) => {
  try {
    const stream = new Stream(req.body);
    await stream.save();
    res.status(201).json(stream);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all streams
exports.getAllStreams = async (req, res) => {
  try {
    const streams = await Stream.find();
    res.json(streams);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single stream by ID
exports.getStreamById = async (req, res) => {
  try {
    const stream = await Stream.findById(req.params.id);
    if (!stream) {
      return res.status(404).json({ message: 'Stream not found' });
    }
    res.json(stream);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a stream by ID
exports.updateStream = async (req, res) => {
  try {
    const { id } = req.params;
    const stream = await Stream.findByIdAndUpdate(id, req.body, { new: true });
    if (!stream) {
      return res.status(404).json({ message: 'Stream not found' });
    }
    res.json(stream);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a stream by ID
exports.deleteStream = async (req, res) => {
  try {
    const { id } = req.params;
    const stream = await Stream.findByIdAndDelete(id);
    if (!stream) {
      return res.status(404).json({ message: 'Stream not found' });
    }
    res.json({ message: 'Stream deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// 663e773a86a7454967565a93