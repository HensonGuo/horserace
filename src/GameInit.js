var images = images||{};
var ss = ss||{};
var debugData = debugData || null;

this.gameController = this.gameController || {};

var canvas, stage, root;

window.onload = function()
{
	canvas = document.getElementById("canvas");

	var loader = new createjs.LoadQueue(false);
	loader.installPlugin(createjs.Sound);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.addEventListener("error", handleError);
	loader.loadFile({src:"images/_res_atlas_.js?1468392206683", type:"spritesheet", id:"_res_atlas_"}, true);
	loader.loadFile({src:"debug.txt", id:"debug_file"}, true);
	loader.loadManifest(lib.properties.manifest);


	function handleFileLoad(evt) {
		console.info('loaded: ' + evt.item.id);
		if (evt.item.id == "debug_file")
		{
			debugData = $.parseJSON(evt.result);
		}
		if (evt.item.type == "image") 
		{ 
			images[evt.item.id] = evt.result; 
		}
	}

	function handleComplete(evt) {
		console.info('load completed!')
		var queue = evt.target;
		ss["_res_atlas_"] = queue.getResult("_res_atlas_");
		root = new lib._res();
		stage = new createjs.Stage(canvas);
		stage.addChild(root);
		stage.enableMouseOver(10);
		stage.update();

		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);

		this.gameController.doInit();

		resize(null);
		window.addEventListener('resize', resize, false);
	}

	function handleError(evt){
		if (evt.item.id == "debug_file")
		{
			console.info('not use debugmode!')
		}

	}

	function resize(evt)
	{
		windowW = window.innerWidth;
		windowH = window.innerHeight;
		console.info('window resized, width: ' + windowW + '-----height: ' + windowH);
		adaptedW = windowW >= 1000 ? 1000 : windowW;
		adaptedH = adaptedW / 1000 * 630;

		stage.canvas.width = adaptedW;
		stage.canvas.height = adaptedH;

		root.scaleX = adaptedW / 1000;
		root.scaleY = adaptedH / 630;
	}
}