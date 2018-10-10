var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage : {},
    qticket : 0,
    first : 0, //always going to be zero
    last : 0
  };

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  if(this.qticket == 0 ) {//initialize
    this.storage[this.first] = value;//both end/first point to same place
  }
  else {
    this.storage[this.qticket] = value;
    this.last = this.qticket;//update endpoint
  }
  this.qticket++;
};

queueMethods.dequeue = function(){
  if (this.qticket < 1) return; //when empty don't dequeue
  var value = this.storage[this.first]; //store first val
  this.storage[this.first] = undefined; //clear first elem
  if (this.last != this.first) { //if end != first
    for(var key in this.storage){//only do once
     if(key != '0'){
        this.storage[this.first] = this.storage[key];//update first, key is next elem after first
        this.storage[key] = undefined;//clear original
        if(this.storage[this.last] === undefined)//check end point and update
          this.last = this.first;
        break;
     }
    }
  } else { //if end == first; then reset everything
    this.qticket = 0;
  }
  return value;
};

queueMethods.size = function(){
  if (this.qticket < 1) return 0;
  if(this.last != this.first){
    var length = 2;//least num size
    for(var key in this.storage){
      if(key !== '0'){//skip first elem
        length += this.last - Number(key);
        break;//only do once
      }
    }
    return length;
  }
  return 1;
};




