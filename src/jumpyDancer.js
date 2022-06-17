var JumpyDancer = function(top, left, timeBetweenSteps, $node) {
  Dancer.call(this, top, left, timeBetweenSteps, $node);
  this.$node.addClass('Jumpy');
};

JumpyDancer.prototype = Object.create(Dancer.prototype);

JumpyDancer.prototype.constructor = JumpyDancer;

JumpyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // this.$node.toggle();
};