/**
 * Load all matches from the database
 * The result is saved to res.locals.matches
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const MatchModel = requireOption(objectrepository, 'MatchModel');

    return function(req, res, next) {
        if (typeof res.locals.fish === 'undefined') {
            return next();
        }

        MatchModel.find({ _befozo: res.locals.fish._id }, (err, matches) => {
            if (err) {
                return next(err);
            }

            res.locals.matches = matches;
            return next();
        });
    };
};