(function (){

  var Timer = function(interval, loop)
  {
    this.interval = interval;
    this.loop = loop || 999999999;
    this.t = null;
    this.running = false;
    this.currentCount = 0;
    createjs.EventDispatcher.call(this);
  }

  var p = createjs.extend(Timer, createjs.EventDispatcher);
  
  p.start = function()
  {
    if (this.loop && !this.running)
    {
      this.running = true;
      this.currentCount = 0;
      this.t = setTimeout(this.onInterval, this.interval, this);
    }
  };

  p.stop = function()
  {
    if (this.t)
    {
      clearTimeout(this.t);
      this.t = null;
      this.running = false;
      this.currentCount = 0;
    }
  };

  p.getInterval = function()
  {
    return this.interval;
  };

  p.setInterval = function(interval)
  {
    this.interval = interval;
  };

  p.onInterval =  function(target)
  {
    target.dispatchEvent('timer');
    target.loop -= 1;
    target.currentCount += 1;
    if (!target.loop)
    {
      target.running == false;
      target.dispatchEvent('complete');
    }
    if (target.running)
    {
      target.t = setTimeout(target.onInterval, target.interval, target);
    }
  };

  window.Timer = Timer;

})();