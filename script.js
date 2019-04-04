
document.getElementById('nb').textContent = document.getElementsByClassName('row').length

console.log(document.getElementById('nb'));

for(var i=0; i<document.getElementsByClassName('trash').length; i++) {

  document.getElementsByClassName('trash')[i].addEventListener("click",
   function(){
   this.parentNode.remove();

  document.getElementById('nb').textContent = document.getElementsByClassName('row').length
   }
  );

}
