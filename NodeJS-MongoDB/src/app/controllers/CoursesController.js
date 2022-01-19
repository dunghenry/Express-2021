const Course = require('../models/Courses');
const { mutipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');
class CoursesController{
    show(req, res, next){
       Course.findOne({ slug: req.params.slug })
       .then(course =>{
           res.render('courses/show', {course: mongooseToObject(course) })
       })
       .catch(next);
    }
    create(req, res, next){
        res.render('courses/create');
    }
    store(req, res, next){
        req.body.image = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg`
        const course = new Course(req.body);
        course.save()
        .then(()=>res.redirect('/me/stored/courses'))
        .catch(next);
    }
    edit(req, res, next){
        Course.findById(req.params.id)
        .then(course => res.render('courses/edit', {course: mongooseToObject(course)}))
        .catch(next);
    }
    update(req, res, next){
        Course.updateOne({_id: req.params.id}, req.body)
        .then(() => res.redirect('/me/stored/courses'))
        .catch(next);
    }
    delete(req, res, next){
        Course.delete({_id: req.params.id})
        .then(() => res.redirect('/me/trash/courses'))
        .catch(next);
    }
    restore(req, res, next){
        Course.restore({_id: req.params.id})
        .then(() => res.redirect('/me/stored/courses'))
        .catch(next);
    }
    forceDelete(req, res, next){
        Course.deleteOne({_id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next);
    }

    handleFormActions(req, res, next){
        switch(req.body.action){
           case 'delete':
                    Course.delete({_id: { $in: req.body.courseIds }})
                    .then(() => res.redirect('/me/trash/courses'))
                    .catch(next);
             break;
            default:
                res.send("Action")
       }
   
    }
}

module.exports = new CoursesController;