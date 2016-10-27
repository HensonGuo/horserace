this.gameController = this.gameController || {};
var debugData = debugData || null;

(function (){
	var excuteAll = false;
	var getResult = GetResult;
	var date = new Date();
	var appStartTime = date.getTime();
	var requestDataTimer = new Timer(3000);
	var countDownTimer = new Timer(1000);
	var url = '';

	var _raceCourse = null;
	var _countDown;
	var _resultPanel;
	var _soundBtn;	
	
	var a=0;
	var b=0;
	var passTime;
	var lastTime;
	var status=0;
	var nowPeriod;
	var result = {};

	this.gameController.doInit = function doInit()
	{
		excuteAll = false;
		getResult.addEventListener("complete", onNewData);
		getResult.addEventListener("error", onError)
		getResult.setUrl(url);

		requestDataTimer.addEventListener('timer', onRequestData);
		countDownTimer.addEventListener('timer', onCountDown);
		reloadData()
	};

	function reloadData()
	{
		if (debugData)
		{
			date = new Date();
			appRunTime = (date.getTime() - appStartTime) / 1000;
			if (appRunTime < 10)
			{
				getResult.data = debugData.seq1;
			}
			else if(appRunTime < 30)
			{
				getResult.data = debugData.seq2;
				if (! debugData.seq3){excuteAll = true;}
			}
			else if( appRunTime < 90)
			{
				getResult.data = debugData.seq3;
				if (! debugData.seq4){excuteAll = true;}
			}
			onNewData(null)
		}
		else
		{
			getResult.loadData()
		}
	}

	function onNewData(evt)
	{
		if (!_raceCourse)
			initGame();
		result = {};
		if (!getResult.data)
			return;
		result = getResult.data;
		var periodDate = result.current.periodDate;
		date = new Date();
		a = date.getTime();
		var awardNumbers=result.current.awardNumbers.split(",");
		if (status != 0) 
		{
			if (!(periodDate == nowPeriod) && status > 0) 
			{
				status = 2;
				requestDataTimer.stop();
				nowPeriod = periodDate;
				var aNums = [];
				var i = 0;
				while (i < awardNumbers.length) 
				{
					aNums.push(Number(awardNumbers[i]));
					++i;
				}
				if (_raceCourse.isRuning()) 
				{
					_raceCourse.setResult(aNums);
				}
			}
		}
		else 
		{
			onCountDown(null);
			countDownTimer.start();
			_raceCourse.setPeriods(result);
			nowPeriod = periodDate;
			status = 1;
			if (result.next.awardTimeInterval / 1000 > 2) 
			{
				var awdNums = new Array();
				var j = 0;
				while (j < awardNumbers.length) 
				{
					awdNums.push(awardNumbers[j]);
					++j;
				}
				_raceCourse.showLastResult(awdNums);
			}
		}

	}

	function onError(evt)
	{
	}

	function onRequestData(evt)
	{
		reloadData();
	}

	function onCountDown(evt)
	{
		date = new Date();
		b = date.getTime();
		passTime = b - a;
		lastTime = Math.floor((result.next.awardTimeInterval - passTime) / 1000);
		if (lastTime > 10) 
		{
			_countDown.showcountDown(lastTime);
		}
		else if (lastTime <= 0) 
		{
			gogoHandler(null);
		}
		else 
		{
			_countDown.ShowOver();
			countDownTimer.stop();
			countDownTimer.removeEventListener('timer', onCountDown);
		}
	}


	function initGame()
	{
		_raceCourse = RaceCourse;
		_raceCourse.setRunoverCall(onRunOver);
		_raceCourse.init();

		_countDown = Countdown;
		_countDown.doInit(gogoHandler);

		_resultPanel = ResultPanel;
		_resultPanel.doInit();

		_soundBtn = SoundButton;
		_soundBtn.doInit();
	}

	function gogoHandler(evt)
	{
		_countDown.hide();
		requestDataTimer.start();
		_raceCourse.startRun();
	}

	function onRunOver(evt)
	{
		_resultPanel.ShowGameResult(_raceCourse.horseRanking(), _raceCourse.runnedTime());
		SoundMgr.playSound(SoundID.ResultSound);
		setTimeout(onGameOver, 15 * 1000);
	}

	function onGameOver(evt)
	{
		if (debugData && excuteAll)
				return;
		_raceCourse.reset();
		_resultPanel.HideGameResult();
		_raceCourse.setPeriods(result);
		countDownTimer.start();
		countDownTimer.addEventListener('timer', onCountDown);
		onCountDown(null);
		_countDown.Show();
	}


})();