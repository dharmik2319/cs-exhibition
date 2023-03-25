var editor = ace.edit("editor");
editor.setTheme("ace/theme/twilight");
editor.session.setMode("ace/mode/html");
editor.setReadOnly(true);

function fetchHtml() {
	fetch(window.location.href)
	.then((response) => {
	return response.text();
	})
	.then((html) => {
	editor.setValue(html)     
	});
}
window.onload = fetchHtml();
