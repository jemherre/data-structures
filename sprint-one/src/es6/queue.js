class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage ={};
    this.begin = 0;
    this.end = 0;
    this.count = 0;
  }

  enqueue(value){
    if(this.count == 0) this.storage[this.begin] = value;
    else this.storage[this.count] = value;

    this.end = this.count;
    this.count++;
  }

  dequeue(){
    if(this.count == 0) return; //empty
    var value = this.storage[this.begin];
    if(this.end == this.begin){
      this.count = 0;//reset
    } else {
      for(var key in this.storage){
        if(key != '0'){
          if(this.end == Number(key)) this.end = this.begin;
          this.storage[this.begin] = this.storage[key];
          this.storage[key] = undefined;//clear
          break;
        }
      }
    }
    return value;
  }

  size(){
    if(this.count == 0) return 0; //size = 0
    if(this.end == this.begin) return 1; //size = 1
    var length = 2;
    for(var key in this.storage){
      if(key != '0'){
        length += this.end - Number(key);
        break;
      }
    }
    return length;
  }

}

var queue = new Queue();
