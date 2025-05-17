
var goUp;
var goDown;
var goSpin;

(function()  {
	'use strict'; 
	
	var tailleY;


	function panneauActuel() {
		const sections = document.querySelectorAll('section'); 
		let currentIndex = 0;
	
		sections.forEach((section, index) => {
			const rect = section.getBoundingClientRect();
			if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
				currentIndex = index;
			}
		});
		console.log(currentIndex);
		return currentIndex;
	}

	goUp=function()  {
		stopSpin();
		let d=panneauActuel();
		let y=Math.floor(d-1)*tailleY;
		window.scrollTo({top:y,left:0,behavior:'smooth'});
	}
	goDown=function()  {
		stopSpin();
		let d=panneauActuel();
		let y=Math.floor(d+1)*tailleY;
		window.scrollTo({top:y,left:0,behavior:'smooth'});
	}
	//  auto scroll
	var spinner=null;  
	function spin()  {
		let nb=document.getElementsByTagName("section").length;
		let d=panneauActuel()+1;
		console.log("Prochain  panneau",d);
		if( d>=nb ) d=0;
		let y=Math.floor(d)*tailleY;
		window.scrollTo({top:y,left:0,behavior:'smooth'});
	}
	function  stopSpin() {
		if( spinner!=null ) {
			clearInterval(spinner);
			spinner=null;
		}
	}
	goSpin=function() {
		document.getElementById("goAS").classList.toggle('rotating');
		document.getElementsByTagName("body")[0].classList.toggle('noscrollY');
		if( spinner==null ) {
			spinner=setInterval(spin,5000);
		}else{
			clearInterval(spinner);
			spinner=null;
		}
	}


	function init()  {
		window.addEventListener('resize',
			function()  {
				let  e=document.getElementsByTagName("section");
				if( e.length>0 ) {
					tailleY=e[0].getBoundingClientRect().height;
				}
			});
		window.dispatchEvent(new Event("resize"));
	}

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", init);
	}else{ init(); } 

})();












