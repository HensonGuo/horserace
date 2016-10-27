(function (){
	var _view = null;
	var _callback = null;
    var p = {};

	p.doInit = function(call)
  	{
  		_callback = call;

	    _view = new lib.CountTime();
		root.addChild(_view);
	    createjs.EventDispatcher.call(this);

		_view._overTime.text = '';
		_view.count_mc.visible = true;
        _view._countDown.gotoAndStop(1);
    	_view._countDown.visible = false;
  	}

	p.showcountDown = function(count)
	{
		if (count >= 10) 
        	_view._overTime.text = String(count);	
	};


	p.ShowOver = function()
    {
        _view._overTime.text = "";
        _view._countDown.visible = true;
        _view._countDown.gotoAndPlay(0);
        _view.addEventListener('tick', onEnterFranme);
    }

    p.hide = function()
    {
        _view.count_mc.visible = false;
        _view._countDown.visible = false;
        _view.visible = false;
    }

    p.Show = function()
    {
        _view.count_mc.visible = true;
        _view._countDown.visible = true;
        _view.visible = true;
    }

    p.setCallback = function(call)
    {
    	_callback = call;
    }


    function onEnterFranme(evt)
    {
    	var curFrame = _view._countDown.currentFrame;
    	switch(curFrame)
    	{
            case 1:
            case 23:
            case 47:
            case 71:
            case 95:
            case 119:
            case 142:
            case 166:
            case 190:
            case 214:
            {
                SoundMgr.playSound(SoundID.Race8);
                break;
            }
    		case 247:
    		{
    			if (_callback)
    				_callback();
    			break;
    		}
    		case 268:
    		{
    			_view._countDown.stop();
    			_view.removeEventListener('tick', onEnterFranme)
    			break;
    		}
    	}

    }

	window.Countdown = p;

})();