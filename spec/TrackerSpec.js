describe("Tracker", function() {
  var tracker;

  beforeEach(function() {
    tracker = new Tracker();
 	});

 	it("logged weight should start empty", function() {
    expect(tracker.logged_weight).toEqual([]);
  });

  it("Should store date and weight", function(){
  	var date = new Date;
  	var weight = 82
  	tracker.log_weight(date, weight);
  	expect(tracker.logged_weight).toContain({date: weight})
  });

  it("User should can plot their weight over time", function() {
  	var date = new Date;
  	var weight = 82
  	tracker.log_weight(date, weight);
  	tracker.plot_weight();
  	expect
  })
});