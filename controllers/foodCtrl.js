var Food = require('../models/Food');


module.exports = {

	addFood: function( req, res ) {
		new Food(req.body).save(function( err, data ) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(data);
			}
		});
	},

	getFood: function( req, res ) {
		Food.find().then(function( response ) {
			res.send(response);
		});
	},

	addReview: function( req, res ) {
		Food.findById(req.query.id, function( err, foodItem) {
			if (err) {
				res.status(500).send(err);
			} else {
				foodItem.reviews.push(req.body);
				foodItem.save(function( err, data ) {
					if (err) {
						res.status(500).send(err);
					} else {
						res.send(data);
					}
				});
			}
		});
	},

	getOneReview: function( req, res ) {
		Food.findById(req.query.foodId, function( err, foodItem ) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(foodItem.reviews.id(req.query.reviewId));
			}
		});
	},

	deleteFood: function( req, res ) {
		Food.findByIdAndRemove(req.params.id, function( err, foodItem ) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(foodItem);
			}
		});
	}

}