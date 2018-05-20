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
}))