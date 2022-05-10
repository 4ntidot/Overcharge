let browsercookies = localStorage.getItem("overchargeBrowser");
fetch("data/cookies.json")
	.then(res => res.json())
	.then(data => {
		if (browsercookies == undefined || browsercookies == null) {
			browsercookies = data.template;
			localStorage.setItem("overchargeBrowser", browsercookies);
		}
	})

function loadHistory() {
	const historyContainer = document.getElementById("history");
	const history = browsercookies.history;
	var i = 0;
	for (i==0, i < history.length, i++) {
		const section = historyContainer.innerHTML;
		const addition `
		<li class="shortcut"><a href="${history[i].url}" target="webview">
			<span class="shortcut-title">${history[i].title}</span><br>
			<span class="shortcut-url">${history[i].url}</span>
		</a></li>`
		historyContainer.innerHTML = section + addition;
		i += 1;
	}
}
