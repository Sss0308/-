let mode = 'full';
//const now = new Date();
const output = document.getElementById('output');
const fullBtn = document.getElementById('full');
const deleteBtn = document.getElementById('date');
const timeBtn = document.getElementById('time');

fullBtn.onclick = function () {
	mode = 'full';
	update();
};
deleteBtn.onclick = function () {
	mode = 'date';
	update();
};
timeBtn.onclick = function () {
	mode = 'time';
	update();
};

update();
setInterval(() => {
	update();
}, 1000);

function update() {
	output.textContent = format(mode);
}
function format(formatMode) {
	const now = new Date();
	switch (formatMode) {
		case 'time':
			return now.toLocaleTimeString();
		case 'date':
			return now.toLocaleDateString();
		case 'full':
			return now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
		default:
			return now.toLocaleTimeString();
	}
}
