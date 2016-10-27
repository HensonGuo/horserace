var SoundID = {
	HorseSound1: {src:"sounds/HorseSound1.mp3", name:"HorseSound1"},
	HorseSound2: {src:"sounds/HorseSound2.mp3", name:"HorseSound2"},
	Race8: {src:"sounds/Race8.mp3", name:"Race8"},
	ResultSound: {src:"sounds/ResultSound.mp3", name:"ResultSound"}, 
	HoeSound: {src:"sounds/HoeSound.mp3", name:"HoeSound"},
	Camera: {src:"sounds/Camera.mp3", name:"Camera"}
}

var SoundMgr = {};
var HoeSoundInstance1 = null;
var HoeSoundInstance2 = null;

SoundMgr.playSound = function(id, loop) {
	if (id == SoundID.HoeSound)
	{
		HoeSoundInstance1 = createjs.Sound.play(id.name, {interrupt:createjs.Sound.INTERRUPT_NONE, loop:-1});
		setTimeout(SoundMgr._createHoeSound, 2000);
	}
	else
		createjs.Sound.play(id.name, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop)
}

SoundMgr.setVolume = function(value)
{
	return createjs.Sound.volume = value;
}

SoundMgr.stopSound = function(id, path)
{
	HoeSoundInstance1.stop()
	if (HoeSoundInstance2)
		HoeSoundInstance2.stop()
};

SoundMgr._createHoeSound = function()
{
	HoeSoundInstance2 = createjs.Sound.play('HoeSound', {interrupt:createjs.Sound.INTERRUPT_NONE, loop:-1});
}