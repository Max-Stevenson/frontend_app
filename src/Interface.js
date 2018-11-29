$(document).ready(function() {
  var tracker = new Tracker();
  $('#welcome').text("Weight Tracker App");

  var data = [
	  {
	    x: tracker.dates,
	    y: tracker.weights,
	    type: 'line'
	  }
	];

	$("#submit_data").click(function(){
		var date = document.getElementById('date_entry').value;
		var weight = document.getElementById('weight_entry').value;
		tracker.log_weight(date, weight);
	})

	$("#plot_data").click(function(){
		Plotly.newPlot('myPlot', data);
	});
})