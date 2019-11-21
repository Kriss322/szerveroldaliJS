/**
 * Removes a match from the database, the entity used here is: res.locals.match
 * Redirects to /swap after delete
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};