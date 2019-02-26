$( document ).ready(function() {
  var cartas = [];
  for(var i = 0;i<53;i++){
    cartas.push(i);
  }
  //Evento para el botón mas (+)
  $("#mas").click(function(){
    $(".zona-juego").append('<img src="image/back.jpg" class="carta"/>');
  });

  //Evento para el botón menos (-)
  $("#menos").click(function(){
    $(".zona-juego img:last").remove();
  });

  //Evento al hacer click en una carta
  $(document).on("click", "img.carta", function(){
    var cartasIndice = Math.floor(Math.random() * (cartas.length-1)) + 1;
    var src = `image/${cartas[cartasIndice]}.png`;
    cartas.splice(cartasIndice,1);
    $(this).attr("src",src);
  });

  //Evento de hover
  $(document).on({
    //Función al mouse estar sobre la carta
    mouseenter: function(){

    },

    //Función al mouse dejar la carta
    mouseleave: function(){

    }
  }, "img.carta");


});
