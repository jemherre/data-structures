

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.ratio = 0;
};



HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //check the index first to see if its undefined,
  var tupple = [k,v];
  var bucket = this._storage.get(index);
  if(bucket === undefined){//check for bucket
    bucket = [];
    bucket.push(tupple);
    this._storage.set(index, bucket) //create the bucket
  } else {
    var findTupple = false;
    //console.log("Bucket: ", bucket)
    for(var i = 0; i < bucket.length; i++){
      if(bucket[i][0] === k){//check for key, if it exists
        bucket[i][1] = v; //over write tuple index to val
        findTupple = true;
      }
    }
    if(!findTupple){
      //console.log(typeof this._storage[index])
      bucket.push(tupple);
      this._storage.set(index, bucket)
    }

  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //use helper function get
  var bucket = this._storage.get(index);
  for(var i = 0; i < bucket.length; i++){
    if(bucket[i][0] === k){//check for key, if it exists
      return bucket[i][1];
    }
  }
  return bucket[index][1];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //check if the index has a bucket[array]
  var bucket = this._storage.get(index);//[[k,v],[k,v],[k,v]]
  if( bucket.length > 0){
    //and bucket length has tuples
    for( var i = 0; i < bucket.length; i++){
      //check each tuple at index 0 to check for key -- [key, index]
      if(bucket[i][0] === k){
        bucket[i][1] = undefined; //set tuple to be undefined
      }
    }
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
insert -->best case: O(1) = Constant  worst case --> O(n) = Linear
retrieve --> best case: O(1) Constant  worst case --> O(n) Linear
remove --> best case: O(1) = Constant  worst case --> O(n) = Linear
 */


