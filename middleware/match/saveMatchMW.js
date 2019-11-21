/**
 * Using POST params update or save a match to the database
 * If res.locals.match is there, it's an update otherwise this middleware creates an entity
 * Redirects to /swap after success
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};