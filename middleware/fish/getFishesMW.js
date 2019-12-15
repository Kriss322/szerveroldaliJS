/**
 * Load all fishes from the database
 * The result is saved to res.locals.fishes
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const FishModel = requireOption(objectrepository, 'FishModel');

    return function(req, res, next) {
        FishModel.find({}, (err, fishes) => {
            if (err) {
                return next(err);
            }

            res.locals.fishes = fishes;
            return next();
        });
    };
};