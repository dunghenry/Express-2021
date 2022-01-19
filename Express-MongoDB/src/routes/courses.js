const express = require("express");
const router = express.Router();

const courseController = require('../app/controllers/CoursesController');
router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.put('/:id', courseController.update);
router.post('/handle-form-actions', courseController.handleFormActions);
router.patch('/:id/restore', courseController.restore);
router.delete('/:id', courseController.delete);
router.delete('/:id/force', courseController.forceDelete);
router.get('/:id/edit', courseController.edit);
router.get('/:slug', courseController.show);
module.exports = router;