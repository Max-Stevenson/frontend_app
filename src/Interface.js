$(document).ready(function() {
  var tracker = new Tracker();
  $('#welcome').text("JS is working");

  var data = [
	  {
	    x: ['2013-10-04', '2013-11-04', '2013-12-04'],
	    y: [80, 85, 87],
	    type: 'scatter'
	  }
	];

  var tester = document.getElementById('tester');
	Plotly.newPlot('tester', data);
})