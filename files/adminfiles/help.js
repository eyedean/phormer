//var shiftDown = false;
var dont_help = false;
var _AIDIN_MAIL = "p@horm.org";

document.onmouseup = captureMousedown;
document.onkeydown = captureKeydown;
document.onkeyup = captureKeyup;

function captureMousedown(e) {
	ReleaseMouse();
	var mc = e?e.which:window.event.button;
	var myX = getMyXY(e, 0);
	if (mc == 1 && (window.screen.width - myX > 20))
		HideHelp();
}

function captureKeydown(e) {
	var k = e?e.which:window.event.keyCode;
	if (k == 27)
		HideHelp();
	if (k == 16) // shift
		shiftDown = true;
}


function captureKeyup(e) {
	var k = e?e.which:window.event.keyCode;
	if (k == 16) // shift
		shiftDown = false;
}


function DontHideHelp() {
	dont_help = true;
}


function HideHelp() {
	if ((dgp('helpBox').style.display != 'block') || (dont_help)) {
		dont_help = false;
		return;
	}
	dgp('helpBox').style.display = 'none';
	dgp('helpBoxLegend').innerHTML = '';
	SwitchSelectIE(1);
	if (!isIE()) {
		window.blur();
		window.focus();
	}
}

function dgp(x) {
	return document.getElementById(x);
}

function ShowHelp(s, eve, lang) {
	if ((dgp('helpBoxLegend').innerHTML == s)) {
		HideHelp();
		return;
	}
	dont_help = false;
	var myX = parseInt(getMyXY(eve, 0));
	var myY = parseInt(getMyXY(eve, 1));
	if (myX < 100)
		myX = 100;
	if (myX + 350 > window.screen.width-50)
		myX = window.screen.width-400;
	dgp('helpBox').style.top  = '' + (myY+10) +'px';
	dgp('helpBox').style.left = '' + (myX-70)+'px';
	dgp('helpBox').style.display = 'block';

	dgp('helpBoxLegend').innerHTML = /* 'Help : ' + */ s;

	var helpMsg;
	switch (lang) {
		case 'fr':			helpMsg = GetFrHelpMsg(s); break;
		case 'it':			helpMsg = GetItHelpMsg(s); break;
		case 'sk':			helpMsg = GetSkHelpMsg(s); break;		
		default:			helpMsg = GetEnHelpMsg(s);
	}
	dgp('helpBoxInner').innerHTML = helpMsg;
	SwitchSelectIE(0);
}


function getMyXY(eve, t) {
	var myY, myX;
	if(!eve)
		var eve=window.event;
	if (document.all){
		myX=eve.clientX;
		var dY = 0;
		if (document.body.scrollTop)
			dY=document.body.scrollTop;
		else
			dY=document.documentElement.scrollTop;
		myY=eve.clientY+dY;
	}
	else {
		myX=eve.pageX;
		myY=eve.pageY;
	}
	return ((t)?myY:myX);
}


function SwitchSelectIE(t) {
	if (isIE()) {
		var SS = document.styleSheets[0];
		if (SS.cssRules)
			inRule = SS.cssRules;
		else if (SS.rules)
			inRule = SS.rules;
		if (dg('helpBox').style.display != 'none')
			t = 0;
		inRule[0].style.visibility = (t)?'visible':'hidden';
	}
}

function isIE() {
	return (navigator.appName.indexOf('Microsoft') != -1) && !window.opera;
}
