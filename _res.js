(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 1000,
	height: 630,
	fps: 24,
	color: "#000000",
	webfonts: {},
	manifest: [
		{src:"sounds/ResultSound.mp3", id:"ResultSound"},
		{src:"sounds/Race8.mp3", id:"Race8"},
		{src:"sounds/HorseSound2.mp3", id:"HorseSound2"},
		{src:"sounds/HorseSound1.mp3", id:"HorseSound1"},
		{src:"sounds/Camera.mp3", id:"Camera"},
		{src:"sounds/HoeSound.mp3", id:"HoeSound"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.imgRaceCourseBG = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.imgStable1 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.imgStable2 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bitmap133 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bitmap135 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bitmap137 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.bitmap139 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.imgRailing = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.bitmap141 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.bitmap143 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.bitmap145 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.bitmap147 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.bitmap149 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.imgGameResultBG = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.bitmap151 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.bitmap153 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.bitmap155 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.bitmap157 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.bitmap159 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.imgEndLineTop = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.bitmap161 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.bitmap164 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.bitmap166 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.bitmap168 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.imgEndLineBottom = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.bitmap170 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.bitmap172 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.bitmap174 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.bitmap176 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.bitmap178 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.bitmap180 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.bitmap182 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.bitmap184 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.bitmap186 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.bitmap188 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.bitmap190 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.bitmap192 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.bitmap226 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.bitmap228 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.bitmap230 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.bitmap232 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.bitmap234 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.bitmap236 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.bitmap238 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.bitmap240 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.bitmap242 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.bitmap244 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.bitmap246 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.bitmap248 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.bitmap250 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.bitmap252 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.bitmap254 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.bitmap350 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.bitmap352 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.bitmap354 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.bitmap356 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.bitmap358 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.bitmap360 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.bitmap362 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.bitmap364 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.bitmap366 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.bitmap368 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.bitmap370 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.bitmap372 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.bitmap374 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.bitmap376 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.bitmap378 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.imgSmall10 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.imgSmall9 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.imgSmall8 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.imgSmall7 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.imgSmall6 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.bitmap542 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.bitmap544 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.bitmap546 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.bitmap548 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.imgSmall5 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.bitmap550 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.bitmap552 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.bitmap554 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.bitmap556 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.bitmap558 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.imgSmall4 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.bitmap560 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.bitmap562 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.bitmap564 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.bitmap566 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.bitmap568 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.imgSmall3 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.bitmap571 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.bitmap573 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.bitmap575 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.bitmap577 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.bitmap579 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.imgSmall2 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.bitmap581 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.bitmap583 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.bitmap585 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.bitmap587 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.bitmap589 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.imgSmall1 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.bitmap591 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.bitmap593 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.bitmap595 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.bitmap599 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.bitmap602 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.bitmap604 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.bitmap606 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.bitmap608 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.bitmap610 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.bitmap612 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.bitmap614 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.bitmap616 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.bitmap618 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.bitmap620 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.bitmap622 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.bitmap624 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.bitmap626 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.bitmap628 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.bitmap630 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.bitmap633 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.bitmap635 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.bitmap637 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.bitmap639 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.bitmap641 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.bitmap643 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.bitmap645 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.bitmap647 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.bitmap649 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.bitmap651 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.bitmap653 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.bitmap655 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.bitmap657 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.bitmap659 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.bitmap661 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.imgBig10 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.bitmap704 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.bitmap706 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.imgBig9 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.imgBig8 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.imgBig7 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.imgBig6 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.imgBig5 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(142);
}).prototype = p = new cjs.Sprite();



(lib.imgBig4 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(143);
}).prototype = p = new cjs.Sprite();



(lib.imgBig3 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(144);
}).prototype = p = new cjs.Sprite();



(lib.imgBig2 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(145);
}).prototype = p = new cjs.Sprite();



(lib.bitmap83 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(146);
}).prototype = p = new cjs.Sprite();



(lib.bitmap87 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(147);
}).prototype = p = new cjs.Sprite();



(lib.imgBig1 = function() {
	this.spriteSheet = ss["_res_atlas_"];
	this.gotoAndStop(148);
}).prototype = p = new cjs.Sprite();



(lib.soundButtonMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],136), null, new cjs.Matrix2D(1,0,0,1,-14.5,-14.5)).s().p("AiQCQIAAkgIEgAAIAAEgg");
	this.shape.setTransform(14.5,14.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],137), null, new cjs.Matrix2D(1,0,0,1,-14.5,-14.5)).s().p("AiQCQIAAkgIEgAAIAAEgg");
	this.shape_1.setTransform(14.5,14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29,29);


(lib.horseHorseNum1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAFAxIAAhEQgLAJgRAFIAAgRQAXgKAIgRIAQAAIAABig");
	this.shape.setTransform(2.5,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#24224D").ss(2,1,1).p("AAYAyIgTAAIAAhFQgLAJgRAFIAAgSQAXgJAIgRIAQAAg");
	this.shape_1.setTransform(2.5,5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAFAxIAAhEQgLAJgRAFIAAgRQAXgKAIgRIAQAAIAABig");
	this.shape_2.setTransform(2.5,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,6.9,12);


(lib.horseHorseNum2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiAxIAAgKQALgUAVgPQASgMgBgLQAAgOgPABQgJAAgGAPIgSgHQAKgZAZAAQAeACADAbQABATgaAPQgMAKgJAKIAtAAIAAAPg");
	this.shape.setTransform(3.6,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#24224D").ss(2,1,1).p("AACgxQAeACADAbQABATgaAQQgMAJgJALIAtAAIAAAPIhEAAIAAgLQALgUAVgPQASgMgBgLQAAgOgPAAQgJABgGAPIgSgHQAKgZAZAAg");
	this.shape_1.setTransform(3.6,5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiAxIAAgKQALgUAVgPQASgMgBgLQAAgOgPABQgJAAgGAPIgSgHQAKgZAZAAQAeACADAbQABATgaAPQgMAKgJAKIAtAAIAAAPg");
	this.shape_2.setTransform(3.6,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,9.1,12);


(lib.horseHorseNum3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiAWIARgDQAEAQANAAQAQAAgBgPQAAgOgPgBIgMAAIAAgMIAJAAQAPgBAAgNQgBgMgLAAQgMAAgCAPIgSgEQAHgZAZgCQAeACABAaQAAAOgOAFQASAFAAARQgBAcgiABQgdAAgFgbg");
	this.shape.setTransform(3.6,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#24224D").ss(2,1,1).p("AASgBQARAEAAARQgBAcgiACQgdAAgFgbIARgEQAEAQANAAQAQAAAAgPQgBgOgPgBIgMAAIAAgMIAJAAQAPgBAAgOQAAgLgMAAQgLAAgDAPIgSgEQAHgaAZgBQAeACABAaQAAANgNAHg");
	this.shape_1.setTransform(3.6,5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiAWIARgDQAEAQANAAQAQAAgBgPQAAgOgPgBIgMAAIAAgMIAJAAQAPgBAAgNQgBgMgLAAQgMAAgCAPIgSgEQAHgZAZgCQAeACABAaQAAAOgOAFQASAFAAARQgBAcgiABQgdAAgFgbg");
	this.shape_2.setTransform(3.6,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,9.1,12);


(lib.horseHorseNum4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAGAxIAAgWIgoAAIAAgNIArg/IAQAAIAAA8IAKAAIAAAQIgKAAIAAAWgAgPALIAVAAIAAgfg");
	this.shape.setTransform(3.6,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#24224D").ss(2,1,1).p("AAjALIAAAQIgKAAIAAAXIgTAAIAAgXIgoAAIAAgMIArhAIAQAAIAAA8gAAGALIAAgfIgVAfg");
	this.shape_1.setTransform(3.6,5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAGAxIAAgWIgoAAIAAgNIArg/IAQAAIAAA8IAKAAIAAAQIgKAAIAAAWgAgPALIAVAAIAAgfg");
	this.shape_2.setTransform(3.6,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,9.2,12);


(lib.horseHorseNum5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjAVIASgFQAEATANAAQAQAAABgVQgBgPgQgBQgLAAgGAIIgOgCIAHg1IA2AAIAAAQIglAAIgCATQAEgEAGAAQAhABABAfQAAAigjABQgdAAgGgcg");
	this.shape.setTransform(3.6,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#24224D").ss(2,1,1).p("AAfghIgmAAIgCASQAEgDAHAAQAgABACAfQgBAigiACQgeAAgGgcIATgFQADASANAAQAQAAABgUQgBgQgQAAQgLgBgFAJIgOgCIAGg2IA3AAg");
	this.shape_1.setTransform(3.6,5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjAVIASgFQAEATANAAQAQAAABgVQgBgPgQgBQgLAAgGAIIgOgCIAHg1IA2AAIAAAQIglAAIgCATQAEgEAGAAQAhABABAfQAAAigjABQgdAAgGgcg");
	this.shape_2.setTransform(3.6,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,9.2,12);


(lib.horseHorseNum6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghAFQAAg0AjgCQAYAAAHAYIgSAFQgDgOgKABQgPABgBAZQAHgJAKABQAdABACAdQgBAhghABIAAABQgiAAABgtgAgOAOQAAAUAOABQAOAAABgUQAAgPgPgBQgNABgBAOg");
	this.shape.setTransform(3.5,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#24224D").ss(2,1,1).p("AADgQQAdACACAdQgBAhghABQgiABABgtQAAg0AjgCQAYAAAHAYIgSAFQgDgOgKAAQgPACgBAYQAHgIAKAAgAAAAjQAOgBABgTQAAgPgPgBQgNABgBAOQAAAUAOABg");
	this.shape_1.setTransform(3.5,5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AghAFQAAg0AjgCQAYAAAHAYIgSAFQgDgOgKABQgPABgBAZQAHgJAKABQAdABACAdQgBAhghABIAAABQgiAAABgtgAgOAOQAAAUAOABQAOAAABgUQAAgPgPgBQgNABgBAOg");
	this.shape_2.setTransform(3.5,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,9,12);


(lib.horseHorseNum7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVAxQAJgvAXgiIgsAAIAAgRIBDAAIAAANQgcAhgIA0g");
	this.shape.setTransform(3.4,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#24224D").ss(2,1,1).p("AAigkQgcAhgHA1IgUAAQAJgwAXgjIgsAAIAAgQIBDAAg");
	this.shape_1.setTransform(3.4,5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVAxQAJgvAXgiIgsAAIAAgRIBDAAIAAANQgcAhgIA0g");
	this.shape_2.setTransform(3.4,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,8.8,12);


(lib.horseHorseNum8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiAVQABgQAPgGQgMgHAAgNQACgaAcgCQAeACABAaQAAANgMAHQAQAFAAARQgBAbgiABQghgBgBgbgAgQAVQABAOAPABQAPgCACgNQgBgQgQAAQgPAAgBAQgAgMgVQABAOALAAQAMgBAAgMQAAgNgMAAQgKAAgCAMg");
	this.shape.setTransform(3.5,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#24224D").ss(2,1,1).p("AATgBQAQAFAAARQgBAbgiACQghgCgBgbQABgQAPgGQgMgHAAgNQACgaAcgCQAeACABAaQAAANgMAHgAAMgUQAAgOgMAAQgKAAgCANQABANALABQAMgBAAgMgAAAAkQAPgBACgOQgBgQgQAAQgPAAgBAQQABAOAPABg");
	this.shape_1.setTransform(3.5,5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiAVQABgQAPgGQgMgHAAgNQACgaAcgCQAeACABAaQAAANgMAHQAQAFAAARQgBAbgiABQghgBgBgbgAgQAVQABAOAPABQAPgCACgNQgBgQgQAAQgPAAgBAQgAgMgVQABAOALAAQAMgBAAgMQAAgNgMAAQgKAAgCAMg");
	this.shape_2.setTransform(3.5,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,9.1,12);


(lib.horseHorseNum9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCAxQgZAAgGgWIARgGQAEAPALgBQAOAAACgZQgHAHgKABQgfgCgBgeQACggAfgDQAkAAAAAwQAAAygkABIgBgBgAgQgOQAAAQAPAAQAQAAAAgOQAAgWgPABQgQABAAASg");
	this.shape.setTransform(3.6,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#24224D").ss(2,1,1).p("AgBACQAQAAAAgOQAAgWgPAAQgQACAAASQAAAQAPAAgAgBgxQAkAAAAAwQAAAzglgBQgZAAgGgWIARgGQAEAOALAAQAOgBACgYQgHAHgKAAQgfgBgBgeQACggAfgDg");
	this.shape_1.setTransform(3.6,5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgCAxQgZAAgGgWIARgGQAEAPALgBQAOAAACgZQgHAHgKABQgfgCgBgeQACggAfgDQAkAAAAAwQAAAygkABIgBgBgAgQgOQAAAQAPAAQAQAAAAgOQAAgWgPABQgQABAAASg");
	this.shape_2.setTransform(3.6,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,9.2,12);


(lib.horseHorseNum10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAAQABgvAfgCQAgACAAAvQAAAxgfAAIgBABQgfAAgBgygAAuAAQAAgigOABQgOACgBAfQABAjAPAAQANAAAAgjgAgkAvIAAhBQgMAJgQAEIAAgQQAYgKAGgPIAPAAIAABdg");
	this.shape.setTransform(6.5,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#24224D").ss(2,1,1).p("AAggxQAgACABAvQAAAxggAAQghABAAgyQACgvAegCgAASAAQAAAjAPAAQANAAAAgjQAAgigOAAQgOACAAAggAgTguIAABdIgRAAIAAhBQgMAJgQAEIAAgQQAYgKAGgPg");
	this.shape_1.setTransform(6.5,5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAAAQABgvAfgCQAgACAAAvQAAAxgfAAIgBABQgfAAgBgygAAuAAQAAgigOABQgOACgBAfQABAjAPAAQANAAAAgjgAgkAvIAAhBQgMAJgQAEIAAgQQAYgKAGgPIAPAAIAABdg");
	this.shape_2.setTransform(6.5,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,15,12);


(lib.horse_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],120), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAAKHIhcgtIg9ggQgfgQgNgFQgbgMgZgCIgagGIgpgVQgZgOgGgMIgCgCIgKAmQgIAeAAAaQAAAaALAkQALAjAAA6QABA8AbAxg");
	this.shape.setTransform(70,42);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],121), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("AK0GjIAEgJIAEgEIAAANgAq7GjIAAtGIV3AAIAAMFQgjgWgFgGQhehZgygVIhAgcIgagWIgogiQgUgQgOgRIgNA4QgLA7AABKQABBEAVA/g");
	this.shape_1.setTransform(70,42);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],122), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("AKfGjQgggZggggIhShVQgsgtgggVQgcgRgYgJIgmgOQgGAbgBAMIAAA9IAHBmQgCAZAFAVIwlAAIAAtGIV3AAIAANGg");
	this.shape_2.setTransform(70,42);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],123), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_3.setTransform(70,42);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],124), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_4.setTransform(70,42);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],125), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_5.setTransform(70,42);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],126), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_6.setTransform(70,42);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],127), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_7.setTransform(70,42);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],128), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_8.setTransform(70,42);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],129), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("AH0GjIgQgwQgNgmgDg0QgCgogNghQgKgdgRgSQgMgOgHgRIgLgdIgLgdQgMgZgOAAQgLAAgFAcIgFAnIgSBDQgPBEAABDQAAA6AOAtIv6AAIAAtGIV3AAIAANGg");
	this.shape_9.setTransform(70,42);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],130), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAAMNQhkhigWgcQg1hCgcgYIgoggQg0grg5gZQgOAegHBSQgGBBAABLQAABJBCAwg");
	this.shape_10.setTransform(70,42);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],131), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGgAFYBpQAABEARBjIAFArQADAfADAJIAEAJIALAMQALALAdAJQAkAMAoAAQAyAABbgiIgTgQQgXghgjg/IghhAIgQggIAAgBIgDAGQgjgpgwgeQg4gegagQg");
	this.shape_11.setTransform(70,42);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],132), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("AKtGjIgPgTQhGhcgFgMQgdhMgNgRQgJgNgbgSIgugiIgxgzQgrgpgVAAQgLAAgIBiQgGBLAAAzQAABYAuA9Iw2AAIAAtGIV3AAIAANGg");
	this.shape_12.setTransform(70,42);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],133), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("AKkGjIjMkHQhYhtgYAAQgOAAAADVIAAAvQABA1AKAsIAEAPIwkAAIAAtGIV3AAIAANGg");
	this.shape_13.setTransform(70,42);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],134), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("AKuGjQgZgfgEgJIgag4IgkhLQgthbhAgsQgYgQglgTQgtgVgTAAQgKAAgHAVQgIAXAAAeQAACuARBPIAJAjIwlAAIAAtGIV3AAIAANGg");
	this.shape_14.setTransform(70,42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape_2}]},4).to({state:[{t:this.shape_3}]},4).to({state:[{t:this.shape_4}]},4).to({state:[{t:this.shape_5}]},4).to({state:[{t:this.shape_6}]},4).to({state:[{t:this.shape_7}]},4).to({state:[{t:this.shape_8}]},4).to({state:[{t:this.shape_9}]},4).to({state:[{t:this.shape_10}]},4).to({state:[{t:this.shape_11}]},4).to({state:[{t:this.shape_12}]},4).to({state:[{t:this.shape_13}]},4).to({state:[{t:this.shape_14}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140,84);


(lib.horse_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],105), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape.setTransform(70,42);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],106), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_1.setTransform(70,42);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],107), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_2.setTransform(70,42);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],108), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_3.setTransform(70,42);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],109), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("AItGjQg3g5gPgUQgVgbgNgiQgFgNgahWIgchsQgOgogcgGIAAGHIwbAAIAAtGIV3AAIAANGg");
	this.shape_4.setTransform(70,42);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],110), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAAKwQgfgggrghQg+gvhLgrQgWgNg0gZIg9geIAAFbIAPgBIAcAFIA/AFQCQAABggwIAABBg");
	this.shape_5.setTransform(70,42);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],111), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAALiIhnhUIhThPQg2gxgDgFQgZgngpgXQgVgNgSgDIAAGLg");
	this.shape_6.setTransform(70,42);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],112), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAALFIhphYIg6g7Ig0gxQg6gogegPQgWgKgXgGIAAF2IFcAAIAAAWg");
	this.shape_7.setTransform(70,42);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],113), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAALdQgdgYgigUQgygeg1glQhDgtgFgLQgSgogcgZQgagXghgIIAAFLIFXAAIAAAlg");
	this.shape_8.setTransform(70,42);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],114), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("AK5GjQguhpg/hXQhxiZh9gSIAAFrIwZAAIAAtGIV3AAIAANGg");
	this.shape_9.setTransform(70,42);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],115), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("AG4GjIALgEQB4gwBehfIgPgKQhthJgigbQhshRgygoIAAF6IwYAAIAAtGIV3AAIAANGg");
	this.shape_10.setTransform(70,42);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],116), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAAL9QhJgwhkheQhThNhdgqIAAE7IBVALIBUAIg");
	this.shape_11.setTransform(70,42);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],117), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAAKyIg4gLQhdgYhngtQhHgfgbgTIAAEWIACAAg");
	this.shape_12.setTransform(70,42);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],118), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_13.setTransform(70,42);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],119), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_14.setTransform(70,42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape_2}]},4).to({state:[{t:this.shape_3}]},4).to({state:[{t:this.shape_4}]},4).to({state:[{t:this.shape_5}]},4).to({state:[{t:this.shape_6}]},4).to({state:[{t:this.shape_7}]},4).to({state:[{t:this.shape_8}]},4).to({state:[{t:this.shape_9}]},4).to({state:[{t:this.shape_10}]},4).to({state:[{t:this.shape_11}]},4).to({state:[{t:this.shape_12}]},4).to({state:[{t:this.shape_13}]},4).to({state:[{t:this.shape_14}]},4).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140,84);


(lib.horse_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],89), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape.setTransform(70,42);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],90), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_1.setTransform(70,42);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],91), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_2.setTransform(70,42);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],92), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_3.setTransform(70,42);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],93), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_4.setTransform(70,42);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],95), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_5.setTransform(70,42);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],96), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("AHlGjIAAghQgBiSgUgkQgGgIgPgNQgNgLgIgPIgag1QgXgqgNAAQgUAAgZBwQgcB5AAB3IAAAFIvaAAIAAtGIV3AAIAANGg");
	this.shape_6.setTransform(70,42);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],97), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAAKpQgXgVgbgVQgvghhCghIhGgiIg3gtQgfgZgbgNQgNAhgHBdQgFBAAABAQABBQARAcQAHAMAKAIg");
	this.shape_7.setTransform(70,42);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],98), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAALYIhahRQhUhIhRg7QhLg3gJAAQgQAAgBB4IADD/IgUAAIABACg");
	this.shape_8.setTransform(70,42);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],99), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAAK1QgxgmhAgoIhOgvIhFg5QgsgmgggHQABATgLALIAAFWg");
	this.shape_9.setTransform(70,42);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],101), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("AKsGjQhNg+gIgMQgagvgYg7QgTgsgSgXIhChQQgqgtgbAAQgJAAgKAGQgKAFgGAJIAAFgIwRAAIAAtGIV3AAIAANGg");
	this.shape_10.setTransform(70,42);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],102), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAAMFIgggzQhHhng1gtQgwgrgugaIhWgpIgOAAIAAF2g");
	this.shape_11.setTransform(70,42);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],103), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("AKeGjIAegWIAAAWgAq7GjIAAtGIV3AAIAAK9IgqgvQhUhbgygRQhFgYglgUIg4gkIgFAAIAAF0g");
	this.shape_12.setTransform(70,42);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],104), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("AJkGjQhUiHg4hCQgbgggnglIg0gxIAAE/IwdAAIAAtGIV3AAIAANGg");
	this.shape_13.setTransform(70,42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},17).to({state:[{t:this.shape_2}]},4).to({state:[{t:this.shape_3}]},4).to({state:[{t:this.shape_4}]},4).to({state:[{t:this.shape_5}]},4).to({state:[{t:this.shape_6}]},4).to({state:[{t:this.shape_7}]},4).to({state:[{t:this.shape_8}]},4).to({state:[{t:this.shape_9}]},4).to({state:[{t:this.shape_10}]},4).to({state:[{t:this.shape_11}]},4).to({state:[{t:this.shape_12}]},5).to({state:[]},5).to({state:[{t:this.shape_13}]},4).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140,84);


(lib.horse_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],72), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGgAFgGYICBgOQCUgYABgwQAAhAhmhbQhMhDhig3IgCAAg");
	this.shape.setTransform(70,42);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],73), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGgAFeFYIA6gGQC4gSA0gPQhwiWhIg3QgZgTgegQIgzgaIgEAAg");
	this.shape_1.setTransform(70,42);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],74), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGgAFbGJIBUAEQByAAA0gQQAbgIADgJQAAgahDhnQg+hhgNgJIhbg9QgWgOgZgMg");
	this.shape_2.setTransform(70,42);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],75), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAAMBQi1jPhNg2QgbgSgdgLIgigMIAAFfICEAIQBXAABLgPIA2gOIAAApg");
	this.shape_3.setTransform(70,42);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],77), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAALGQhZhchthIIiXhbIAAFoICIgGQCLgMBKgeIAABHg");
	this.shape_4.setTransform(70,42);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],78), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("AK0GjIg9hQQhBhTg7gsQhHg0g3gyIgdgbIAAFQIwbAAIAAtGIV3AAIAANGg");
	this.shape_5.setTransform(70,42);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],79), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGgAFiF6ICsAJIAcgFQASgGAAgMQAAgfgHgOQgIgMgZgRQhhhEhRhKg");
	this.shape_6.setTransform(70,42);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],80), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_7.setTransform(70,42);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],81), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_8.setTransform(70,42);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],83), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_9.setTransform(70,42);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],84), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_10.setTransform(70,42);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],85), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_11.setTransform(70,42);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],86), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_12.setTransform(70,42);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],87), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("AGdGjQBQgCBPgjQBQgkAAggQAAgViSh7IiYh/IAAF2IAtACIxKAAIAAtGIV3AAIAANGg");
	this.shape_13.setTransform(70,42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape_2}]},4).to({state:[{t:this.shape_3}]},4).to({state:[{t:this.shape_4}]},4).to({state:[{t:this.shape_5}]},4).to({state:[{t:this.shape_6}]},4).to({state:[{t:this.shape_7}]},4).to({state:[{t:this.shape_8}]},4).to({state:[{t:this.shape_9}]},4).to({state:[{t:this.shape_10}]},4).to({state:[{t:this.shape_11}]},4).to({state:[{t:this.shape_12}]},4).to({state:[{t:this.shape_13}]},4).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.resultTxt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 11
	this._txt11 = new cjs.Text("", "18px 'Quartz'", "#33CC00");
	this._txt11.name = "_txt11";
	this._txt11.lineHeight = 22;
	this._txt11.lineWidth = 164;
	this._txt11.setTransform(573.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this._txt11).wait(1));

	// Layer 12
	this._txt12 = new cjs.Text("", "18px 'Quartz'", "#33CC00");
	this._txt12.name = "_txt12";
	this._txt12.lineHeight = 22;
	this._txt12.lineWidth = 148;
	this._txt12.setTransform(561.2,51.1);

	this.timeline.addTween(cjs.Tween.get(this._txt12).wait(1));

	// Layer 13
	this._txt13 = new cjs.Text("", "18px 'Quartz'", "#33CC00");
	this._txt13.name = "_txt13";
	this._txt13.lineHeight = 22;
	this._txt13.lineWidth = 157;
	this._txt13.setTransform(556.2,91.1);

	this.timeline.addTween(cjs.Tween.get(this._txt13).wait(1));

	// Layer 14
	this._txt14 = new cjs.Text("", "18px 'Quartz'", "#33CC00");
	this._txt14.name = "_txt14";
	this._txt14.lineHeight = 22;
	this._txt14.lineWidth = 155;
	this._txt14.setTransform(549.2,136.1);

	this.timeline.addTween(cjs.Tween.get(this._txt14).wait(1));

	// Layer 15
	this._txt15 = new cjs.Text("", "18px 'Quartz'", "#33CC00");
	this._txt15.name = "_txt15";
	this._txt15.lineHeight = 22;
	this._txt15.lineWidth = 148;
	this._txt15.setTransform(550.2,182.1);

	this.timeline.addTween(cjs.Tween.get(this._txt15).wait(1));

	// Layer 16
	this._txt16 = new cjs.Text("", "18px 'Quartz'", "#33CC00");
	this._txt16.name = "_txt16";
	this._txt16.lineHeight = 22;
	this._txt16.lineWidth = 149;
	this._txt16.setTransform(548.2,228.1);

	this.timeline.addTween(cjs.Tween.get(this._txt16).wait(1));

	// Layer 17
	this._txt17 = new cjs.Text("", "18px 'Quartz'", "#33CC00");
	this._txt17.name = "_txt17";
	this._txt17.lineHeight = 22;
	this._txt17.lineWidth = 142;
	this._txt17.setTransform(552.2,273.1);

	this.timeline.addTween(cjs.Tween.get(this._txt17).wait(1));

	// Layer 18
	this._txt18 = new cjs.Text("", "18px 'Quartz'", "#33CC00");
	this._txt18.name = "_txt18";
	this._txt18.lineHeight = 22;
	this._txt18.lineWidth = 144;
	this._txt18.setTransform(555.2,319.1);

	this.timeline.addTween(cjs.Tween.get(this._txt18).wait(1));

	// Layer 19
	this._txt19 = new cjs.Text("", "18px 'Quartz'", "#33CC00");
	this._txt19.name = "_txt19";
	this._txt19.lineHeight = 22;
	this._txt19.lineWidth = 148;
	this._txt19.setTransform(564.2,364.1);

	this.timeline.addTween(cjs.Tween.get(this._txt19).wait(1));

	// Layer 20
	this._txt20 = new cjs.Text("", "18px 'Quartz'", "#33CC00");
	this._txt20.name = "_txt20";
	this._txt20.lineHeight = 22;
	this._txt20.lineWidth = 120;
	this._txt20.setTransform(570.2,407.6);

	this.timeline.addTween(cjs.Tween.get(this._txt20).wait(1));

	// Layer 21
	this._txt10 = new cjs.Text("1:00.48", "18px 'Quartz'", "#33CC00");
	this._txt10.name = "_txt10";
	this._txt10.lineHeight = 22;
	this._txt10.lineWidth = 496;
	this._txt10.setTransform(61.2,405.6);

	this.timeline.addTween(cjs.Tween.get(this._txt10).wait(1));

	// Layer 22
	this._txt9 = new cjs.Text("1:00.48", "18px 'Quartz'", "#33CC00");
	this._txt9.name = "_txt9";
	this._txt9.lineHeight = 22;
	this._txt9.lineWidth = 496;
	this._txt9.setTransform(53.2,360.1);

	this.timeline.addTween(cjs.Tween.get(this._txt9).wait(1));

	// Layer 23
	this._txt8 = new cjs.Text("1:00.48", "18px 'Quartz'", "#33CC00");
	this._txt8.name = "_txt8";
	this._txt8.lineHeight = 22;
	this._txt8.lineWidth = 496;
	this._txt8.setTransform(43.2,314.1);

	this.timeline.addTween(cjs.Tween.get(this._txt8).wait(1));

	// Layer 24
	this._txt7 = new cjs.Text("1:00.48", "18px 'Quartz'", "#33CC00");
	this._txt7.name = "_txt7";
	this._txt7.lineHeight = 22;
	this._txt7.lineWidth = 496;
	this._txt7.setTransform(39.2,269.1);

	this.timeline.addTween(cjs.Tween.get(this._txt7).wait(1));

	// Layer 25
	this._txt6 = new cjs.Text("1:00.48", "18px 'Quartz'", "#33CC00");
	this._txt6.name = "_txt6";
	this._txt6.lineHeight = 22;
	this._txt6.lineWidth = 496;
	this._txt6.setTransform(39.2,225.1);

	this.timeline.addTween(cjs.Tween.get(this._txt6).wait(1));

	// Layer 26
	this._txt5 = new cjs.Text("1:00.48", "18px 'Quartz'", "#33CC00");
	this._txt5.name = "_txt5";
	this._txt5.lineHeight = 22;
	this._txt5.lineWidth = 496;
	this._txt5.setTransform(39.2,179.1);

	this.timeline.addTween(cjs.Tween.get(this._txt5).wait(1));

	// Layer 27
	this._txt4 = new cjs.Text("1:00.48", "18px 'Quartz'", "#33CC00");
	this._txt4.name = "_txt4";
	this._txt4.lineHeight = 22;
	this._txt4.lineWidth = 496;
	this._txt4.setTransform(36.2,135.1);

	this.timeline.addTween(cjs.Tween.get(this._txt4).wait(1));

	// Layer 28
	this._txt3 = new cjs.Text("1:00.48", "18px 'Quartz'", "#FF9900");
	this._txt3.name = "_txt3";
	this._txt3.lineHeight = 22;
	this._txt3.lineWidth = 496;
	this._txt3.setTransform(40.2,90.1);

	this.timeline.addTween(cjs.Tween.get(this._txt3).wait(1));

	// Layer 29
	this._txt2 = new cjs.Text("1:00.48", "18px 'Quartz'", "#FFFFFF");
	this._txt2.name = "_txt2";
	this._txt2.lineHeight = 22;
	this._txt2.lineWidth = 496;
	this._txt2.setTransform(47.2,46);

	this.timeline.addTween(cjs.Tween.get(this._txt2).wait(1));

	// Layer 30
	this._txt1 = new cjs.Text("1:00.48", "18px 'Quartz'", "#FFFF33");
	this._txt1.name = "_txt1";
	this._txt1.lineHeight = 22;
	this._txt1.lineWidth = 496;
	this._txt1.setTransform(58,0);

	this.timeline.addTween(cjs.Tween.get(this._txt1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(36.2,0,705.3,433.6);


(lib.TxtMessage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this._txt3 = new cjs.Text("11", "15px 'Quartz'", "#00FF00");
	this._txt3.name = "_txt3";
	this._txt3.textAlign = "center";
	this._txt3.lineHeight = 18;
	this._txt3.lineWidth = 153;
	this._txt3.setTransform(886.3,50);

	this.timeline.addTween(cjs.Tween.get(this._txt3).wait(1));

	// Layer 2
	this._txt2 = new cjs.Text("98", "15px 'Quartz'", "#FF6666");
	this._txt2.name = "_txt2";
	this._txt2.textAlign = "center";
	this._txt2.lineHeight = 18;
	this._txt2.lineWidth = 153;
	this._txt2.setTransform(886.3,26.7);

	this.timeline.addTween(cjs.Tween.get(this._txt2).wait(1));

	// Layer 3
	this._txt1 = new cjs.Text("98", "15px 'Quartz'", "#FFFF33");
	this._txt1.name = "_txt1";
	this._txt1.textAlign = "center";
	this._txt1.lineHeight = 18;
	this._txt1.lineWidth = 153;
	this._txt1.setTransform(886.3,3.7);

	this.timeline.addTween(cjs.Tween.get(this._txt1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(809.9,3.7,156.9,68.6);


(lib.Symbol405 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,1,1,0.996)").s().p("ALdHxIAAjXIB3AAIAADXgAgbHxIg9g+IA9g5IEeAAIA9A5Ig9A+gArHHxIg9g+IA9g5IEgAAIA9A5Ig9A+gAEXFlIAAkaIB2g9IAAFXIg7A8gAinFlIAAlXIB3A9IAAEaIg7A8gAmTFlIAAkaIB2g9IAAFXIg7A8gAtTFlIAAlXIB3A9IAAEaIg7A8gALdByIAAnqIB3h4IAAK8gAoVA3Ihwg3IBwhAIBuAAIBwBAIhwA3gAEXhTIAAkQIA7g9IA7A9IAAFWgAinljIA8g9IA7A9IAAEQIh3BGgAtTljIA8g9IA7A9IAAEQIh3BGgAgbl4Ig9g7IA9g9IEeAAIA9A9Ig9A7gArHl4Ig9g7IA9g9IGRAAIhxB4g");
	this.shape.setTransform(96.5,61.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11.3,11.6,170.5,99.4);


(lib.Symbol403 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,1,1,0.996)").s().p("Ag6F5IAAkuIB1g8IAAHigAg6hTIAAkmIB1h3IAAHjg");
	this.shape.setTransform(35.2,55.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(29.3,5.5,11.9,99.4);


(lib.Symbol401 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,1,1,0.996)").s().p("AiOHwIg9g9IA9g5IE4AAIBwB2gAkZFmIAAlXIB3A7IAAEcIg8A6gAiOA2Ihvg2IBvg/IEeAAIBxA/IhxA2gACkhSIAAkSIA8g7IA6A7IAAFWgAkZl5ICLh2IEeAAIA+A9Ig+A5g");
	this.shape.setTransform(31.5,57.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.2,7.9,56.6,99.4);


(lib.Symbol399 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,1,1,0.996)").s().p("AkNHwIBzh2IEeAAIA9A5Ig9A9gACYFmIAAkcIB2g7IAAFXIg7A6gAiaA2Ihwg2IBwg/IEeAAIBwA/IhwA2gACYhSIAAkSIA7g7IA7A7IAAFWgAial4Ihzh3IGRAAIA9A8Ig9A7g");
	this.shape.setTransform(33,59.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.9,9.6,54.1,99.4);


(lib.Symbol397 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,1,1,0.996)").s().p("AClF6IAAkvIB2g8IAAHigAiNA3Ihxg3IBxhAIEeAAIBvBAIhvA3gAClhTIAAklIB2h4IAAHjgAkZnwIB2B4IAAElIh2BGg");
	this.shape.setTransform(36,56);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.7,6.3,56.6,99.4);


(lib.Symbol395 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,1,1,0.996)").s().p("AkZHwIBzh3IE2AAIA9A7Ig9A8gAClFmIAAkbIB2g8IAAFXIg8A7gAiOA2Ihwg2IBwhAIEeAAIBxBAIhxA2gAkZljIA8g8IA6A8IAAERIh2BFgAiOl5Ig8g5IA8g9IGPAAIhxB2g");
	this.shape.setTransform(34.5,55.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.2,5.4,56.6,99.4);


(lib.Symbol393 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,1,1,0.996)").s().p("AiNHxIg+g+IA+g5IEeAAIA9A5Ig9A+gACkFlIAAkaIB2g9IAAFXIg6A7gAkaFlIAAlXIB4A9IAAEaIg8A7gAiNA3Ihxg3IBxhAIEeAAIBvBAIhvA3gAkalkIA8g8IA8A8IAAERIh4BFgAiNl4Ig+g7IA+g9IGOAAIhwB4g");
	this.shape.setTransform(29.1,57.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.8,8.1,56.6,99.4);


(lib.Symbol391 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,1,1,0.996)").s().p("ACbF6IAAkvIB1g8IAAHigACbhTIAAkRIB1h3IAAHNgAiYl4Ih4h4IIOAAIh6B4g");
	this.shape.setTransform(30.8,55.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.5,5.8,54.6,99.4);


(lib.Symbol389 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,1,1,0.996)").s().p("AiNHxIg+g9IA+g6IEeAAIA9A6Ig9A9gAClFlIAAkaIB1g9IAAFXIg6A8gAkaFlIAAlXIB3A9IAAEaIg6A8gAiNA3Ihxg3IBxhAIEeAAIBvBAIhvA3gAClhTIAAkQIA7g9IA6A9IAAFWgAkaljIA9g9IA6A9IAAEQIh3BGgAiNl4Ig+g7IA+g9IEeAAIA9A9Ig9A7g");
	this.shape.setTransform(28.5,57.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.2,8,56.6,99.4);


(lib.Symbol387 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,1,1,0.996)").s().p("AkBHwIBzh2IEeAAIA+A5Ig+A9gACkFmIAAkTIB2hEIAAFXIg6A6gAiOA2Ihvg2IBvg/IEeAAIBxA/IhxA2gACkhIIAAkcIA8g7IA6A7IAAFWgAkZlkIA7g7IA8A7IAAEcIh3A6gAiOl4Ig9g7IA9g8IEeAAIA+A8Ig+A7g");
	this.shape.setTransform(28.4,56.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,6.9,56.6,99.4);


(lib.Symbol385 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,1,1,0.996)").s().p("ABWHxIg8g+IA8g5IEgAAIA9A5Ig9A+gAn/F6IAAkvIB3g8IAAHigAGLFlIAAkaIB2g9IAAFXIg8A8gAgzFlIAAlXIB0A9IAAEaIg6A8gAGLhTIAAkQIA6g9IA8A9IAAFWgAgzljIA6g9IA6A9IAAEQIh0BGgAn/hTIAAklIB3h4IAAHjgABWl4Ig8g7IA8g9IEgAAIA9A9Ig9A7g");
	this.shape.setTransform(50.2,57.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,7.5,102.6,99.4);


(lib.Symbol382 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(71,128,225,0)","#D5E3FB","rgba(71,127,223,0)"],[0.09,0.506,0.925],-186.4,0,186.5,0).s().p("A9HAIIAAgOMA6PAAAIAAAOg");
	this.shape.setTransform(285.3,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(71,128,225,0)","#D5E3FB","rgba(71,127,223,0)"],[0.09,0.506,0.925],-186.4,0,186.5,0).s().p("A9HAGIAAgLMA6PAAAIAAALg");
	this.shape_1.setTransform(285.3,75.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(71,128,225,0)","rgba(23,95,217,0.8)","rgba(71,127,223,0)"],[0.09,0.506,0.925],-278.2,0,278.3,0).s().p("EgrdAF3IAArtMBW7AAAIAALtg");
	this.shape_2.setTransform(278.3,38.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.4,556.5,75.7);


(lib.horseHorse8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],52), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape.setTransform(70,42);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],53), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_1.setTransform(70,42);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],54), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_2.setTransform(70,42);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],55), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_3.setTransform(70,42);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],56), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_4.setTransform(70,42);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],57), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_5.setTransform(70,42);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],58), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_6.setTransform(70,42);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],59), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_7.setTransform(70,42);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],60), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_8.setTransform(70,42);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],61), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_9.setTransform(70,42);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],62), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_10.setTransform(70,42);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],63), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_11.setTransform(70,42);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],64), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_12.setTransform(70,42);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],65), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_13.setTransform(70,42);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],66), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_14.setTransform(70,42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140,84);


(lib.horseHorse4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],37), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape.setTransform(70,42);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],38), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_1.setTransform(70,42);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],39), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_2.setTransform(70,42);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],40), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_3.setTransform(70,42);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],41), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_4.setTransform(70,42);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],42), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_5.setTransform(70,42);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],43), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_6.setTransform(70,42);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],44), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_7.setTransform(70,42);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],45), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_8.setTransform(70,42);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],46), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_9.setTransform(70,42);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],47), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_10.setTransform(70,42);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],48), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_11.setTransform(70,42);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],49), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_12.setTransform(70,42);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],50), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_13.setTransform(70,42);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],51), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_14.setTransform(70,42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140,84);


(lib.horseHorse2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],21), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape.setTransform(70,42);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],22), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_1.setTransform(70,42);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],23), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_2.setTransform(70,42);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],25), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_3.setTransform(70,42);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],26), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_4.setTransform(70,42);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],27), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_5.setTransform(70,42);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],28), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_6.setTransform(70,42);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],29), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_7.setTransform(70,42);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],30), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_8.setTransform(70,42);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],31), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_9.setTransform(70,42);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],32), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_10.setTransform(70,42);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],33), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_11.setTransform(70,42);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],34), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_12.setTransform(70,42);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],35), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_13.setTransform(70,42);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],36), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_14.setTransform(70,42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140,84);


(lib.horseHorse1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],3), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape.setTransform(70,42);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],4), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_1.setTransform(70,42);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],5), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_2.setTransform(70,42);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],6), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_3.setTransform(70,42);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],8), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_4.setTransform(70,42);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],9), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_5.setTransform(70,42);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],10), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_6.setTransform(70,42);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],11), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_7.setTransform(70,42);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],12), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_8.setTransform(70,42);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],14), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_9.setTransform(70,42);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],15), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_10.setTransform(70,42);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],16), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_11.setTransform(70,42);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],17), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_12.setTransform(70,42);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],18), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_13.setTransform(70,42);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],20), null, new cjs.Matrix2D(1,0,0,1,-70,-42)).s().p("Aq7GjIAAtGIV3AAIAANGg");
	this.shape_14.setTransform(70,42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140,84);


(lib.Symbol131 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],146), null, new cjs.Matrix2D(1,0,0,1,-114,-38)).s().p("AxzF7IAAr1MAjnAAAIAAL1g");
	this.shape.setTransform(841,39.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(727,1.4,228,76);


(lib.Symbol79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhOHAxOMAAAhibMCcOAAAMAAABibg");
	this.shape.setTransform(500,315);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1000,630);


(lib.CountDownMC_119 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol385();
	this.instance.setTransform(190.8,-39.6,1.7,1.7);

	this.instance_1 = new lib.Symbol387();
	this.instance_1.setTransform(222.8,-39.9,1.922,1.7);
	this.instance_1._off = true;

	this.instance_2 = new lib.Symbol389();
	this.instance_2.setTransform(221.3,-39.9,1.97,1.7);
	this.instance_2._off = true;

	this.instance_3 = new lib.Symbol391();
	this.instance_3.setTransform(221.2,-38,1.946,1.7);
	this.instance_3._off = true;

	this.instance_4 = new lib.Symbol393();
	this.instance_4.setTransform(223,-39.8,1.943,1.7);
	this.instance_4._off = true;

	this.instance_5 = new lib.Symbol395();
	this.instance_5.setTransform(220.6,-38.5,1.691,1.691);
	this.instance_5._off = true;

	this.instance_6 = new lib.Symbol397();
	this.instance_6.setTransform(217.9,-39,1.712,1.712);
	this.instance_6._off = true;

	this.instance_7 = new lib.Symbol399();
	this.instance_7.setTransform(223.6,-37.8,1.628,1.628);
	this.instance_7._off = true;

	this.instance_8 = new lib.Symbol401();
	this.instance_8.setTransform(224.6,-38.3,1.649,1.649);
	this.instance_8._off = true;

	this.instance_9 = new lib.Symbol403();
	this.instance_9.setTransform(238.2,-37,1.678,1.678);
	this.instance_9._off = true;

	this.instance_10 = new lib.Symbol405();
	this.instance_10.setTransform(120.1,-39.1,1.646,1.646);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.58,scaleY:1.58,x:196.6,y:-32.6},0).wait(1).to({scaleX:1.47,scaleY:1.47,x:202.5,y:-25.7},0).wait(1).to({scaleX:1.35,scaleY:1.35,x:208.4,y:-18.8},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:214.3,y:-11.9},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:220.1,y:-4.9},0).wait(1).to({scaleX:1,scaleY:1,x:226,y:2},0).to({_off:true},17).wait(246));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(23).to({_off:false},0).wait(1).to({scaleX:1.79,scaleY:1.58,x:226.7,y:-33},0).wait(1).to({scaleX:1.66,scaleY:1.47,x:230.5,y:-26},0).wait(1).to({scaleX:1.53,scaleY:1.35,x:234.4,y:-19.2},0).wait(1).to({scaleX:1.39,scaleY:1.23,x:238.3,y:-12.2},0).wait(1).to({scaleX:1.26,scaleY:1.12,x:242.1,y:-5.3},0).wait(1).to({scaleX:1.13,scaleY:1,x:245.9,y:1.7},0).to({_off:true},18).wait(222));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(47).to({_off:false},0).wait(1).to({scaleX:1.83,scaleY:1.58,x:225.2,y:-33},0).wait(1).to({scaleX:1.7,scaleY:1.47,x:229.2,y:-26},0).wait(1).to({scaleX:1.56,scaleY:1.35,x:233.1,y:-19.2},0).wait(1).to({scaleX:1.43,scaleY:1.23,x:237.1,y:-12.2},0).wait(1).to({scaleX:1.29,scaleY:1.12,x:241.1,y:-5.3},0).wait(1).to({scaleX:1.16,scaleY:1,x:245,y:1.7},0).to({_off:true},18).wait(198));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(71).to({_off:false},0).wait(1).to({scaleX:1.81,scaleY:1.58,x:225.2,y:-31.2},0).wait(1).to({scaleX:1.68,scaleY:1.47,x:229.2,y:-24.4},0).wait(1).to({scaleX:1.55,scaleY:1.35,x:233.2,y:-17.6},0).wait(1).to({scaleX:1.41,scaleY:1.23,x:237.1,y:-10.8},0).wait(1).to({scaleX:1.28,scaleY:1.12,x:241.1,y:-4},0).wait(1).to({scaleX:1.15,scaleY:1,x:245.1,y:2.8},0).to({_off:true},18).wait(174));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(95).to({_off:false},0).wait(1).to({scaleX:1.81,scaleY:1.58,x:226.9,y:-32.9},0).wait(1).to({scaleX:1.68,scaleY:1.47,x:230.7,y:-26},0).wait(1).to({scaleX:1.54,scaleY:1.35,x:234.5,y:-19},0).wait(1).to({scaleX:1.41,scaleY:1.23,x:238.4,y:-12.1},0).wait(1).to({scaleX:1.28,scaleY:1.12,x:242.1,y:-5.2},0).wait(1).to({scaleX:1.14,scaleY:1,x:246,y:1.8},0).to({_off:true},18).wait(150));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(119).to({_off:false},0).wait(1).to({scaleX:1.58,scaleY:1.58,x:224.6,y:-31.7},0).wait(1).to({scaleX:1.46,scaleY:1.46,x:228.6,y:-24.8},0).wait(1).to({scaleX:1.35,scaleY:1.35,x:232.7,y:-18},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:236.7,y:-11.2},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:240.7,y:-4.3},0).wait(1).to({scaleX:1,scaleY:1,x:244.6,y:2.5},0).to({_off:true},17).wait(127));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(142).to({_off:false},0).wait(1).to({scaleX:1.59,scaleY:1.59,x:222.2,y:-32.1},0).wait(1).to({scaleX:1.48,scaleY:1.48,x:226.4,y:-25.2},0).wait(1).to({scaleX:1.36,scaleY:1.36,x:230.7,y:-18.3},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:235,y:-11.4},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:239.2,y:-4.4},0).wait(1).to({scaleX:1,scaleY:1,x:243.5,y:2.5},0).to({_off:true},18).wait(103));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(166).to({_off:false},0).wait(1).to({scaleX:1.52,scaleY:1.52,x:227.2,y:-31.4},0).wait(1).to({scaleX:1.42,scaleY:1.42,x:230.7,y:-25.2},0).wait(1).to({scaleX:1.31,scaleY:1.31,x:234.4,y:-18.8},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:237.9,y:-12.5},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:241.5,y:-6.1},0).wait(1).to({scaleX:1,scaleY:1,x:245.1,y:0.2},0).to({_off:true},18).wait(79));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(190).to({_off:false},0).wait(1).to({scaleX:1.54,scaleY:1.54,x:228.2,y:-31.9},0).wait(1).to({scaleX:1.43,scaleY:1.43,x:231.8,y:-25.4},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:235.4,y:-19},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:239,y:-12.5},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:242.6,y:-6.2},0).wait(1).to({scaleX:1,scaleY:1,x:246.1,y:0.2},0).to({_off:true},18).wait(55));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(214).to({_off:false},0).wait(1).to({scaleX:1.57,scaleY:1.57,x:241,y:-30.4},0).wait(1).to({scaleX:1.45,scaleY:1.45,x:243.7,y:-23.8},0).wait(1).to({scaleX:1.34,scaleY:1.34,x:246.6,y:-17.3},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:249.3,y:-10.7},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:252.1,y:-4.1},0).wait(1).to({scaleX:1,scaleY:1,x:254.8,y:2.5},0).to({_off:true},18).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(238).to({_off:false},0).wait(1).to({scaleX:1.48,scaleY:1.48,x:135.8,y:-29.3},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:151.3,y:-19.5},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:167,y:-9.8},0).wait(1).to({scaleX:1,scaleY:1,x:182.6,y:0},0).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(188.9,-26.8,174.4,169);


(lib.CountBar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol382("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.4,556.5,75.7);


(lib.viewMessageBarMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol131("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 8
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["_res_atlas_"],147), null, new cjs.Matrix2D(1,0,0,1,-313,-35)).s().p("Egw5AFdIAAq5MBhzAAAIAAK5g");
	this.shape.setTransform(436.3,36.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(123.3,1.4,831.7,76);


(lib.TakePhoto = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol79();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.969},0).wait(1).to({alpha:0.941},0).wait(1).to({alpha:0.91},0).wait(1).to({alpha:0.871},0).wait(1).to({alpha:0.82},0).wait(1).to({alpha:0.762},0).wait(1).to({alpha:0.699},0).wait(1).to({alpha:0.641},0).wait(1).to({alpha:0.551},0).wait(1).to({alpha:0.469},0).wait(1).to({alpha:0.379},0).wait(1).to({alpha:0.289},0).wait(1).to({alpha:0.199},0).wait(1).to({alpha:0.109},0).wait(1).to({alpha:0},0).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1000,630);


(lib.CountTime = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this._overTime = new cjs.Text("235", "69px 'Quartz'", "#FFFFFF");
	this._overTime.name = "_overTime";
	this._overTime.textAlign = "center";
	this._overTime.lineHeight = 84;
	this._overTime.lineWidth = 396;
	this._overTime.setTransform(509.8,278.1);

	this.timeline.addTween(cjs.Tween.get(this._overTime).wait(1));

	// Layer 2
	this._countDown = new lib.CountDownMC_119();
	this._countDown.setTransform(364.7,288.3,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this._countDown).wait(1));

	// Layer 3
	this.count_mc = new lib.CountBar();
	this.count_mc.setTransform(329.9,282.5,0.721,1.087);

	this.timeline.addTween(cjs.Tween.get(this.count_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(312,272.2,418.9,101.4);


// stage content:
(lib._res = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;