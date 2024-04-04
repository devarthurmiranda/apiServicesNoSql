const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "Service Operations API",
        version: "1.0.0",
        description:
        "This is a college project for a service application",
        license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
        name: "Swagger",
        url: "https://swagger.io",
        email: "arthurf405@gmail.com",
        },
    },
};

const options = {
    swaggerDefinition,
    apis: ["./router/routes.js", "./validator/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;