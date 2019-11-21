/**
 * Load all fishes from the database
 * The result is saved to res.locals.fishes
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};