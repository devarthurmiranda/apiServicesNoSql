const User = require("../model/User");
const { validationResult, matchedData } = require("express-validator");

module.exports = {

  register: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const data = matchedData(req);
    const entity = new User(data);
    await entity.save();
    res.json(data);
  },

  get: async (req, res) => {
    const email = req.query.email;
    const entity = await User.findOne({ email });
    res.json(entity);
  },

  getAll: async (req, res) => {
    const entity = await User.find();
    res.json(entity);
  },

  update: async (req, res) => {
    try {
      const email = req.query.email;
      const data = req.body; // Assuming data to update in the request body
      if (!email || !data) {
        return res
          .status(400)
          .json({ message: "Email and data are required for update" });
      }

      const updatedUser = await User.findOneAndUpdate({ email }, data, {
        new: true,
      });
      
      // Check if user exists
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(updatedUser);
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
  },

  delete: async (req, res) => {
    const email = req.query.email;
    const entity = await User.findOneAndDelete({ email });
    res.json(entity);
  },
};
