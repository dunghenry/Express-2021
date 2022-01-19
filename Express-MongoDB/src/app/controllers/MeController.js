const Course = require('../models/Courses');
const { mutipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');
class MeController{
    storedCourses(req, res, next){
        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
        .then(([courses, deletedCount]) =>
            res.render('me/stored-courses',{
                deletedCount: deletedCount,
                courses: mutipleMongooseToObject(courses),
            })
        )
        .catch(next)

        // Course.countDocumentsDeleted().then(deletedCount =>{
        //     console.log(deletedCount)
        // })
        // .catch(()=>{});

        // Course.find({})
        //     .then(courses => res.render('me/stored-courses',{
        //         courses: mutipleMongooseToObject(courses),
        //     })
        //     )
        //     .catch(next);
    }
    trashCourses(req, res, next){
        Course.findDeleted({})
            .then(courses => res.render('me/trash-courses',{
                courses: mutipleMongooseToObject(courses),
            }))
            .catch(next);
    }
    newsCourses(req, res){
        res.send('oke');
    }
    
}

module.exports = new MeController;