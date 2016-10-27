(function (){
	var _obj = {};
	var _view = null;
	var _resultBG;
	var _resultTxt;
	var _runTime;
	
	var _bmArr = [];
	var _bmX = [];
	var _bmY = [];

	_obj.doInit = function()
	{
		_view = new createjs.Container();
		_view.x = 1000;
		_view.y = 0;
		_view.visible = false;
		root.addChild(_view)

		_resultBG = new lib.imgGameResultBG();
		_view.addChild(_resultBG);

		_bmX = [183, 173, 165.5, 163, 160, 163, 165, 170, 177.35, 186.35];
		_bmY = [45.5, 89.5, 134.5, 181, 225, 270, 314.5, 360, 414.35, 459.85];
		_bmArr = [];

		_resultTxt = new lib.resultTxt();
        _resultTxt.x = 234.95;
        _resultTxt.y = 51.1;
        _view.addChild(_resultTxt);

        var bmp=null;
        var index=0;
        while (index < 10) 
        {
            container = new createjs.Container();
            container.y = _bmY[index];
            container.x = _bmX[index];
            _view.addChild(container);
            _bmArr.push(container);
            ++index;
        }
	};

	_obj.ShowGameResult = function(results, runtime)
    {
        var numBmp=null;
        var totalNum=0;
        var index=0;
        while (index < 8) 
        {
			container = _bmArr[index];
			container.removeAllChildren();
			numBmp = getBigNumBMD(results[index]);
			container.addChild(numBmp.clone());
			totalNum = totalNum + results[index];
            ++index;
        }
        while (index < 10) 
        {
			container = _bmArr[index];
			container.removeAllChildren();
			numBmp = getSmallNumBMD(results[index]);
			container.addChild(numBmp.clone());
            ++index;
        }
        _view.visible = true;
        showRunTime(runtime);
        createjs.Tween.get(_view, {loop:false}).to({"x":0}, 1000);
        return;
    }

    function showRunTime(runtime)
    {
        var rdTime=0;
        var seconds=0;
        var milli=0;
        var txtFiled=null;
        var index=0;
        var runtime=runtime + 60 * 1000;
        while (index < 10) 
        {
			rdTime = (runtime = runtime + randRange(1000, 3000)) / (60 * 1000);
			seconds = runtime % (60 * 1000) / 1000;
			milli = runtime % 1000 / 10;
            txtFiled = _resultTxt.getChildByName("_txt" + (index + 1).toString());
			txtFiled.text = String(rdTime) + " : " + 
				String(seconds < 10 ? "0" + seconds : seconds) + " , " + 
				String(milli >= 10 ? milli : "0" + milli);
            ++index;
        }
        return;
    }

    _obj.HideGameResult = function()
    {
        createjs.Tween.get(_view, {loop:false}).to({"x":-1000, "onComplete":hideComplete}, 500);
    }

    function randRange(min, max)
    {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function hideComplete()
    {
        _view.x = 1000;
        _view.visible = false;
    }

	window.ResultPanel = _obj;

})();