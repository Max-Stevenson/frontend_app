describe("Tracker", function() {
  var tracker;

  beforeEach(function() {
    tracker = new Tracker();
 	});

 	it("logged weight should start empty", function() {
    expect(tracker.weights).toEqual([]);
  });

  it("Should store date and weight", function(){
  	var date = new Date("01/01/2018");
  	var weight = 82
  	tracker.log_weight(date, weight);
  	expect(tracker.dates).toContain(date)
  	expect(tracker.weights).toContain(weight)
  });

  it("Should be able to clear previous data", function() {
    var date = new Date("01/01/2018");
    var weight = 82
    tracker.log_weight(date, weight);
    tracker.clear_data();
    expect(tracker.dates).toEqual([]);
    expect(tracker.weights).toEqual([]);
  });
});