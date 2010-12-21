Object.prototype.observes = function(klass){
  if (!klass.observers)
    klass.observers = [];  
  klass.observers.push(this);
}

Object.prototype.notify = function(event){
  var a = this.constructor.observers;
  if (!a){ return; }
  for (var i = 0, ii = a.length ; i < ii ; ++i){
    var observer = eval(a[i]);
    if (observer.hasOwnProperty(event))
      observer[event](this);
  }
}

