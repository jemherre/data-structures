var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.storage = {};
  obj.objSize = 0;

  return obj;
};

var stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.objSize] = value;
  this.objSize++;
};

stackMethods.pop = function(){
  if(this.objSize == 0) return;
  var value = this.storage[this.objSize - 1];
  this.storage[this.objSize - 1] = undefined;
  this.objSize--;
  return value;
};

stackMethods.size = function(){
  return this.objSize;
};


