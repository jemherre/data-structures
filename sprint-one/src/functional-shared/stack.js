var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  //properties
  someInstance.storage = {};
  someInstance.objSize = 0;

  _.extend(someInstance,Stack.stackMethods);

  return someInstance;
};

Stack.stackMethods = {};

Stack.stackMethods.push = function(value){
  this.storage[this.objSize] = value;
  this.objSize++;
};

Stack.stackMethods.pop = function(){
  if(this.objSize === 0) return;
  var value = this.storage[this.objSize -1];
  this.storage[this.objSize -1] == undefined;//clear elem
  this.objSize--;
  return value;
};

Stack.stackMethods.size = function(){
  return this.objSize;
};


