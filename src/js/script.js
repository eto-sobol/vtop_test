let y = 1930;
while (y < 2023) {
	y++;
	document.getElementById('year').innerHTML += '<option>' + y + '</option>';
}

let d = 0;
while (d < 31) {
	d++;
	document.getElementById('day').innerHTML += '<option>' + d + '</option>';
}