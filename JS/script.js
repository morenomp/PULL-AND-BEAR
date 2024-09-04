
//             🔴 MENÚ 🔴

function showMenu(){
	console.log("se muestra el menú");

	// document.getElementById("menuDesplegable").style.display = "block";
	document.getElementById("menuDesplegable").style.left = "0px";

}

function hideMenu(){
	console.log("se cierra el menú");

	// document.getElementById("menuDesplegable").style.display = "none";
	document.getElementById("menuDesplegable").style.left = "-100%";
	
}

//           🔴 MODAL CESTA 🔴

function showModalBasket(){

	document.getElementById("filterOpac").style.display = "block";
	document.documentElement.style.overflow="hidden";
	document.getElementById("modalBasket").style.display = "flex";
	
}

function hideModalBasket(){

	document.getElementById("filterOpac").style.display = "none";
	document.documentElement.style.overflow="auto";
	document.getElementById("modalBasket").style.display = "none";
	
}

//           🔴 MODAL USER 🔴

function showModalLogin(){

	document.getElementById("filterOpac").style.display = "block";
	document.documentElement.style.overflow="hidden";
	document.getElementById("modalLogin").style.display = "block";
	
}

function hideModalLogin(){

	document.getElementById("filterOpac").style.display = "none";
	document.documentElement.style.overflow="auto";
	document.getElementById("modalLogin").style.display = "none";
	
}

//           🔴 EFECTO LOGO 🔴

window.onscroll = function(){
	hideShowOnScroll()
};

function hideShowOnScroll(){

	console.log(document.documentElement.scrollTop);
	// para calcular los pixeles que scrolleas

	if (document.documentElement.scrollTop>100) {

		console.log("sí");
		document.getElementById("marca").style.opacity = "0";
		document.getElementById("navMedidas").style.height = "80px";
	}

	else{
		console.log("no")
		document.getElementById("marca").style.opacity = "1";
		document.getElementById("navMedidas").style.height = "110px";
	}
};

//           🔴 PESTAÑAS 🔴

function showTab(paraula){
	let contTabsBasket = document.getElementsByClassName("contTabsModalBasket");

	for (let i = 0; i < contTabsBasket.length; i++){
		contTabsBasket[i].style.display="none";
	}
	console.log(paraula);



	document.getElementById(paraula).style.display = "block";



	let titolsTab = document.getElementsByClassName("titolTab");

	for (let i = 0; i < titolsTab.length; i++){
		titolsTab[i].style.textDecoration="none";
		titolsTab[i].style.color="#999";
	}

	event.currentTarget.style.textDecoration = "underline";
	event.currentTarget.style.color = "#000";
};

//          🔴 DESPLEGABLE 🔴

// let titols = document.getElementsByClassName("titolItemAcc");

// for (let i = 0; i < titols.length; i++) {
// 	titols[i].addEventListener("click", openAcc);
// }

// function openAcc1(){
// 	event.currentTarget.nextElementSibling.classList.toggle("accHeight1");
// }

// function openAcc2(){
// 	event.currentTarget.nextElementSibling.classList.toggle("accHeight2");
// }


function readyAccordeon(){

	let titols = document.getElementsByClassName("titolItemAcc");

	for (let i = 0; i < titols.length; i++) {
		titols[i].addEventListener("click", unfoldFoldAcc);
	}
}

function unfoldFoldAcc(){
	event.currentTarget.nextElementSibling.classList.toggle("accHeight1");
}

function openAcc2(){
	event.currentTarget.nextElementSibling.classList.toggle("accHeight2");
}

//          🔴 CARRULES VERTICAL 🔴

function readyCarrusel(){

	let thumbnailsCarrusel = document.getElementsByClassName("imgCarrSmall");

	for (let i = 0; i < thumbnailsCarrusel.length; i++) {
		thumbnailsCarrusel[i].addEventListener("click", setBigImage);
	}
}

function setBigImage(){
	// console.log(event.currentTarget.src);
	document.getElementById("bigImage").src = event.currentTarget.src;
}

//           🔴 MODAL COMPARTIR 🔴

function showModalComp(){

	document.getElementById("filterOpac").style.display = "block";
	document.documentElement.style.overflow="hidden";
	document.getElementById("modalComp").style.display = "block";
	
}

function hideModalComp(){

	document.getElementById("filterOpac").style.display = "none";
	document.documentElement.style.overflow="auto";
	document.getElementById("modalComp").style.display = "none";
	
}

//          🔴 ASIGNACIÓN DE MODELO 🔴

function firstSetModel(modelActiu){
	let modelThumbnails = document.getElementsByClassName("modelThumbnails");
	
	modelThumbnails[0].style.borderStyle = "solid";

//----------

	let thumbnailsCarrusel = document.getElementsByClassName("imgCarrSmall");

	let llistaImgModelActiu = document.getElementsByClassName(modelActiu);
	

	for (let i = 0; i < thumbnailsCarrusel.length; i++) {

	/* thumbnailsCarrusel llama a la lista vacia (imgCarrSmall), 
	   y le decimos que nos coja en llistaImgModelActiu, modelActiu, 
	   el cual nos cojerá setModel, es decir, las caratulas de las bolsas.

	   Que cada una tiene asignada una class, por ejemplo thumbnailsCaqui.

	   Y debido a esto, thumbnailsCarrusel (inicio de esto), sustituirá
	   la lista vacia (imgCarrSmall), por las imágenes de thumbnailsCaqui*/

		thumbnailsCarrusel[i].src = llistaImgModelActiu[i].src;
	}

	document.getElementById("bigImage").src = llistaImgModelActiu[0].src;
}

function setModel(modelActiu){
	let modelThumbnails = document.getElementsByClassName("modelThumbnails");

	for (let i = 0; i < modelThumbnails.length; i++) {

		modelThumbnails[i].style.borderStyle = "none";

	}
	event.currentTarget.style.borderStyle = "solid";

//----------

	let thumbnailsCarrusel = document.getElementsByClassName("imgCarrSmall");

	let llistaImgModelActiu = document.getElementsByClassName(modelActiu);
	

	for (let i = 0; i < thumbnailsCarrusel.length; i++) {

		thumbnailsCarrusel[i].src = llistaImgModelActiu[i].src;
	}

	document.getElementById("bigImage").src = llistaImgModelActiu[0].src;
}

//          🔴 LIGHTBOX 🔴

let llistaImgGal = document.getElementsByClassName("imgGal");
let LBcounter;

function readyLightbox(){

	for (let i = 0; i < llistaImgGal.length; i++) {
		llistaImgGal[i].addEventListener("click", function(){showLB(i);});
	}
}

function showLB(i){

	document.getElementById("filterOpac").style.display = "flex";
	document.documentElement.style.overflow="hidden";
	document.getElementById("modalLightbox").style.display = "flex";

// al hacer click en una imagen, src lo rellena con esa imagen
//	document.getElementById("LBImage").src = event.currentTarget.src;
	
	document.getElementById("LBImage").src = llistaImgGal[i].src;

	LBcounter = i;

	console.log(i);
	console.log(LBcounter);
}

function hideLB(){

	document.getElementById("filterOpac").style.display = "none";
	document.documentElement.style.overflow="auto";
	document.getElementById("modalLightbox").style.display = "none";
	
}

// flecha hacia delante
function LBNextImg(){
	LBcounter++;

	if (LBcounter>llistaImgGal.length-1) {
		LBcounter=0;
	}

	document.getElementById("LBImage").src = llistaImgGal[LBcounter].src;
}

// flecha hacia atrás
function LBPrevImg(){
	LBcounter--;

	if (LBcounter<0) {
		LBcounter=llistaImgGal.length-1;
	}

	document.getElementById("LBImage").src = llistaImgGal[LBcounter].src;
}
