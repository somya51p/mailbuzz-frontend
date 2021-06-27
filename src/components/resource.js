
let output = document.getElementsById('output');
let buttons = document.getElementsByClassName('tool--btn');
for (let btn of buttons) {
	btn.addEventListener('click', () => {
		let cmd = btn.dataset['command'];
		if(cmd === 'createlink') {
			let url = prompt("Enter the link here: ", "http:\/\/");
			input.document.execCommand(cmd, false, url);
		} else {
			input.document.execCommand(cmd, false, null);
		}
	})
}
