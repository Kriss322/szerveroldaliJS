/**
 * Load a match from the database using the :matchid param
 * The result is saved to res.locals.match
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const MatchModel = requireOption(objectrepository, 'MatchModel');

    return function(req, res, next) {
        MatchModel.findOne(
            {
                _id: req.params.matchid
            },
            (err, match) => {
                if (err || !match) {
                    return next(err);
                }

                res.locals.match = match;
                return next();
            }
        );
    };
};