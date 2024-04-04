const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  email: String,
  password: String,
  jobTitle: String,
  description: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const modelName = 'Employee';

if(mongoose.connection && mongoose.connection.models[modelName]){
    module.exports = mongoose.connection.models[modelName];
} else {
    module.exports = mongoose.connection.model(modelName, schema)
}