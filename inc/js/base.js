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
	let sliderPosition=0;

	next.addEventListener('click', function(){
		
		if(sliderPosition==-200){
			return;
		}else{
			sliderPosition-=100;
			sliderWrapper.style.transform=`translateX(${sliderPosition}vw)`;
		}

		const nowActived=document.querySelector('.dot.active');
		nowActived.classList.remove('active');
		
		if(sliderPosition==0){
			left.classList.add('active');
		}else if(sliderPosition==-100){
			center.classList.add('active');
		}else {
			right.classList.add('active');
		}

	});

	prev.addEventListener('click', function(){
		
		if(sliderPosition==0){
			return;
		}else{
			sliderPosition+=100;
			sliderWrapper.style.transform=`translateX(${sliderPosition}vw)`;
		}

		const nowActived=document.querySelector('.dot.active');
		nowActived.classList.remove('active');
		
		if(sliderPosition==0){
			left.classList.add('active');
		}else if(sliderPosition==-100){
			center.classList.add('active');
		}else {
			right.classList.add('active');
		}

	});

	left.addEventListener('click', function(){
		sliderPosition=0;
		sliderWrapper.style.transform=`translateX(${sliderPosition}vw)`;

		const nowActived=document.querySelector('.dot.active');
		nowActived.classList.remove('active');
		this.classList.add('active');

	})

	center.addEventListener('click', function(){
		sliderPosition=-100;
		sliderWrapper.style.transform=`translateX(${sliderPosition}vw)`;

		const nowActived=document.querySelector('.dot.active');
		nowActived.classList.remove('active');
		this.classList.add('active');
	})

	right.addEventListener('click', function(){
		sliderPosition=-200;
		sliderWrapper.style.transform=`translateX(${sliderPosition}vw)`;

		const nowActived=document.querySelector('.dot.active');
		nowActived.classList.remove('active');
		this.classList.add('active');
	})
}

if(location.pathname=='/' || location.pathname=='/index.html'){
	motion();
	sliderShow();
}

//image gallery
let imageIndex;


const imgListItem=document.querySelectorAll('.image-list li');
const imgListArr=[...imgListItem];

imgListItem.forEach(img => img.addEventListener("click", function(){

	imageIndex=imgListArr.indexOf(this);
	imageGalleryWrapper.style.transform=`translateX(-${imageIndex}00vw)`
	counterIndex.textContent=`${imageIndex+1}`;

	dl_btn.setAttribute('href', imgListItem[imageIndex].children[0].src);
	dl_btn.setAttribute('download', imgListItem[imageIndex].children[0].alt);


	setTimeout(function(){ 
		imageGallery.classList.add('show');
		document.body.style.overflow="hidden";
	}, 300);


}))

close_btn.addEventListener('click', function(){
	imageGallery.classList.remove('show');
	document.body.style.overflow="";
})

function goPrev(){
	if(imageIndex==0){
		return;
	}else{
		imageIndex-=1;
		imageGalleryWrapper.style.transform=`translateX(-${imageIndex}00vw)`
		counterIndex.textContent=`${imageIndex+1}`;

		dl_btn.setAttribute('href', imgListItem[imageIndex].children[0].src);
		dl_btn.setAttribute('download', imgListItem[imageIndex].children[0].alt);

	}
}

function goNext(){
	if(imageIndex==17){
		return;
	}else{
		imageIndex+=1;
		imageGalleryWrapper.style.transform=`translateX(-${imageIndex}00vw)`
		counterIndex.textContent=`${imageIndex+1}`;

		dl_btn.setAttribute('href', imgListItem[imageIndex].children[0].src);
		dl_btn.setAttribute('download', imgListItem[imageIndex].children[0].alt);


	}
}

img_prev.addEventListener('click', goPrev);

img_next.addEventListener('click', goNext);

full_btn.addEventListener("click", function(){

	if(document.webkitFullscreenElement || document.msRequestFullscreenElement || document.mozRequestFullScreenElement || document.fullscreenElement){

		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		} else if (document.mozExitFullScreen) {
			document.mozExitFullScreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		}

	}else{
		if (imageGallery.requestFullscreen) {
			imageGallery.requestFullscreen();
		} else if (imageGallery.msRequestFullscreen) {
			imageGallery.msRequestFullscreen();
		} else if (imageGallery.mozRequestFullScreen) {
			imageGallery.mozRequestFullScreen();
		} else if (imageGallery.webkitRequestFullscreen) {
			imageGallery.webkitRequestFullscreen();
		}


	}



})


window.addEventListener("keydown", function(e){
	if(e.keyCode==27){
		imageGallery.classList.remove('show');
		document.body.style.overflow="";
	}

	if(imageGallery.classList.contains('show')){

		if(e.keyCode==37){
			goPrev();
		}else if(e.keyCode==39){
			goNext();
		}

	}
})




