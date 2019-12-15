/**
 * Using POST params update or save a match to the database
 * If res.locals.match is there, it's an update otherwise this middleware creates an entity
 * Redirects to /swap after success
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const MatchModel = requireOption(objectrepository, 'MatchModel');

    return function(req, res, next) {
        if (
            typeof req.body.time === 'undefined' ||
            typeof req.body.pair1 === 'undefined' ||
            typeof req.body.pair2 === 'undefined'
        ) {
            return next();
        }

        if (typeof res.locals.match === 'undefined') {
            res.locals.match = new MatchModel();
        }


        res.locals.match.time = req.body.iz;
        res.locals.match.pair1 = req.body.pair1;
        res.locals.match.pair2 = req.body.pair2;

        res.locals.match.save(err => {
            if (err) {
                return next(err);
            }

            return res.redirect(`/swap`);
        });
    };
};