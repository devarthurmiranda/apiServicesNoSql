const { checkSchema } = require('express-validator');

module.exports = {
  owner: checkSchema({
    email: {
      isLength: {
        errorMessage: "Email is required",
        options: { min: 1 },
      },
      trim: true,
      isEmail: {
        errorMessage: "Email is not valid",
      },
    },
    password: {
      isLength: {
        errorMessage: "Password must be at least 6 characters long",
        options: { min: 6 },
      },
    },
  }),
};