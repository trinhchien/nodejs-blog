const Course = require('../models/Course')

class SiteController {
    index(req, res, next) {
        Course.find({})
        .then(courses => res.render('home'))
        .catch(error => next(error));
    }



    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
