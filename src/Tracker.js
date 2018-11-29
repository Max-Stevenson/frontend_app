function Tracker() {
	this.dates = []
	this.weights = []
}

Tracker.prototype.log_weight = function(date, weight) {
	this.dates.push(date);
	this.weights.push(weight);
};

Tracker.prototype.clear_data = function() {
	this.dates = [];
	this.weights = [];
};
