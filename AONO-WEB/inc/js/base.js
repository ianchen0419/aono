const menuChildHeads=document.querySelectorAll('.child-head span');

menuChildHeads.forEach(head => head.addEventListener('click', function(){
 const nowActived=document.querySelector('.child-menu.active');
 if(nowActived){
  nowActived.classList.remove("active");
 }
 
 if(nowActived==this.children[0]){
  this.children[0].classList.remove("active");
 }else{
   this.children[0].classList.add("active");
 }
}))