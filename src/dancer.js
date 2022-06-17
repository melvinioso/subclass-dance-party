// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.setPosition(top, left);
  this.step();
  this._timeBetweenSteps = timeBetweenSteps;
};

// now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
// this one sets the position to some random default point within the body

Dancer.prototype.step = function() {
  var context = this;
  setTimeout(function() { context.step(); }, context._timeBetweenSteps);
};

// Use css top and left properties to position our <span> tag
// where it belongs on the page. See http://api.jquery.com/css/
Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};