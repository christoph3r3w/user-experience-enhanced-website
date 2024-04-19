// sidebar
const menuBtn = document.querySelector('.menuBtn');
const menu_exit = document.querySelector(".menu_exit");
const sidebar = document.getElementById("sidebar");
const appear = document.querySelector(".appear");

// forms
let forms = document.querySelectorAll('form');
const formBTN = document.querySelectorAll('button[type="submit"]');
const testBTN = document.querySelector(".inleiding_text");


menuBtn.addEventListener('click' ,function(e){
	sidebar.classList.add(appear)
	console.log('went in')
	console.log(e)
});

menu_exit.addEventListener('click',(e)=>{
	sidebar.classList.remove('appear')
	console.log('went out');
	console.log(e);
});

if(formBTN){
	forms.forEach(form =>{
		form.addEventListener('submit', function(e){
	

			let data = new FormData(this)
			// console.log(data,"and",this)
			data.append('enhanced', true)
			

			fetch(this.action,{
				body: new URLSearchParams(data),
				method: this.method,
				
			})
			.then(function(response){
				return response.text()
				// ,
				console.log('[3]',response.text());
			}).catch(error => {
                console.error('Error occurred:', error);
            });

			e.preventDefault()


		})
	})
	testBTN.addEventListener('click',()=>{
		console.log(forms);

	})

}