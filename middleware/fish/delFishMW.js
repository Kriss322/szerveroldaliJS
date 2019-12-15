/**
 * Removes a fish from the database, the entity used here is: res.locals.fish
 * Redirects to /login after delete
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        if (typeof res.locals.fish === 'undefined') {
            return next();
        }

        res.locals.fish.remove(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/login');
        });
    };
};