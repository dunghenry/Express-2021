const express = require('express');
const apiController = require('../controller/ApiController.js');
const router = express.Router();

const API = (app) =>{
    router.get('/users', apiController.getAllUsers);
    router.get('/search-user/:id', apiController.searchUser);
    router.get('/create', apiController.createUser);
    router.post('/store', apiController.store);
    router.get('/update/:id', apiController.update);
    router.put('/:id', apiController.updateUser);

    // router.put('/update-user', apiController.updateUser);
    
   
    return app.use('/api/v1/', router);
}

module.exports = API;