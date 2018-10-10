var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance.storage = {};
  someInstance.qSize = 0;
  someInstance.first = 0; //always going to be zero
  someInstance.last = 0;

  _.extend(someInstance, Queue.queueMethods);

  return someInstance;
};

Queue.queueMethods = {};

Queue.queueMethods.enqueue = function(value){
  console.log("ENQ>> ",this.first,this.last,this.qSize);
  if(this.qSize == 0 ) {//initialize
    this.storage[this.first] = value;
    this.last = this.first;
    this.qSize++;
    console.log("INIT ",this.first,this.last,this.qSize);
  }
  else {
    this.storage[this.qSize] = value;
    this.last = this.qSize;
    this.qSize++;
    console.log("ADD ",this.first,this.last,this.qSize);
  }
};

Queue.queueMethods.dequeue = function(){
  console.log("DQ>> ",this.first,this.last,this.qSize);
  if (this.last === 0) return; //when empty don't dequeue
  var value = this.first; //store first val
  this.storage[this.first] = undefined; //clear first elem
  if (this.last != this.first) { //if end != first
    for(var key in this.storage){//only do once
      this.storage[this.first] = this.storage[key];//update first, key is next elem after first
      this.storage[key] = undefined;//clear original
      break;
    }
  } else { //if end == first; then reset everything
    this.qSize = 0;
    this.first= 0;
    this.last = 0;
  }
  //console.log()
  return value;
};

Queue.queueMethods.size = function(){
  console.log("SIZE>> ",this.first,this.last,this.qSize);
  if (this.qSize < 1) return 0;
  var length = 1;
  console.log(length,JSON.stringify(this.storage));
  for(var key in this.storage){
    console.log(key);
    if(key !== '0'){//skip first elem
      console.log(Number(key),this.last);
      length += this.last - Number(key);
      console.log(length);
      break;//only do once
    }
  }
  return length;
};




