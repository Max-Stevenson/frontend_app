$(document).ready(function() {
  var tracker = new Tracker();
  $('#welcome').text("Health Tracker App");

  var data = [
	  {
	    x: tracker.dates,
	    y: tracker.weights,
	    type: 'line'
	  }
	];

	var layout = {
	  title: 'Your Weight',
	  xaxis: {
	    title: 'Date',
	  },
	  yaxis: {
	    title: 'Weight',
	  }
	};

	function scrub_data() {
		myPlot.data = [{x: null, y: null, type: 'line'}];
		data = [{x: null, y: null, type: 'line'}];
	}

	function prep_data() {
		data = [{x: tracker.dates, y: tracker.weights, type: 'line'}];
	}
  

	$("#submit_data").click(function(){
		var date = document.getElementById('date_entry').value;
		var weight = document.getElementById('weight_entry').value;
		tracker.log_weight(date, weight);
		console.log(date, weight);
	})

	$("#clear_data").click(function(){
		tracker.clear_data();
		Plotly.purge(myPlot);
		scrub_data();
		prep_data();
		console.log(tracker.dates);
		console.log(tracker.weights);
		console.log(data);
	})

	$("#plot_data").click(function(){
		Plotly.newPlot('myPlot', data, layout);
	});
})