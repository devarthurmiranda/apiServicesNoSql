const express = require('express');

// Constants
const router = express.Router();
const UserValidator = require('../validator/UserValidator');
const UserController = require('../controller/UserController');
const EmployeeValidator = require('../validator/EmployeeValidator');
const EmployeeController = require('../controller/EmployeeController');
const OwnerValidator = require('../validator/OwnerValidator');
const OwnerController = require('../controller/OwnerController');

// Public Routes
router.get('/', (req, res) => {
    res.json({message: 'Welcome to the API'});
});

// User Routes
router.get("/user/getAll", UserController.getAll);
router.get('/user/get', UserController.get);
router.post('/user/register', UserValidator.user, UserController.register);
router.post('/user/update', UserController.update);
router.delete('/user/delete', UserController.delete);

// Employee Routes
router.get('/employee/getAll', EmployeeController.getAll);
router.get('/employee/get', EmployeeController.get);
router.post('/employee/register', EmployeeValidator.employee, EmployeeController.register);
router.post('/employee/update', EmployeeController.update);
router.delete('/employee/delete', EmployeeController.delete);

// Owner Routes
router.get('/owner/getAll', OwnerController.getAll);
router.get('/owner/get', OwnerController.get);
router.post('/owner/register', OwnerValidator.owner, OwnerController.register);
router.post('/owner/update', OwnerController.update);
router.delete('/owner/delete', OwnerController.delete);

module.exports = router;