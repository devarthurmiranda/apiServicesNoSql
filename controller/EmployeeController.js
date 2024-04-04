const Employee = require("../model/Employee");
const { validationResult, matchedData } = require("express-validator");

module.exports = {
  
  register: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const data = matchedData(req);
    const entity = new Employee(data);
    await entity.save();
    res.json(data);
  },

  get: async (req, res) => {
    const email = req.query.email;
    const entity = await Employee.findOne({ email });
    res.json(entity);
  },

  getAll: async (req, res) => {
    const entity = await Employee.find();
    res.json(entity);
  },

  update: async (req, res) => {
    const email = req.query.email;
    const data = req.body; // Assuming data to update in the request body
    const entity = await Employee.findOneAndUpdate({ email }, data, { new: true });
    res.json(entity);
  },

  delete: async (req, res) => {
    const email = req.query.email;
    const entity = await Employee.findOneAndDelete({ email });
    res.json(entity);
  },
};
