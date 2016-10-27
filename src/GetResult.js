(function (){
	var _obj = new createjs.EventDispatcher();

	_obj.data = {}

	var reqUrl = ''
	var request = {type:'GET', dataType:'jsonp', jsonp:'callback', success:onSuccess, error:onFail}

	_obj.setUrl = function setUrl(url)
	{
		if (!url || this.url == url)
		{
			return;
		}
		reqUrl = url;
	};


	_obj.loadData = function loadData()
	{
		request.url = reqUrl;
		$.ajax(request)
	};

	_obj.close = function close()
	{

	};

	function onSuccess(res)
	{
		console.log(res);
		_obj.data = res;
		_obj.dispatchEvent('complete')
	}

	function onFail(err)
	{
		console.error(err);
		_obj.dispatchEvent('error')
	}

	window.GetResult = _obj;

})();