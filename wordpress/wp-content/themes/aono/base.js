
//menu highlight
var nowPath=location.pathname.split('/').pop();

function menuHighlight(){
	var nowActived=document.querySelector('#menu .list-wrapper > li.active');
	var menuList=document.querySelectorAll('#menu .list-wrapper > li')

	if(nowPath=="" || nowPath=="index"){
		return;

	}else if(nowPath=='advantage1' || nowPath=='advantage2'){
		nowActived.classList.remove('active');
		menuList[1].classList.add('active');

	}else if(nowPath=='product'){
		nowActived.classList.remove('active');
		menuList[2].classList.add('active');

	}else if(nowPath=='factory' || nowPath=='quality' || nowPath=='process'){
		nowActived.classList.remove('active');
		menuList[3].classList.add('active');

	}else if(nowPath=='profile' || nowPath=='message' || nowPath=='recruit'){
		nowActived.classList.remove('active');
		menuList[4].classList.add('active');
	}else if(nowPath=='contact'){
		nowActived.classList.remove('active');
		menuList[5].classList.add('active');
	}else {
		nowActived.classList.remove('active');

	}
}
menuHighlight();


// menu dropdown
function menuDropdown(){

	// PC menu dropdown
	if(window.innerWidth > 769){

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

	}else{

		//mobile menu dropdown
		document.body.addEventListener('touchstart', function(event){

			if(event.target.tagName=='BODY' && mobileMenu.classList.contains('opened')){
				document.body.classList.remove('mobile-menu-opened');
				mobileMenu.classList.remove('opened');
			}
		})

		const mobileMenuChildHeads=document.querySelectorAll('.mobile-child-head');

		for(i=0;i<mobileMenuChildHeads.length;i++){
			mobileMenuChildHeads[i].addEventListener('click', function(){
				this.classList.toggle('active');
				this.nextElementSibling.classList.toggle('opened');
			})
		}

	}
}
menuDropdown();



function openMobileMenu(){
	document.body.classList.add('mobile-menu-opened');
	mobileMenu.classList.add('opened');
}


// top-page motion
function motion(){
	header.style.display="none";
	menu.style.display="none";
	// visual.style.display="none";
	visual.style.opacity=0;
	contact.style.display="none";
	footer.style.display="none";

	document.body.classList.add('motion-body');

	setTimeout(function(){ 
		document.body.classList.remove('motion-body');

		header.style.display="";
		menu.style.display="";
		// visual.style.display="";
		visual.style.opacity=1;
		contact.style.display="";
		footer.style.display="";

		header.classList.add('showing');
		menu.classList.add('showing');
		visual.classList.add('showing');
		contact.classList.add('showing');
		footer.classList.add('showing');

		if(innerWidth < 769){
			sliderWrapper.classList.add('play');
		}

	}, 4000);

}
//slider show

function sliderShow(){

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



//image gallery
function galleryShow(){
	let imageIndex;

	var imgListItem=document.querySelectorAll('.image-list-item');

	for(i=0;i<imgListItem.length;i++){
		imgListItem[i].addEventListener('click', function(){

			imageIndex=parseInt(this.getAttribute('data-index'));
			imageGalleryWrapper.style.transform="translateX(-"+imageIndex+"00vw)";
			counterIndex.textContent=imageIndex+1;

			dl_btn.setAttribute('href', imgListItem[imageIndex].children[0].src);
			dl_btn.setAttribute('download', imgListItem[imageIndex].children[0].alt);


			setTimeout(function(){ 
				imageGallery.classList.add('show');

				var bodyScrollBarWidth=window.innerWidth-document.body.clientWidth;
			        if(bodyScrollBarWidth>0){
			            document.body.style.paddingRight=bodyScrollBarWidth+'px';
			        }

				document.body.style.overflow="hidden";
			        

			}, 300);

		})
	}


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

	if(window.innerWidth > 769) {

		// desktop
		close_btn.addEventListener('click', function(){
			imageGallery.classList.remove('show');
			document.body.style.overflow="";
			document.body.style.paddingRight="";
		})
		

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


	}else {

		// mobile
		var startX;
		var moveEndX;
		var X;

		imageGallery.addEventListener('touchstart', function(e) {

			startX = e.touches[0].pageX;

		});

		imageGallery.addEventListener('touchmove', function(e) {

			e.preventDefault();
			moveEndX = e.changedTouches[0].pageX;
			X = moveEndX - startX;

			if(imageIndex==0 || imageIndex==17){
				return;
			}else{
				imageGalleryWrapper.style.transform="translateX(calc(-"+imageIndex+"00vw + " + X + "px))";
			}


		}, false)


		imageGallery.addEventListener('touchend', function(e) {

			moveEndX = e.changedTouches[0].pageX;
			X = moveEndX - startX;

			// imageGalleryWrapper.style.transform="translateX(calc(-"+imageIndex+"00vw + " + X + "px))";


			if (X > 0) {
				//to left

				if(X > 100){
					goPrev();
				}else{
					imageGalleryWrapper.style.transform="translateX(-"+imageIndex+"00vw)";
				}

			}else if (X < 0) {
				//to right

				if(X < -100){
					goNext();
				}else{
					imageGalleryWrapper.style.transform="translateX(-"+imageIndex+"00vw)";

				}
			}

		});

		close_btn.addEventListener('click', function(){
			imageGallery.classList.remove('show');
			document.body.style.overflow="";
			document.body.style.paddingRight="";
		})

	}

}





//function location


if(nowPath==''){
	
	motion();
	sliderShow();

}else if(nowPath=='index'){
	
	sliderShow();

	header.classList.add('showing');
	menu.classList.add('showing');
	visual.classList.add('showing');
	contact.classList.add('showing');
	footer.classList.add('showing');

	if(innerWidth < 769){
		sliderWrapper.classList.add('play');
	}


}else if(nowPath=='product'){
	document.body.classList.add('showing');
	galleryShow();

}else if(nowPath=='profile'){
	document.body.classList.add('showing');
	function initMap() {
		//tokyo office
		var tokyo = {lat: 35.6017628, lng: 139.7189039};
		var map = new google.maps.Map(document.getElementById('officeMap'), {
			zoom: 15,
			center: tokyo
		});
		var marker = new google.maps.Marker({
			position: tokyo,
			map: map
		});

	    //ibaraki factory
	    var ibaraki = {lat: 35.8783578, lng: 140.3325862};
	    var map_2 = new google.maps.Map(document.getElementById('factoryMap'), {
	    	zoom: 12,
	    	center: ibaraki
	    });
	    var marker = new google.maps.Marker({
	    	position: ibaraki,
	    	map: map_2
	    });
	}
}else {
	document.body.classList.add('showing');

}
