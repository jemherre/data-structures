var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.objSize = 0;
};

Stack.prototype.push = function(value){
  this.storage[this.objSize] = value;
  this.objSize++;
};

Stack.prototype.pop = function(){
  if (this.objSize == 0) return;
  var value = this.storage[this.objSize - 1];
  this.storage[this.objSize - 1] = undefined;//clear <key,val>
  this.objSize--;
  return value;
};

Stack.prototype.size = function(){
  return this.objSize;
};

var stack = new Stack();


