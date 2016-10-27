(function (){
	var _obj = {};
	var _view = null;
	var _rankVector = null;
	var _txtMsg = null;

	_obj.doInit = function()
	{
		if (_view)
			return;

		_view = new lib.viewMessageBarMC();
		_view.snapToPixel = true;
		root.addChild(_view);

		var container=null;
        var index =0;
        _rankVector = [];
        while (index < 8) 
        {
			container = new createjs.Container();
			container.x = 256 + index * 57;
			container.y = 5.5;
            _rankVector.push(container);
            _view.addChild(container);
            index += 1;
        }
        _txtMsg = new lib.TxtMessage();
        _view.addChild(_txtMsg);
	};

	_obj.rankNum = function(arr)
	{
		if (!arr || !arr.length)
			return;
		if (arr.length < 8)
			return;
		var index = 0;
		while(index < 8)
		{
			container = _rankVector[index];
			container.removeAllChildren();
			numsprite = getBigNumBMD(Number(arr[index]));
			cloneObj = numsprite.clone();
			cloneObj.snapToPixel = true;
			container.addChild(numsprite.clone());
			index += 1;
		}
	};

	_obj.setPeriods = function setPeriods(data)
	{
		_txtMsg._txt1.text = String(data.current.periodDate);
		_txtMsg._txt2.text = String(data.next.periodDate);
        _txtMsg._txt3.text = String(data.next.awardTime.split(" ")[1]);
	};

	window.MessageBar = _obj;

})();