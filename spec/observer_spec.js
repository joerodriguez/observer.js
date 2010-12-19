function Dog(){
  this.bark_count = 0;
}

Barker = {
  bark: function(dog){ dog.bark_count += 1; }
}
Barker.observes(Dog);

suite('ObserverSuite', function(){
  
  it("should observe", function(){
    var d = new Dog();
    assert_equal(d.bark_count,0);
    d.notify('bark');
    assert_equal(d.bark_count,1);
  });
  
});
