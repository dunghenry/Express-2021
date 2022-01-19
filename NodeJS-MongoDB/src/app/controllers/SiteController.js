const Course = require('../models/Courses');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class SiteController{
    index(req, res, next) {
        // Course.find({}, function(err, courses){
        //     if(!err){
        //         res.json(courses)
        //     } 
        //     else {
        //         res.status(400).json({"error": "ERROR"});
        //     }
        // })

        Course.find({})
            .then(courses => {
                // courses = courses.map(course => course.toObject())
                res.render('index', {courses: mutipleMongooseToObject(courses)})
            })
            .catch(next);
    }

    search(req, res){
        res.render('search');
    }
}

module.exports = new SiteController;