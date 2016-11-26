

(function(){

afficherTab=function(a){

	 var li=a.parentNode;

	 var div=a.parentNode.parentNode.parentNode;
	 if(li.classList.contains('active')){
	 	return false;
	 }
	 //remove class active from active tab
	 div.querySelector('.tabs .active').classList.remove('active');
	 // add active class to actuel anchor,tab
	 li.classList.add('active');
	 //remove class active from active tab-content
	 div.querySelector('.tab-content.active').classList.remove('active'); 
	  
	 
	 //add class active to tab-content in question
	  div.querySelector(a.getAttribute('href')).classList.add('active');
	 



}

var tabs=document.querySelectorAll('.tabs a');
for (var i=0;i<tabs.length;i++){

tabs[i].addEventListener('click',function(e){

		afficherTab(this);
	
  })//end eventlistner
}

var hash=window.location.hash;

var a =document.querySelector('a[href="'+hash+'"]');

if(a!==null  && !a.classList.contains('active')){
		afficherTab(a);
}





})()