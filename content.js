let hamburger= document.getElementsByClassName("hamburger");
let kontenerMenu= document.getElementsByClassName("kontenerMenu sticky");
let body= document.getElementsByTagName("body");
let menuAktywne= false;


hamburger[0].addEventListener("click", aktywacjaMenu);




//-------- Funkcje ----------------
function aktywacjaMenu() {
  //alert("click");
  if (menuAktywne== false){
	menuAktywne= true;
	kontenerMenu[0].style.visibility = "visible";
	body[0].style.overflow= "hidden";

  }else{
	menuAktywne= false;
	kontenerMenu[0].style.visibility = "hidden"; 
    body[0].style.overflow= "auto";	
  }
} 