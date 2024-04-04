const { checkSchema } = require('express-validator');

module.exports = {
  employee: checkSchema({
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
    jobTitle: {
        isLength: {
            errorMessage: "Job Title is required",
            options: { min: 1 },
        }
    },
    description: {
        isLength: {
            errorMessage: "Description is required",
            options: { min: 1 },
        }
    },
  }),
};