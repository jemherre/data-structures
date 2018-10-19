describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  /*    *     *    A D V A N C E D    C O N T E N T    *     *      */
//Make your set capable of handling numbers as well as strings ??
it('ADVANCED TEST: should be able to add numbers and strings to a set', function() {
  set.add('Susan Sarandon');
  set.add(21);

  expect(set.contains('Susan Sarandon')).to.equal(true);
  expect(set.contains(21)).to.equal(true);
});

//Make your set capable of handling input objects of any type ??
it('ADVANCED TEST: should be able to add objects to a set', function() {
  set.add({a: "case1", b : 23});
  set.add([1, "case2", 4]);

  expect(set.contains({a: "case1", b : 23})).to.equal(true);
  expect(set.contains([1, "case2", 4])).to.equal(true);
});

});
