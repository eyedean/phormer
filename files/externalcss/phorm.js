function dg(x) {
	return document.getElementById(x);
}

function setOpac(cur, strength) {
	if (cur.style.MozOpacity)
		cur.style.MozOpacity=strength;
	else 
		if (cur.filters)
			cur.filters.alpha.opacity=strength*100;
}

function LightenIt(cur) {
	setOpac(cur, 1);
}

function DarkenIt(cur) {
	setOpac(cur, 0.65);
}