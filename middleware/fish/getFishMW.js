/**
 * Load a fish from the database using the :fishid param
 * The result is saved to res.locals.fish
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const FishModel = requireOption(objectrepository, 'FishModel');

    return function(req, res, next) {
        FishModel.findOne(
		{ 
			_id: req.params.fishid 
		}, 
		(err, fish) => {
            if (err || !fish) {
                return next(err);
            }

            res.locals.fish = fish;
            return next();
        });
    };
};