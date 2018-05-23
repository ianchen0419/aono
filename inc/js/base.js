var headerLocation;
var menuLocation;
var footerLocation;

if(location.href.split('/').pop()==""){
	//index page
	headerLocation='html/header.html';
	menuLocation='html/menu.html';
	footerLocation='html/footer.html';
}else{
	//normal page
	headerLocation='../header.html';
	menuLocation='../menu.html';
	footerLocation='../footer.html';
}

// header.html load
const headerXhr=new XMLHttpRequest();

headerXhr.open("GET", headerLocation, true);
headerXhr.send();

headerXhr.onreadystatechange=function(){
 	if(headerXhr.readyState==4 && headerXhr.status==200){

    	header.innerHTML = headerXhr.responseText;


    }
};

// menu.html load
const menuXhr=new XMLHttpRequest();

menuXhr.open("GET", menuLocation, true);
menuXhr.send();

menuXhr.onreadystatechange=function(){
 	if(menuXhr.readyState==4 && menuXhr.status==200){

    	menu.innerHTML = menuXhr.responseText;
    	if(menuXhr.responseText){
    		menuDropdown()
    	}

    }
};

//footer.html load
const footerXhr=new XMLHttpRequest();

footerXhr.open("GET", footerLocation, true);
footerXhr.send();

footerXhr.onreadystatechange=function(){
 	if(footerXhr.readyState==4 && footerXhr.status==200){

    	footer.innerHTML = footerXhr.responseText;

    }
};


// menu dropdown
function menuDropdown(){
	const menuChildHeads=document.querySelectorAll('.child-head span');
	menuChildHeads.forEach(head => head.addEventListener('click', function(){
		const nowActived=document.querySelector('.child-menu.active');

		if(nowActived){
			nowActived.classList.remove("active");
		}

		if(nowActived==this.nextElementSibling){
			this.nextElementSibling.classList.remove("active");
		}else{
			this.nextElementSibling.classList.add("active");
		}
	}));
}


// top-page motion
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
