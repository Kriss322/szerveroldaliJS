/**
 * Removes a fish from the database, the entity used here is: res.locals.fish
 * Redirects to /login after delete
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};