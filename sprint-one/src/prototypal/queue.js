var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.storage = {};
  obj.first = 0;
  obj.end = 0;
  obj.count = 0;

  return obj;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  if (this.objSize === 0) this.storage[this.first] = value;
  else this.storage[this.count] = value;

  this.end = this.count;
  this.count++;
};

queueMethods.dequeue = function(){
  if(this.count === 0) return 0;//size == 0
  var value = this.storage[this.first];
  this.storage[this.first] = undefined;//clear <key,val>
  if(this.end === this.first){//size == 1
    this.count = 0;//reset
  } else { //size > 1
    for(var key in this.storage){
      if(key != '0'){//only do once
        //if end points to this index
        if(this.end == Number(key) ) this.end = this.first;//adjust end pointer
        this.storage[this.first] = this.storage[key];//update first pointer
        this.storage[key] = undefined;//clear
        break;
      }
    }
  }
  return value;
};

queueMethods.size = function(){
  if(this.count === 0) return 0;
  if(this.end === this.first) return 1;
  var size = 2;
  for(var key in this.storage){
    if(key !== '0'){//only do once
        size += this.end - Number(key);
        break;
    }
  }
  return size;
};