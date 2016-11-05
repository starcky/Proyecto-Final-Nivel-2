



$(document).ready(function(){

	var peliculas = ["Attack on titan","Total Retribution","The Boondocks","Rocky","Tarzan"]

	var a = $('#si');
	a = Number("");
	
	var b = $('#no');
	b = Number("");


		function Peliculasx(){
		
				
				
				$.ajax({

					url: "http://netflixroulette.net/api/api.php",
					data:{
						title: peliculas[$("#si").attr("data-pag")],
					},
					type: "GET",
					dataType: "json",

				}).done(function(json){
						var valor = $("#si").attr("data-pag");
						valor = parseInt(valor) + 1;

						// console.log('valor: '+ valor);

						$('#si').attr('data-pag',valor);
						
						$('#imagenes').attr("src", json.poster);
						$('.well').html('<p>'+ 'Titulo: ' +json.show_title+'</p>'
									   +'<p>'+ 'Diector: ' +json.director+'</p>'
									   +'<p>'+ 'Año: ' +json.release_year+'</p>'
									   +'<p>'+ 'Categoria: ' +json.category+'</p>');
						
						// console.log(json);
						
						// console.log("seleccon: "+ seleccion);
						// if(seleccion == "si"){
						// 	a += 1;
						// }
						
						// else{
						// 	b += 1;
						// }
						// $('.estadisticas').html("<p>"+"Cantidad de likes: " + a + "</p>" + "<p>"+"Cantidad de x: " + b + "</p>");
					});
		
		};

		Peliculasx();

			$('#si, #no').click(function(){
				Peliculasx();

				if($(this).attr("id") == "si")
							seleccion = "si";
						else
							seleccion = "no";

				console.log("seleccon: "+ seleccion);
								if(seleccion == "si"){
									a += 1;
								}
								
								else{
									b += 1;
								}
								$('.estadisticas').html("<p>"+"Cantidad de likes: " + a + "</p>" + "<p>"+"Cantidad de x: " + b + "</p>");
			});

});


