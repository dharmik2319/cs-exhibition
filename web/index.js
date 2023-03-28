var editor = ace.edit("editor");
editor.setTheme("ace/theme/twilight");
editor.session.setMode("ace/mode/html");
editor.setReadOnly(true);
editor.setAutoScrollEditorIntoView(true);

function makeAceEditorResizable(editor) {
	// mouseup = css resize end
	document.addEventListener("mouseup", function(e) {
		editor.resize();
	});
}

var aceEditorInstance = ace.edit("editor");
makeAceEditorResizable(aceEditorInstance);


function fetchHtml() {
	fetch(window.location.href)
		.then((response) => {
			return response.text();
		})
		.then((html) => {
			editor.setValue(html)
		})

}

function putLines(lines) {
	editor.setOption("maxLines", lines);
}
editor.setFontSize(13);
/* abandon all hope if you wish to understand this
 * dont touch it as well, if it aint broke, dont fix it*/
function resolveAfter2Seconds() {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve('resolved');
		}, 300);
	});
}

async function asyncCall() {
	fetchHtml();
	const result = await resolveAfter2Seconds();
	putLines(editor.getValue().match(/\n/g).length + 1); // Expected output: "resolved"
}

asyncCall();

