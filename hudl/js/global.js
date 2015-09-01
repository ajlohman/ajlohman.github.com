

$(function(){
	$('#add-athlete').on('click', function (e) {
	    $('#modal-add-athlete').modal('hide')
	    $( "#add-to-roster-one" ).fadeIn( 300 );
	    $( "#overlay-fadeout" ).delay( 1000 ).fadeOut( 300 );
	    $( "#athlete-success" ).delay( 1300 ).fadeIn( 500 );
	    $( "#athlete-success" ).delay( 3000 ).fadeOut( 500 );
	});
});

// $(document).ready(function(){
//     $("#add-athlete").click(function(){
//         $('#modal-add-athlete').modal('hide')
//         $('#add-to-roster-one' ).fadeIn( 300 );
//     });
// });

$(document).ready(function(){
	$('#filter-seasons').on('change', function(){
		var $this = $(this),
            $value = $this.val();
		$('#default-roster').fadeOut( 600 );
		$('#filter-roster').delay( 1000 ).fadeIn( 1000 );
	});
});


// $(document).ready(function(){
//     $('#mySelect').on('change', function(){
//         var $this = $(this),
//             $value = $this.val();
        
//         alert($value);
//     });
    
// });