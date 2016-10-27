(function (){
	var _obj = {};
	var _view = null;
    var _isOpen = true;

	_obj.doInit = function()
	{
		_view = new lib.soundButtonMc();
        _view.x = 960;
        _view.y = 30;
        _view.stop();
        _view.cursor = "pointer";
        _view.addEventListener("click", onClick);
        root.addChild(_view);
	};

	function onClick(evt)
    {
        _isOpen = !_isOpen;
        if (_isOpen) 
        {
            _view.gotoAndStop(1);
            SoundMgr.setVolume(1);
        }
        else 
        {
            _view.gotoAndStop(2);
            root.update();
            SoundMgr.setVolume(0);
        }
    }

	window.SoundButton = _obj;

})();