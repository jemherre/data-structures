

// Instantiate a new graph
var Graph = function() {
  //storage
  this.storage = {};
};

var GraphNode = function(val){
  this.value = val;//value
  this.edges = {}; //curr ---> other node
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //creates node
  this.storage[node] = new GraphNode(node);
  //console.log(this.storage.node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.storage.hasOwnProperty(node) ? true : false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //iterate through edgeFrom and delete reference

  for(var key in this.storage){
   // console.log(this.storage[key].edges);
    if(this.storage[key].edges.hasOwnProperty(node)){
      delete this.storage[key].edges[node]; //create test for the undefined references
    }
  }
  //check for the  key in graph node
  if(this.contains(node)){
    delete this.storage[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.storage[fromNode].edges.hasOwnProperty(toNode); //&& this.storage[fromNode].hasOwnProperty(toNode)
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) { // A ---> B
  this.storage[fromNode].edges[toNode] = toNode;
  this.storage[toNode].edges[fromNode] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.storage[fromNode].edges[toNode];
  delete this.storage[toNode].edges[fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //iterate over the graph nodes
  for(var key in this.storage) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 addNode --> O(1) Constant
 contain --> O(1) Constant
 removeNode --> O(n) Linear
 hasEdge --> O(1) Constant
 addEdge --> O(1) Constant
 removeEdge --> O(1) Constant
 forEachNode --> O(n) Linear
 */


