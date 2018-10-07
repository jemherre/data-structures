var Stack = function() {
  var someInstance = {};

// Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

// Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.pop = function() {
    if(size === 0) return; //check if storage is empty
    var value = storage[size - 1];
    storage[size - 1] = undefined; //clear index/elem
    size--;
    return value;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
