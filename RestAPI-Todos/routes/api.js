const express = require('express');
const router = express.Router();
const apiController = require('../controller/apiController');
const API = (app) =>{
    router.delete('/todo/:id', apiController.deleteTodo);
    router.post('/add', apiController.postTodo);
    router.get('/search/:id', apiController.searchTodoId);
    router.get('/todos', apiController.getAllTodos);
    return app.use('/api/v1/', router);
}
module.exports = API;