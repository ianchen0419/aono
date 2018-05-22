const menuChildHeads=document.querySelectorAll('.child-head span');

menuChildHeads.forEach(head => head.addEventListener('click', function(){
	const nowActived=document.querySelector('.child-menu.active');
	console.log(this.nextElementSibling);

	if(nowActived){
		nowActived.classList.remove("active");
	}

	if(nowActived==this.nextElementSibling){
		this.nextElementSibling.classList.remove("active");
	}else{
		this.nextElementSibling.classList.add("active");
	}
}));


header.style.display="none";
menu.style.display="none";
visual.style.display="none";
contact.style.display="none";
footer.style.display="none";
document.body.classList.add('motion-body');

setTimeout(function(){ 
	document.body.classList.remove('motion-body');

	header.style.display="";
	menu.style.display="";
	visual.style.display="";
	contact.style.display="";
	footer.style.display="";

	header.classList.add('showing');
	menu.classList.add('showing');
	visual.classList.add('showing');
	contact.classList.add('showing');
	footer.classList.add('showing');


}, 4000);
