const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    email: String,
    password: String,
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

const modelName = 'Owner';

if (mongoose.connection && mongoose.connection.models[modelName]) {
  module.exports = mongoose.connection.models[modelName];
} else {
  module.exports = mongoose.connection.model(modelName, schema);
}