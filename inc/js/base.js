var headerXhr=new XMLHttpRequest();

headerXhr.open('GET', 'header.html', true);
headerXhr.send();

headerXhr.onreadystatechange=function(){
	if(headerXhr.readyState==4 && headerXhr.status==200){

		header.innerHTML = headerXhr.responseText;


	}
};

// menu.html load
var menuXhr=new XMLHttpRequest();

menuXhr.open('GET', 'menu.html', true);
menuXhr.send();

menuXhr.onreadystatechange=function(){

	
	if(menuXhr.readyState==4 && menuXhr.status==200){

		menu.innerHTML = menuXhr.responseText;
		if(menuXhr.responseText){
			menuDropdown();
			menuHighlight();
		}

	}

};

//footer.html load
var footerXhr=new XMLHttpRequest();

footerXhr.open('GET', 'footer.html', true);
footerXhr.send();

footerXhr.onreadystatechange=function(){
	if(footerXhr.readyState==4 && footerXhr.status==200){

		footer.innerHTML = footerXhr.responseText;

	}
};

//menu highlight
var nowPath=location.pathname.split('/').pop();

function menuHighlight(){
	var nowActived=document.querySelector('#menu .list-wrapper > li.active');
	var menuList=document.querySelectorAll('#menu .list-wrapper > li')

	if(nowPath=="" || nowPath=="index.html"){
		return;

	}else if(nowPath=='advantage1.html' || nowPath=='advantage2.html'){
		nowActived.classList.remove('active');
		menuList[1].classList.add('active');

	}else if(nowPath=='product.html'){
		nowActived.classList.remove('active');
		menuList[2].classList.add('active');

	}else if(nowPath=='factory.html' || nowPath=='quality.html' || nowPath=='process.html'){
		nowActived.classList.remove('active');
		menuList[3].classList.add('active');

	}else if(nowPath=='profile.html' || nowPath=='message.html' || nowPath=='recruit.html'){
		nowActived.classList.remove('active');
		menuList[4].classList.add('active');
	}else if(nowPath=='contact.html'){
		nowActived.classList.remove('active');
		menuList[5].classList.add('active');
	}else {
		nowActived.classList.remove('active');

	}
}

// menu dropdown
function menuDropdown(){
	var menuChildHeads=document.querySelectorAll('.child-head span');

	for(i=0;i<menuChildHeads.length;i++){
		menuChildHeads[i].addEventListener('click', function(){
			var nowActived=document.querySelector('.child-menu.active');

			if(nowActived){
				nowActived.classList.remove("active");
			}

			if(nowActived==this.nextElementSibling){
				this.nextElementSibling.classList.remove("active");
			}else{
				this.nextElementSibling.classList.add("active");
			}
		})
	}
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

	//PC slider show
	if(window.innerWidth > 767){

		// -80% 1 copy
		// -60% 3
		// -40% 2
		// -20% 1
		// 0%   3 copy
		let sliderPosition=-20;

		next.addEventListener('click', function(){

			if(sliderPosition==-60){
				sliderPosition=-80;
				sliderWrapper.style.transform="translateX("+sliderPosition+"%)";
				right.classList.remove('active');
				left.classList.add('active');


				setTimeout(function(){ 
					sliderWrapper.style.transition="none";

					sliderPosition=-20;
					sliderWrapper.style.transform="translateX("+sliderPosition+"%)";
					sliderWrapper.style.transition="none";

				}, 500);


			}else{
				sliderPosition-=20;
				sliderWrapper.style.transform="translateX("+sliderPosition+"%)";
				sliderWrapper.style.transition="";


				var nowActived=document.querySelector('.dot.active');
				nowActived.classList.remove('active');

				if(sliderPosition==0 || sliderPosition==-20){
					left.classList.add('active');
				}else if(sliderPosition==-40){
					center.classList.add('active');
				}else if(sliderPosition=-60 || sliderPosition==-80) {
					right.classList.add('active');
				}



			}

		})

		prev.addEventListener('click', function(){
			beforePosition=sliderPosition;

			if(sliderPosition==-20){
				sliderPosition=0;
				sliderWrapper.style.transform="translateX("+sliderPosition+"%)";
				left.classList.remove('active');
				right.classList.add('active');

				setTimeout(function(){ 
					sliderWrapper.style.transition="none";

					sliderPosition=-60;
					sliderWrapper.style.transform="translateX("+sliderPosition+"%)";
					sliderWrapper.style.transition="none";

				}, 500);

			}else{

				sliderPosition+=20;
				sliderWrapper.style.transform="translateX("+sliderPosition+"%)";
				sliderWrapper.style.transition="";

				var nowActived=document.querySelector('.dot.active');
				nowActived.classList.remove('active');

				if(sliderPosition==0 || sliderPosition==-20){
					left.classList.add('active');
				}else if(sliderPosition==-40){
					center.classList.add('active');
				}else if(sliderPosition=-60 || sliderPosition==-80) {
					right.classList.add('active');
				}



			}

		})

		left.addEventListener('click', function(){
			sliderPosition=-20;
			sliderWrapper.style.transform="translateX("+sliderPosition+"%)";
			sliderWrapper.style.transition="";

			var nowActived=document.querySelector('.dot.active');
			nowActived.classList.remove('active');
			this.classList.add('active');
		})

		center.addEventListener('click', function(){
			sliderPosition=-40;
			sliderWrapper.style.transform="translateX("+sliderPosition+"%)";
			sliderWrapper.style.transition="";

			var nowActived=document.querySelector('.dot.active');
			nowActived.classList.remove('active');
			this.classList.add('active');
		})

		right.addEventListener('click', function(){
			sliderPosition=-60;
			sliderWrapper.style.transform="translateX("+sliderPosition+"%)";
			sliderWrapper.style.transition="";

			var nowActived=document.querySelector('.dot.active');
			nowActived.classList.remove('active');
			this.classList.add('active');
		})

	}
}



//image gallery
function galleryShow(){
	let imageIndex;


	var imgListItem=document.querySelectorAll('.image-list-item');
	imgListItem.forEach((item, index) => item.addEventListener('click', function(value, i){

		imageIndex=index;

		imageGalleryWrapper.style.transform="translateX(-"+imageIndex+"00vw)";
		counterIndex.textContent=imageIndex+1;

		dl_btn.setAttribute('href', imgListItem[imageIndex].children[0].src);
		dl_btn.setAttribute('download', imgListItem[imageIndex].children[0].alt);


		setTimeout(function(){ 
			imageGallery.classList.add('show');
			document.body.style.overflow="hidden";
		}, 300);

	}))

	// for(i=0;i<imgListItem.length;i++){
		
	// 	imgListItem[i].addEventListener('click', function(){

	// 		imageGalleryWrapper.style.transform="translateX(-"+imageIndex+"00vw)";
	// 		counterIndex.textContent=imageIndex+1;

	// 		dl_btn.setAttribute('href', imgListItem[imageIndex].children[0].src);
	// 		dl_btn.setAttribute('download', imgListItem[imageIndex].children[0].alt);


	// 		setTimeout(function(){ 
	// 			imageGallery.classList.add('show');
	// 			document.body.style.overflow="hidden";
	// 		}, 300);



	// 	})

	// 	// imageIndex=i;
	// }



	close_btn.addEventListener('click', function(){
		imageGallery.classList.remove('show');
		document.body.style.overflow="";
	})

	function goPrev(){
		if(imageIndex==0){
			return;
		}else{
			imageIndex-=1;
			imageGalleryWrapper.style.transform="translateX(-"+imageIndex+"00vw)";
			counterIndex.textContent=imageIndex+1;

			dl_btn.setAttribute('href', imgListItem[imageIndex].children[0].src);
			dl_btn.setAttribute('download', imgListItem[imageIndex].children[0].alt);

		}
	}

	function goNext(){
		if(imageIndex==17){
			return;
		}else{
			imageIndex+=1;
			imageGalleryWrapper.style.transform="translateX(-"+imageIndex+"00vw)";
			counterIndex.textContent=imageIndex+1;

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
}





//function location


if(nowPath==''){
	motion();
	sliderShow();
}else if(nowPath=='index.html'){
	sliderShow();
	header.classList.add('showing');
	menu.classList.add('showing');
	visual.classList.add('showing');
	contact.classList.add('showing');
	footer.classList.add('showing');

}else if(nowPath=='product.html'){
	galleryShow();
}else if(nowPath=='profile.html'){
	function initMap() {
		//tokyo office
		var uluru = {lat: 35.6017628, lng: 139.7189039};
		var map = new google.maps.Map(document.getElementById('officeMap'), {
			zoom: 15,
			center: uluru
		});
		var marker = new google.maps.Marker({
			position: uluru,
			map: map
		});

	    //ibaraki factory
	    var uluru_2 = {lat: 35.8783578, lng: 140.3325862};
	    var map_2 = new google.maps.Map(document.getElementById('factoryMap'), {
	    	zoom: 12,
	    	center: uluru_2
	    });
	    var marker = new google.maps.Marker({
	    	position: uluru_2,
	    	map: map_2
	    });
	}
}