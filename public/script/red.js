// sidebar
const menuBtn = document.querySelector(".menuBtn");
const menu_exit = document.querySelector(".menu_exit");
const sidebar = document.getElementById("sidebar");
const appear = document.querySelector(".appear");

// forms
let forms = document.querySelectorAll("form");
const formBTN = document.querySelectorAll('button[type="submit"]');
const testBTN = document.querySelector(".inleiding_text");

menuBtn.addEventListener("click", function (e) {
	sidebar.classList.add(appear);
	console.log("went in");
	console.log(e);
});

menu_exit.addEventListener("click", (e) => {
	sidebar.classList.remove("appear");
	console.log("went out");
	console.log(e);
});

if (formBTN) {
	forms.forEach((form) => {
		form.addEventListener("submit", function (e) {
			let form = this;
			let data = new FormData(this);
			// console.log(data,"and",this)
			data.append("enhanced", true);

			// add loader
			this.classList.add('loader');

			fetch(this.action, {
				body: new URLSearchParams(data),
				method: this.method,
			})
				.then(function (rawStream) {
					return rawStream.text();
					// loading state
					this.classList.remove('loader');

					// console.log('[3]',response.text());
				})
				.then(function (text) {
					// console.log(text)
					// Een eventuele loading state haal je hier ook weer weg
					form.innerHTML = text;

					// add new sate to buttons
				})
				.catch((x) => {
					// Handle error if fetching data fails
					alert("something went wrong", x);
				});

			e.preventDefault();
		});
	});
	testBTN.addEventListener("click", () => {
		console.log(forms);
	});
}
