(function (){
	var _dpArr = [new createjs.Point(62.5, 26), new createjs.Point(64.25, 26.25), 
	new createjs.Point(65, 26), new createjs.Point(65, 26), 
	new createjs.Point(66.5, 26), new createjs.Point(67, 25.25), 
	new createjs.Point(67.65, 24.55), new createjs.Point(68.9, 23.8), 
	new createjs.Point(68.4, 23), new createjs.Point(68.4, 22.8), 
	new createjs.Point(67.15, 22.8), new createjs.Point(65.4, 23), 
	new createjs.Point(64.15, 24.8), new createjs.Point(63.9, 25.55), 
	new createjs.Point(62.4, 25.8), new createjs.Point(61.9, 26.3)];

	var HorseModel = function()
  	{
  		this.view = null;
	    this.index = 0;
	    this.speed = 0;
	    this.targetX = 0;
	    this._numObj = null;
	    createjs.EventDispatcher.call(this);
  	}

	var p = createjs.extend(HorseModel, createjs.EventDispatcher);

	p.setViewObj = function(view)
	{
		this.view = view;
	};

	p.numMove = function(arg1)
	{
		if (!this._numObj)
			return;
		var pt = _dpArr[this.view.currentFrame];
		if (this.index >= 10)
		{
			this._numObj.x = pt.x;
			this._numObj.y = pt.y;
		}
		else
		{
			this._numObj.x = pt.x + 4;
			this._numObj.y = pt.y;
		}
	};

	p.setIndex = function(value)
	{
		this.index = value;
		if (this._numObj)
		{
			this.view.removeChild(this._numObj);
		}
		switch(value)
		{
			case 1:
            {
                this._numObj = new lib.horseHorseNum1();
                break;
            }
            case 2:
            {
                this._numObj = new lib.horseHorseNum2();
                break;
            }
            case 3:
            {
                this._numObj = new lib.horseHorseNum3();
                break;
            }
            case 4:
            {
                this._numObj = new lib.horseHorseNum4();
                break;
            }
            case 5:
            {
                this._numObj = new lib.horseHorseNum5();
                break;
            }
            case 6:
            {
                this._numObj = new lib.horseHorseNum6();
                break;
            }
            case 7:
            {
                this._numObj = new lib.horseHorseNum7();
                break;
            }
            case 8:
            {
                this._numObj = new lib.horseHorseNum8();
                break;
            }
            case 9:
            {
                this._numObj = new lib.horseHorseNum9();
                break;
            }
            case 10:
            {
                this._numObj = new lib.horseHorseNum10();
                break;
            }
            default:
            {
                this._numObj = null;
                break;
            }
		}
		 if (this._numObj) 
        {
            this.view.addChild(this._numObj);
            this.numMove();
        }
	};

	p.setTargetX = function(value)
	{
		this.targetX = value;
		var distance = this.targetX - this.view.x;
		if (distance > -10 && distance < 10)
			return;
		if (distance > 0)
		{
			this.speed = this.speed + 0.2;
		}
		else
		{
			this.speed = this.speed - 0.2;
		}

		if (this.speed > 3)
		{
			this.speed = 3;
		}
		else if (this.speed < -2)
		{
			this.speed = -2;
		}
	};

	p.setViewX = function(value)
	{
		if (value > 1050)
		{
			value = 1050;
		}
		else if (value < -200)
		{
			value = -200;
		}
		this.view.x = value;
		if (value < -140)
		{
			if (!this.view.paused)
			{
				this.view.stop();
			}
			this.view.visible = false;
		}
		else if (value >= -140)
		{
			if (this.view.paused)
			{
				this.view.play();
			}
			this.view.visible = true;
		}
		else if (value > 1000)
		{
			if (!this.view.paused)
			{
				this.view.stop();
			}
			this.view.visible = false;
		}
	};

	window.HorseModel = HorseModel;

})();