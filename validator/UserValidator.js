const {checkSchema} = require('express-validator');

module.exports = {
    user: checkSchema({
        email: {
            isLength: {
                errorMessage: 'Email is required',
                options: {min: 1}
            },
            trim:true,
            isEmail: {
                errorMessage: 'Email is not valid'
            }

        },
        password: {
            isLength: {
                errorMessage: 'Password must be at least 6 characters long',
                options: {min: 6}
            },
            isStrongPassword: {
                errorMessage: 'Password must be at least 6 characters long, and contain at least one uppercase letter, one lowercase letter, one number, and one special character'
            }
        },
        description: {
            isLength: {
                errorMessage: 'Description is required',
                options: {min: 1}
            }
        }
    })
}