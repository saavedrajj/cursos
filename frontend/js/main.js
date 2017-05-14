;(function(){

let sticky = false
//console.log($(window).height());

$("#sticky-navigation").removeClass("hidden")
$("#sticky-navigation").slideUp(0)
$(window).scroll(()=>{
	const inBottom = isInBottom()

	if(inBottom && !sticky) {
		// Cambiar la navegacion
		//console.log("Cambiar la navegacion")
		sticky=true
		stickNavigation()
	}
	if(!inBottom && sticky){
		sticky=false
		//console.log("Regresar la navegacion")
		unStickNavigation()
	}
	
})

function stickNavigation(){
	$("#description").addClass("fixed").removeClass("absolute")
	$("#navigation").slideUp("fast")
	$("#sticky-navigation").slideDown("fast")
}

function unStickNavigation(){
	$("#description").removeClass("fixed").addClass("absolute")
	$("#navigation").slideDown("fast")
	$("#sticky-navigation").slideUp("fast")
}

function isInBottom(){
	const $description = $("#description")
	const descriptionHeight = $description.height();
	return $(window).scrollTop() > $(window).height() - (descriptionHeight*2)
}

})()