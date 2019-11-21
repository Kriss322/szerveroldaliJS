/**
 * Using POST params update or save a fish to the database
 * If res.locals.fish is there, it's an update otherwise this middleware creates an entity
 * Redirects to /index after success
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};