let browsercookies = localStorage.getItem("overchargeBrowserCookies");
if (browsercookies == undefined || browsercookies == null) {
	fetch("data/cookies.json")
		.then(res => res.json())
		.then(data => {
			browsercookies = data.template;
		})
}
