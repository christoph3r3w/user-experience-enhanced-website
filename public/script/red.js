// sidebar
const menuBtn = document.querySelector(".menuBtn");
const menu_exit = document.querySelector(".menu_exit");
const sidebar = document.getElementById("sidebar");
const appear = document.querySelector(".appear");

// forms
let forms = document.querySelectorAll("form");
const formBTN = document.querySelectorAll('button[type="submit"]');
const testBTN = document.querySelector(".inleiding_text");

// date
const CT = document.querySelector('header .h-main-datum strong');


// sidebar 
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

//forms
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

					// view transition for form
					if(!document.startViewTransition){
						//remove loader
						form.innerHTML = text;
						form.classList.remove('loader');
					}else{
						document.startViewTransition(() => {
							form.innerHTML = text;
							form.classList.remove('loader');
						})
					}

					
					
					// add new sate to buttons
				})
				.catch((x) => {
					// Handle error if fetching data fails
					// Add error state
					alert("something went wrong", x);
				});

				

			e.preventDefault();
			testBTN.addEventListener("click", () => {
				console.log(forms);
			});
			
		});
	});
	
}

// console.log("start");



// date
// function header_date() {

//     const now = new Date();

//     const T_hour = String(now.getHours()).padStart(2, '0');
//     const T_minute = String(now.getMinutes()).padStart(2, '0'); 

//     const T_day = String(now.getDay()).padStart(2, '0'); 
//     const T_month = String(now.getMonth()).padStart(2, '0'); 
//     const T_year = String(now.getFullYear()).padStart(4, '0'); 

//     const T_header_day = T_day + T_date + T_month +','+ T_year;
//     CT.innerHTML = T_time;
// }


// setInterval(taskbar_time, 1000);
// taskbar_time();



if(CT){
	const currentDate = new Date();
	const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };

	let dateString = currentDate.toLocaleDateString('nl-US', options);
	dateString = dateString.replace(' ', ', ') 
	CT.textContent = dateString;
}
// check temporal api 


// console.log("done");
// console.log(CT);






//---------test code----------//

// if(document.startViewTransition){
// 	let body = document.querySelector('body')
// 	body.addEventListener('DOMContentLoaded',()=>{
// 		body.startViewTransition()
// 	})
	
// }



// function spaNavigate(data) {
//     // Fallback for browsers that don't support this API:
//     if (!document.startViewTransition) {
//       updateTheDOMSomehow(data);
//       return;
//     }
  
//     // With a transition:
//     document.startViewTransition(() => updateTheDOMSomehow(data));
//   }



