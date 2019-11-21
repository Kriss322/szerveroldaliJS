/**
 * Load a fish from the database using the :fishid param
 * The result is saved to res.locals.fish
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};