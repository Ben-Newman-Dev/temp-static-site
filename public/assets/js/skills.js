$.getJSON("./data.json", function (data) {
	const jsonResponse = data;

	const loadSkills = () => {
		const knownDOM = document.getElementById("skills-wrapper");
		const learnDOM = document.getElementById("skills-wrapper-2");

		jsonResponse.known.forEach((skill) => {
			const article = createNewElement(skill);
			knownDOM.appendChild(article);
		});

		jsonResponse.learn.forEach((skill) => {
			const article = createNewElement(skill);
			learnDOM.appendChild(article);
		});
	};

	const createNewElement = (skill) => {
		const article = document.createElement("article");
		const link = document.createElement("a");
		const header = document.createElement("h3");
		const image = document.createElement("img");
		const body = document.createElement("p");

		link.href = skill.link;
		header.innerText = skill.title;
		image.src = skill.image;
		body.innerText = skill.body;

		article.appendChild(header);
		article.appendChild(image);
		article.appendChild(body);

		link.appendChild(article);
		return link;
	};

	loadSkills();
});
