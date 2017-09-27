function turnOnOff (id){
	var image = document.getElementById(id).src;
	if (image.includes('velaOff.jpg')) {
		document.getElementById(id).src = 'velaOn.jpg';
		document.getElementById('turnOnButton').innerHTML = "Turn off the candel";
		console.log('1');
	}
	if (image.includes('velaOn.jpg'))  {
		document.getElementById(id).src = 'velaOff.jpg';
		document.getElementById('turnOnButton').innerHTML = "Turn on the candel";
		console.log('2');
	}

}

function showMeOther (id){
	document.getElementById(id).style.display = 'block';
}

function changeSize (id){
	if (document.getElementById(id).style.width == '25px') {
		document.getElementById(id).style.width = '50px';
		document.getElementById('changeSizeButton').innerHTML = "Make it smaller";
	}
	else{
		document.getElementById(id).style.width = '25px';
		document.getElementById('changeSizeButton').innerHTML = "Make it bigger";
	}
}

function hideImage (id){
	if(document.getElementById(id).style.display == 'none'){
		document.getElementById(id).style.display = 'block';
		document.getElementById('hideButton').innerHTML = 'Hide candel';
	}
	else{
		document.getElementById(id).style.display = 'none';
		document.getElementById('hideButton').innerHTML = 'Show candel';
	}
}