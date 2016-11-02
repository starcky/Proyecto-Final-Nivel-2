



$(document).ready(function(){

	var peliculas = ["Attack on titan","Total Retribution","The Boondocks","Rocky","Tarzan"]

	$('#si, #no').click(function(){
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


		});
		
	});

});


