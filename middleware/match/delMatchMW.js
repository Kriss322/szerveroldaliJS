/**
 * Removes a match from the database, the entity used here is: res.locals.match
 * Redirects to /swap after delete
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        if (typeof res.locals.match === 'undefined') {
            return next();
        }

        res.locals.match.remove(err => {
            if (err) {
                return next(err);
            }

            return res.redirect(`/swap`);
        });
    };
};