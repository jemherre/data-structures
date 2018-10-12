var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //create new Tree
  //push the new Tree into this.children
  this.children.push(new Tree(value));
};

treeMethods.contains = function(target) {
  //check if current tree value is target
  if (this.value === target) {
  //return true
    return true;
    //otherwise iterate over this.children
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].value === target) {
        return true;
      }
      //also check if it has children
      if(this.children[i].children.length > 0){
        if(this.children[i].contains(target) === true) return true;
      }
    }
  }
  return false; //if it did not return true
};



/*
 * Complexity: What is the time complexity of the above functions?
 * addchild() --> constant time
 * contains() --> linear time
 */
