var SquareDancer = function(top, left, timeBetweenSteps, $node) {
  Dancer.call(this, top, left, timeBetweenSteps, $node);
  this.$node.addClass('Square');
};

SquareDancer.prototype = Object.create(Dancer.prototype);

SquareDancer.prototype.constructor = SquareDancer;

SquareDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // this.$node.toggle();
};