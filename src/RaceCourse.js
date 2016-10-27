(function (){
	var _obj = new createjs.EventDispatcher();

	var _horsesY = [];
	var _startHorseList = null;
	var _horsesVector = [];
	var _horseRanking = [];
	var _otherRank = [];

	var _raceCourseBG = null;
	var _rankNum = null;
	var _stable1 = null;
	var _stable2 = null;
	var _endLineTop = null;
	var _endLineBottom = null;

	var _railing = null;
	var _speedTimer = null;
	var _speedTimer1 = null;
	var _horseSoundTimer = null;
	var _rankTimer = null;

	var _runningState = 0;
	var _startRunTime = 0;
	var _runnedTime = 0;
	var _bgMoveSpeed = 25;
	var _resultArr = [];
	var _virtualResult = [];
	var _lastPosition = [];

    var runOverCallback = null;

	_obj.init = function()
	{
        _horsesVector = [];
		_horseRanking = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        _horsesY = [83, 129, 179, 230, 285, 336, 388, 437, 489, 543];

        _speedTimer = new Timer(500);
        _speedTimer.addEventListener('timer', speedTimerHandler)
        _speedTimer1 = new Timer(600, 10);
        _speedTimer1.addEventListener('timer', speedTimer1_handler);
        _rankTimer = new Timer(1000);
        _rankTimer.addEventListener('timer', onRankTimerHander);
        _horseSoundTimer = new Timer(1000);
        _horseSoundTimer.addEventListener('timer', horseSoundTimer_hander);
        _horseSoundTimer.start();

        createScreen();
	};

	_obj.setResult = function(results)
	{
        if (!results) 
            return;
        rushResultPostion();
        _otherRank = rushResult(results);
        _resultArr = results.concat(_otherRank);
        
        speedTimer1_handler(null);
        _speedTimer.stop();
        _speedTimer1.stop();
        _speedTimer1.start();
        _runningState = 3;
	};

	_obj.showLastResult = function(results)
	{
		_otherRank = rushResult(results);
        var arr=results.concat(_otherRank);
        _rankNum.rankNum(arr);
	};

	_obj.setPeriods = function(periods)
	{
		_rankNum.setPeriods(periods);
	};

	_obj.reset = function()
	{
        createjs.Ticker.framerate = 24;
        stopRun();
        _runningState = 0;
        _speedTimer.stop();
        _speedTimer1.stop();
        _horseSoundTimer.start();
        _rankTimer.stop();
        _resultArr = null;
        _railing.x = 0;
        _stable2.x = 0;
        _stable1.x = 0;
        _stable2.visible = true;
        _stable1.visible = true;
        
        _endLineTop.x = 1010;
        _endLineBottom.x = _endLineTop.x + 115;
        
        var index=0;
        while (index < _horsesVector.length) 
        {
            _horsesVector[index].setViewX(-63);
            _horsesVector[index].view.stop();
            _horsesVector[index].view.visible = false;
            ++index;
        }
        
        var rider=null;
        _startHorseList.visible = true;
        if (!_startHorseList.numChildren) 
        {
            index = 0;
            while (index < 10) 
            {
                rider = getStartHorse(index);
                rider.x = -63;
                rider.y = _horsesY[index];
                rider.play();
                _startHorseList.addChild(rider);
                ++index;
            }
        }
	};

	_obj.horseRanking = function()
	{
		return _horseRanking;
	};

	_obj.isRuning = function()
	{
		return _runningState > 0;
	};

	_obj.runnedTime = function()
	{
		if (_runningState == 6) 
        {
            return _runnedTime;
        }
        if (_runningState == 0) 
        {
            return 0;
        }
        var date = new Date();
        return date.getTime() - _startRunTime;
	};

	_obj.startRun = function()
	{
        var index=0;
        _horseSoundTimer.stop();
        if (_runningState) 
        {
            return;
        }
        createjs.Ticker.frameRate = 32;
        _runningState = 1;
        _startRunTime = (new Date()).getTime();
        _raceCourseBG.addEventListener('tick', enterFrameHandler);
        _speedTimer.start();
        _speedTimer1.stop();
        SoundMgr.playSound(SoundID.HorseSound1);
        SoundMgr.playSound(SoundID.HoeSound);
        while (index < _horsesVector.length) 
        {
            _horsesVector[index].view.play();
            _horsesVector[index].view.visible = true;
            _horsesVector[index].speed = Math.floor(Math.random() * 9 - 4);
            ++index;
        }
        MovieClipUtil.stopAll(_startHorseList);
        _startHorseList.visible = false;
        while (_startHorseList.numChildren > 0) 
        {
            _startHorseList.removeChildAt(0);
        }
        if (!_rankTimer.running) 
        {
            _rankTimer.start();
        }
	};

    _obj.setRunoverCall = function(call)
    {
        runOverCallback = call;
    }

	function createScreen()
	{
        var bmpData=null;
        var index=0;
        var rider=null;
        var riderModel=null;

        _raceCourseBG = new createjs.Container();
        _raceCourseBG.snapToPixel = true;
        var bg = new lib.imgRaceCourseBG();
        while(index < 7)
        {
            bg = bg.clone();
            bg.x = 182 * index;
            _raceCourseBG.addChild(bg)
            index += 1;
        }
        root.addChild(_raceCourseBG)

        _rankNum = MessageBar;
        _rankNum.doInit();
        
        _endLineTop = new lib.imgEndLineTop();
        _endLineTop.x = 1010;
        root.addChild(_endLineTop);
        
        _stable1 = new lib.imgStable1();
        _stable1.y = 68;
        root.addChild(_stable1);

        _startHorseList = new createjs.Container();
        root.addChild(_startHorseList);
        index = 0;
        while( index < 10)
        {
            rider = getStartHorse(index);
            rider.x = -63;
            rider.y = _horsesY[index];
            rider.play();
            _startHorseList.addChild(rider);
            index +=  1;
        }
        
        index = 0;
        while (index < 10) 
        {
            riderModel = getHorseModelMc(index)
            riderModel.setIndex(10 - index);
            riderModel.speed = randRange(-1, 1);
            riderModel.setViewX(-63);
            riderModel.view.y = _horsesY[index];
            riderModel.view.stop();
            riderModel.view.visible = false;
            root.addChild(riderModel.view);
            _horsesVector.push(riderModel);
            ++index;
        }
        
        _stable2 = new lib.imgStable2();
        _stable2.y = 59;
        root.addChild(_stable2);
        
        _endLineBottom = new lib.imgEndLineBottom();
        _endLineBottom.x = _endLineTop.x + 115;
        _endLineBottom.y = 510;
        root.addChild(_endLineBottom);

        _railing = new createjs.Container();
        _railing.y = 611;
        var railing = new lib.imgRailing();
        index = 0;
        while (index < 7) 
        {
            railing = railing.clone();
            railing.x = 182 * index;
            _railing.addChild(railing)
            ++ index;
        }
        root.addChild(_railing);
	}

	function randRange(min, max)
    {
        var value=Math.floor(Math.random() * (max - min + 1)) + min;
        return value;
    }

    function randomArray(arr)
    {
        var rdArr=[];
        while (arr.length > 0) 
        {
            rdArr.push(arr.splice(Math.floor(Math.random() * arr.length), 1)[0]);
        }
        return rdArr;
    }

    function rushResultPostion()
    {
        var index=0;
        var posArr=new Array();
        var posX=420;
        while (index < 10) 
        {
            if (index < 8) 
            {
                posX = posX - randRange(30, 50);
            }
            else 
            {
                posX = posX - randRange(30, 60);
            }
            posArr.push(posX);
            ++index;
        }
        _lastPosition = posArr;
        return posArr;
    }

    function rushResult(rsts)
    {
        var index=0;
        var randomArr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        randomArr = randomArray(randomArr);
        var i=0;
        while (i < rsts.length) 
        {
            index = randomArr.indexOf(rsts[i]);
            randomArr.splice(index, 1);
            i = i + 1;
        }
        return randomArr;
    }

	function getStartHorse(index)
	{
		var horse = null;
		var createID = index % 4;
		switch(createID)
		{
			case 0:
			{
				horse = new lib.horse_1();
				break;
			}
			case 1:
			{
				horse = new lib.horse_4();
				break;
			}
			case 2:
			{
				horse = new lib.horse_2();
				break;
			}
			case 3:
			{
				horse = new lib.horse_8();
				break;
			}
			default:
			{
				horse = new lib.horse_8();
				break;
			}
		}
		horse.stop();
		return horse;
	}

	function getHorseModelMc(index)
	{
		var horse = null;
		var createID = index % 4;
		switch(createID)
		{
			case 0:
			{
				horse = new lib.horseHorse1();
				break;
			}
			case 1:
			{
				horse = new lib.horseHorse4();
				break;
			}
			case 2:
			{
				horse = new lib.horseHorse2();
				break;
			}
			case 3:
			{
				horse = new lib.horseHorse8();
				break;
			}
			default:
			{
				horse = new lib.horseHorse8();
				break;
			}
		}
        horse.stop();
        var model = new HorseModel();
		model.setViewObj(horse);
		return model;
	}

    function enterFrameHandler(evt)
    {
    	var state = _runningState;
        switch (state) 
        {
            case 1:
            {
                runningState1();
                break;
            }
            case 2:
            {
                runningState2();
                break;
            }
            case 3:
            {
                runningState3();
                break;
            }
            case 4:
            {
                runningState4();
                break;
            }
            case 5:
            {
                runningState5();
                break;
            }
            default:
            {
                break;
            }
        }
    }

	function speedTimerHandler(evt)
	{
        var rider=null;
        var index=0;
        var base=1;
        if (_runningState < 3) 
        {
            while (index < _horsesVector.length) 
            {
                rider = _horsesVector[index];
                if (rider.view.x > 600) 
                {
                    rider.speed = rider.speed - base;
                }
                else if (rider.view.x < -170) 
                {
                    rider.speed = rider.speed + base;
                }
                else 
                {
                    if (Math.round(Math.random())) 
                    {
                        rider.speed = rider.speed + base;
                    }
                    else 
                    {
                        rider.speed = rider.speed - base;
                    }
                    if (rider.speed > 2) 
                    {
                        rider.speed = 2;
                    }
                    else if (rider.speed < -2) 
                    {
                        rider.speed = -2;
                    }
                }
                ++index;
            }
        }
	}

	function speedTimer1_handler(evt)
	{
        var index=0;
        if (_speedTimer1.currentCount > 7) 
        {
            return;
        }
        if (_speedTimer1.currentCount == 5) 
        {
            createjs.Ticker.frameRate = createjs.Ticker.frameRate + 2;
            while (index < _lastPosition.length) 
            {
                _lastPosition[index] = _lastPosition[index] + 300;
                ++index;
            }
        }
        
        var results=null;
        var count=0;
        if (_speedTimer1.currentCount == 0) 
        {
            createjs.Ticker.frameRate = createjs.Ticker.frameRate + 2;
            _virtualResult = [];
            results = [];
            count = 5;
            while (count < 10) 
            {
                results.push(_resultArr[count]);
                ++count;
            }
            _virtualResult = _virtualResult.concat(randomArray(results));
            count = 0;
            while (count < 5) 
            {
                results.push(_resultArr[count]);
                ++count;
            }
            _virtualResult = _virtualResult.concat(randomArray(results));
            count = 10;
            while (count < 10) 
            {
                results.push(_resultArr[count]);
                ++count;
            }
            _virtualResult = _virtualResult.concat(randomArray(results));
        }
	}

	function onRankTimerHander(evt)
	{
        var loc1=false;
        var index=0;
        ranking();
        _rankNum.rankNum(_horseRanking);
        if (_speedTimer1.currentCount >= 7) 
        {
            loc1 = false;
            while (index < 8) 
            {
                if (_resultArr[index] != _horseRanking[index]) 
                {
                    loc1 = true;
                    break;
                }
                ++index;
            }
            if (!loc1) 
            {
                _runningState = 4;
                if (_rankTimer.running) 
                {
                    _rankTimer.stop();
                }
            }
        }
	}

	function horseSoundTimer_hander(evt)
	{
		SoundMgr.playSound(SoundID.HorseSound2);
		_horseSoundTimer.stop();
		_horseSoundTimer.setInterval(Math.floor(Math.random() * 7000));
		_horseSoundTimer.start();
	}

	function ranking()
    {
        var index=0;
        var arr=[];
        while (index < _horsesVector.length) 
        {
            arr.push(_horsesVector[index]);
            ++index;
        }
        arr.sort(function(a, b){return b.view.x - a.view.x});
        _horseRanking = [];
        index = 0;
        while (index < arr.length) 
        {
            _horseRanking.push(arr[index].index);
            ++index;
        }
        return arr;
    }

	function runningState1()
    {
        var rider=null;
        var index=0;
        while (index < _horsesVector.length) 
        {
            rider = _horsesVector[index];
            rider.numMove();
            rider.setViewX(rider.view.x + (rider.speed + 3));
            if (rider.view.x >= 600) 
            {
                _runningState = 2;
            }
            ++index;
        }
        _raceCourseBG.x = _raceCourseBG.x - (_bgMoveSpeed - 3);
        if (_raceCourseBG.x <= -182) 
        {
            _raceCourseBG.x = _raceCourseBG.x + 182;
        }
        _railing.x = _raceCourseBG.x;
        
        if (_stable1.x > -_stable1.width) 
        {
            var stableX = _stable2.x - (_bgMoveSpeed - 3);
            _stable2.x = _stable2.x - (_bgMoveSpeed - 3);
            _stable1.x = stableX;
        }
        else if (_stable1.visible) 
        {
            _stable2.visible = false;
            _stable1.visible = false;
        }
    }

    function runningState2()
    {
        var rider=null;
        var index=0;
        while (index < _horsesVector.length) 
        {
            rider = _horsesVector[index];
            rider.numMove();
            rider.setViewX(rider.view.x + rider.speed);
            ++index;
        }
        bgMove();
    }

    function runningState3()
    {
        var rider=null;
        var result=null;
        var index=0;
        if (_speedTimer1.currentCount < 5) 
        {
            result = _virtualResult;
        }
        else 
        {
            result = _resultArr;
        }
        while (index < _horsesVector.length) 
        {
            rider = _horsesVector[index];
            rider.numMove();
            var i = 0;
            while (i < result.length) 
            {
                if (result[i] == rider.index) 
                {
                    rider.setTargetX(_lastPosition[i]);
                    break;
                }
                ++i;
            }
            if (_speedTimer1.currentCount < 5 && rider.speed > 0) 
            {
                rider.setViewX(rider.view.x + (rider.speed - 1));
            }
            else 
            {
                rider.setViewX(rider.view.x + rider.speed);
            }
            ++index;
        }
        bgMove();
    }

    function runningState4()
    {
        if (_endLineTop.x <= 640) 
        {
            _endLineTop.x = 640;
        }
        else 
        {
            _endLineTop.x = _endLineTop.x - _bgMoveSpeed;
            _endLineBottom.x = _endLineBottom.x - _bgMoveSpeed;
            bgMove();
        }
        var index=0;
        var rider=_horsesVector[10 - _resultArr[0]];
        if (_endLineTop.x == 640 && rider.view.x >= 660) 
        {
            _runningState = 5;
            takePhoto();
            _runnedTime = (new Date()).getTime() - _startRunTime;
        }
        else if (rider.view.x < 660) 
        {
            while (index < _horsesVector.length) 
            {
                rider = _horsesVector[index];
                rider.numMove();
                rider.setViewX(rider.view.x + _bgMoveSpeed);
                ++index;
            }
        }
    }

    function runningState5()
    {
        var rider=null;
        var index=0;
        while (index < _horsesVector.length) 
        {
            rider = _horsesVector[index];
            rider.numMove();
            if (rider.index == _horseRanking[9] && rider.view.x >= 1000) 
            {
                _runningState = 6;
                setTimeout(endRun, 3000);
                break;
            }
            rider.setViewX(rider.view.x + _bgMoveSpeed);
            ++index;
        }
    }

    function goOn()
    {
        if (!_raceCourseBG.hasEventListener('tick')) 
        {
            _raceCourseBG.addEventListener('tick', enterFrameHandler);
        }
        if (!_speedTimer.running && _runningState < 3) 
        {
            _speedTimer.start();
        }
        MovieClipUtil.playAll(_horsesVector);
        SoundMgr.playSound(SoundID.HoeSound);
    }

    function stopRun()
    {
        MovieClipUtil.stopAll(_horsesVector);
        SoundMgr.stopSound(SoundID.HoeSound);
        if (_raceCourseBG.hasEventListener('tick')) 
        {
        	_raceCourseBG.removeEventListener('tick', enterFrameHandler);
        }
        _speedTimer.stop();
    }

    function endRun()
    {
        stopRun();
        if (runOverCallback)
            runOverCallback();
    }

    function takePhoto()
    {
        stopRun();
        SoundMgr.playSound(SoundID.Camera);
        TakePhoto.doInit();
        TakePhoto.start();
        setTimeout(goOn, 4000);
    }

    function bgMove()
    {
        _raceCourseBG.x = _raceCourseBG.x - _bgMoveSpeed;
            
        if (_raceCourseBG.x <= -182) 
        {
            _raceCourseBG.x = _raceCourseBG.x + 182;
        }
        _railing.x = _raceCourseBG.x;
        
        if (_stable1.visible) 
        {
            _stable2.visible = false;
            _stable1.visible = false;
        }
    }

    window.RaceCourse = _obj;

})();