/**
 * Load a match from the database using the :matchid param
 * The result is saved to res.locals.match
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};