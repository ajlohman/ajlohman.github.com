

$(function(){
	$('#add-athlete').on('click', function (e) {
	    $('#modal-add-athlete').modal('hide')

	    $( "#add-to-roster-one" ).fadeIn( 200 );
	    $( "#overlay-fadeout" ).delay( 1000 ).fadeOut( 200 );
	    $( "#athlete-success" ).delay( 1200 ).fadeIn( 200 );
	    $( "#athlete-success" ).delay( 2000 ).fadeOut( 400 );
		
	});
});