const Owner = require("../model/Owner");
const { validationResult, matchedData } = require("express-validator");

module.exports = {
  
  register: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const data = matchedData(req);
    const entity = new Owner(data);
    await entity.save();
    res.json(data);
  },

  get: async (req, res) => {
    const email = req.query.email;
    const entity = await Owner.findOne({ email });
    res.json(entity);
  },

  getAll: async (req, res) => {
    const entity = await Owner.find();
    res.json(entity);
  },

  update: async (req, res) => {
    const email = req.query.email;
    const data = req.body; // Assuming data to update in the request body
    const entity = await Owner.findOneAndUpdate({ email }, data, {
      new: true,
    });
    res.json(entity);
  },

  delete: async (req, res) => {
    const email = req.query.email;
    const entity = await Owner.findOneAndDelete({ email });
    res.json(entity);
  },
};
