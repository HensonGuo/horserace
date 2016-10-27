(function (){
	var _view = null;
	var p = {};

	p.doInit = function()
	{
		if (!_view)
    	_view = new lib.TakePhoto();
	}

	p.start = function()
	{
		_view.addEventListener('tick', onEnterFranme);
		_view.gotoAndPlay(1);
		root.addChild(_view);
	};

	function onEnterFranme(evt)
  {
  	var curFrame = _view.currentFrame;
    if (curFrame == 22)
    {
      _view.removeEventListener('tick', onEnterFranme)
      _view.stop();
      root.removeChild(_view);
    }
  }

  window.TakePhoto = p;

})();