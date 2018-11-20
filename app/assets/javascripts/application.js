// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require jquery3
//= require popper
//= require bootstrap-sprockets

// pour les tabs
$(document).ready(function($){

	$('.tab_content').show();
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})




/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 


// Caroussel

$(document).ready(function(){
    
var $carrousel = $('#carrousel'), // on cible le bloc du carrousel
    $img = $('#carrousel img'), // on cible les images contenues dans le carrousel
    indexImg = $img.length - 1, // on définit l'index du dernier élément
    i = 0, // on initialise un compteur
    $currentImg = $img.eq(i), // enfin, on cible l'image courante, qui possède l'index i (0 pour l'instant)
    $dots = $(".dot");


$img.css('display', 'none'); // on cache les images
$currentImg.css('display', 'block'); // on affiche seulement l'image courante

$carrousel.append('<div class="controls"> <span class="prev"><i class="fas fa-angle-left fa-4x"></i></span> <span class="next"><i class="fas fa-angle-right fa-4x"></i></span> </div>');

$('.next').click(function(){ // image suivante

    i++; // on incrémente le compteur

    if( i <= indexImg ){
        $img.css('display', 'none'); // on cache les images
        $currentImg = $img.eq(i); // on définit la nouvelle image
        $currentImg.css('display', 'block'); // puis on l'affiche
    }
    else{
        i = indexImg;
    }

});

$('.prev').click(function(){ // image précédente

    i--; // on décrémente le compteur, puis on réalise la même chose que pour la fonction "suivante"

    if( i >= 0 ){
        $img.css('display', 'none');
        $currentImg = $img.eq(i);
        $currentImg.css('display', 'block');
    }
    else{
        i = 0;
    }

});

function slideImg(){
    setTimeout(function(){ // on utilise une fonction anonyme
						
        if(i < indexImg){ // si le compteur est inférieur au dernier index
	    i++; // on l'incrémente
	}
	else{ // sinon, on le remet à 0 (première image)
	    i = 0;
	}

	$img.css('display', 'none');

	$currentImg = $img.eq(i);
	$currentImg.css('display', 'block');

	slideImg(); // on oublie pas de relancer la fonction à la fin

    }, 5000); // on définit l'intervalle à 5000 millisecondes (7s)
}

  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }

  // dots[slideImg - 1].className += " active";

slideImg(); // enfin, on lance la fonction une première fois


});