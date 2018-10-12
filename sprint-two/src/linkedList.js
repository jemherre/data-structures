var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //var node = Node(value)
    var node = Node(value);
    //check if list.head is null
    if (list.head === null) { //empty
      list.head = node; //if true set list.head to
    } else { //not empty
      list.tail.next = node;  //update next to point to current node
    }
    list.tail = node;//update new tail always
  };

  list.removeHead = function() {
    //point head to list.head.next
    var head = list.head.value;
    list.head = list.head.next;
    return head;
  };

  list.contains = function(target) {
    //cur node = list.head
    var currentNode = list.head;
    //itterate until cur.node !== null
      while(currentNode !== null) {
        if(currentNode.value == target) {
          return true;
        }
        currentNode = currentNode.next;
      }
    return false;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail() && removeHead() --> constant time
 * contains() --> linear time
 */
