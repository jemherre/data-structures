var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.begin = 0;
  this.end = 0;
  this.count = 0;
};

Queue.prototype.enqueue = function(value){
  if(this.count == 0) this.storage[this.begin] = value;//init
  else this.storage[this.count] = value;

  this.end = this.count;
  this.count++;
};

Queue.prototype.dequeue =function(){
  if(this.count === 0) return; //size == 0
  var value = this.storage[this.begin];
  this.storage[this.begin] = undefined;
  if(this.begin == this.end){//size == 1
    this.count = 0;//reset
  } else {//adjust end pointer
    for(var key in this.storage){
      if(key != '0'){//only do once
        if(this.end == Number(key)) this.end = this.begin;//update end whenit points to begin
        this.storage[this.begin] = this.storage[key];//update begin pointer
        this.storage[key] = undefined;//clear elem
        break;
      }
    }
  }
  return value;
};

Queue.prototype.size = function(){
  if(this.count === 0) return 0; //size 0
  if(this.end === this.begin) return 1;//size 1
  var length = 2;
  console.log(length,this.end);
  for(var key in this.storage){
    if(key != '0'){//only do once
      length += this.end - Number(key);
      break;
    }
  }
  return length;
};

var queue = new Queue();

