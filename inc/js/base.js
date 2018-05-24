const headerXhr=new XMLHttpRequest();

headerXhr.open('GET', 'header.html', true);
headerXhr.send();

headerXhr.onreadystatechange=function(){
	if(headerXhr.readyState==4 && headerXhr.status==200){

		header.innerHTML = headerXhr.responseText;


	}
};

// menu.html load
const menuXhr=new XMLHttpRequest();

menuXhr.open('GET', 'menu.html', true);
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

footerXhr.open('GET', 'footer.html', true);
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
function motion(){
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
}
//slider show

function sliderShow(){
	// 0, -100, -200
	let sliderPosition=-100;

	next.addEventListener('click', function(){
		
		if(sliderPosition==-200){
			return;
		}else{
			sliderPosition-=100;
			sliderWrapper.style.transform=`translateX(${sliderPosition}vw)`;
		}

	});

	prev.addEventListener('click', function(){
		
		if(sliderPosition==0){
			return;
		}else{
			sliderPosition+=100;
			sliderWrapper.style.transform=`translateX(${sliderPosition}vw)`;
		}

	});

	left.addEventListener('click', function(){
		sliderPosition=0;
		sliderWrapper.style.transform=`translateX(${sliderPosition}vw)`;
	})

	center.addEventListener('click', function(){
		sliderPosition=-100;
		sliderWrapper.style.transform=`translateX(${sliderPosition}vw)`;
	})

	right.addEventListener('click', function(){
		sliderPosition=-200;
		sliderWrapper.style.transform=`translateX(${sliderPosition}vw)`;
	})

	sliderWrapper.addEventListener('transitionend', function(){

		const nowActived=document.querySelector('.dot.active');
		if(nowActived){
			nowActived.classList.remove('active');
		}
		
		if(sliderPosition==0){
			left.classList.add('active');
		}else if(sliderPosition==-100){
			center.classList.add('active');
		}else {
			right.classList.add('active');
		}
	})
}

if(location.pathname=='/' || location.pathname=='/index.html'){
	motion();
	sliderShow();
}
