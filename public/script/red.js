const menuBtn = document.querySelector('.menuBtn');
const menu_exit = document.querySelector(".menu_exit");
const sidebar = document.getElementById("sidebar");
const appear = document.querySelector(".appear");

menuBtn.addEventListener('click' ,function(e){
	sidebar.classList.add(appear)
	console.log('went in')
	console.log(e)
});

menu_exit.addEventListener('click',(e)=>{
	sidebar.classList.remove(appear)
	console.log('went out')
	console.log(e)
});

