const express = require('express');
const apiController = require('../controller/apiController.js');
const router = express.Router();

const API = (app) =>{
    router.get('/users', apiController.getAllUsers);
    router.post('/create-user', apiController.creatNewUser);
    router.put('/update-user', apiController.updateUser);
    router.delete('/delete-user/:id', apiController.deleteUser);
   
    return app.use('/api/v1/', router);
}

module.exports = API;