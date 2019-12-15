/**
 * Using POST params update or save a fish to the database
 * If res.locals.fish is there, it's an update otherwise this middleware creates an entity
 * Redirects to /index after success
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const FishModel = requireOption(objectrepository, 'FishModel');

    return function(req, res, next) {
        if (
            typeof req.body.name === 'undefined' ||
			typeof req.body.gender === 'undefined' ||
			typeof req.body.color === 'undefined' ||
			typeof req.body.age === 'undefined' ||
            typeof req.body.bio === 'undefined' ||
			typeof req.body.dislikes === 'undefined' ||
            typeof req.body.favorites === 'undefined'
        ) {
            return next();
        }

        if (typeof res.locals.fish === 'undefined') {
            res.locals.fish = new FishModel();
        }

        res.locals.fish.name = req.body.name;
        res.locals.fish.gender = req.body.gender;
        res.locals.fish.color = req.body.color;
		res.locals.fish.age = req.body.age;
        res.locals.fish.bio = req.body.bio;
        res.locals.fish.dislikes = req.body.dislikes;
		res.locals.fish.favorites = req.body.favorites;

        res.locals.fish.save(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/index');
        });
    };
};