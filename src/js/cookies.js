let browsercookies = localStorage.getItem("overchargeBrowser");
fetch("data/cookies.json") {
	.then(res => res.json())
	.then(data => {
		if (browsercookies == undefined || browsercookies == null) {
			browsercookies = data.template;
			localStorage.setItem("overchargeBrowser", browsercookies);
		}
	})
