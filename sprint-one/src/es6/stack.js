class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.objSize = 0;
  }

  push(value){
    this.storage[this.objSize] = value;
    this.objSize++;
  }

  pop(){
    if(this.objSize == 0) return; //empty
    var value = this.storage[this.objSize - 1];
    this.storage[this.objSize - 1] = undefined;
    this.objSize--;
    return value;
  }

  size(){
    return this.objSize;
  }

}

var stack = new Stack();