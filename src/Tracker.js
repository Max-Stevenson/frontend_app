function Tracker() {
	this.logged_weight = []
}

Tracker.prototype.log_weight = function(date, weight) {
	this.logged_weight.push({date: weight})
};