
// Edit dealer code

$('.save').addClass('hide');
$('.edit-input').addClass('hide');
$('.mrs').addClass('hide');
$('.validate-dealer-code').addClass('hide');
$('.success-dealer-code').addClass('hide');
$('.validate-email').addClass('hide');
$('.success-email').addClass('hide');
$('.validate-vin').addClass('hide');
$('.success-vin').addClass('hide');
$('.vehicle-info').addClass('hide');

$('.address-lookup-searching').addClass('hide');
$('.address-lookup-success').addClass('hide');


// Dealer edit
$('.edit').on('click', function() {
  $('.save').removeClass('hide');
  $('.edit-input').removeClass('hide');
  $(this).addClass('hide');
  $('.save-input').addClass('hide');

  // $( ".all-form" ).animate({
  //   opacity: 0.5
  // }, 500, function() {
  // });
});

// Dealer save
$('.save').click(function() {
	
  
	$('.edit').stop().delay(5000).queue(function(){
		$(this).removeClass('hide').clearQueue();
	});

	$('.save-input').stop().delay(5000).queue(function(){
		$(this).removeClass('hide').clearQueue();
		$('.success-dealer-code').addClass('hide').clearQueue();
	});


	$('.validate-dealer-code').removeClass('hide');

	$('.validate-dealer-code').stop().delay(3000).queue(function(){
		$(this).addClass('hide').clearQueue();
	});

	$('.success-dealer-code').stop().delay(3000).queue(function(){
		$(this).removeClass('hide').clearQueue();
	});

  $(this).addClass('hide');
  $('.edit-input').addClass('hide');

});

//  Validate email
$('#email-btn').click(function(e) {
	
	$('.validate-email').removeClass('hide');

	$('.validate-email').stop().delay(3000).queue(function(){
		$(this).addClass('hide').clearQueue();
	});

	$('.success-email').stop().delay(3000).queue(function(){
		$(this).removeClass('hide').clearQueue();
	});

  if(e.preventDefault)
        e.preventDefault();
    else
        e.stop();
});

$('#email-btn').click(function(e) {
  // $('.toggle').stop().delay(3000).toggle();
    $('.toggle').stop().delay(5000).queue(function(){
    $(this).addClass('hide').clearQueue();
    
  });
  $('.toggle-info').stop().delay(5000).queue(function(){
    $(this).removeClass('hide').clearQueue();
    $('.success-email').addClass('hide').clearQueue();
  });
  if(e.preventDefault)
      e.preventDefault();
  else
      e.stop();
});

// Add Vehicle
$('#add-vehicle').click(function(e) {
  
  $('.validate-vin').removeClass('hide');

  $('.validate-vin').stop().delay(3000).queue(function(){
    $(this).addClass('hide').clearQueue();
  });

  $('.success-vin').stop().delay(3000).queue(function(){
    $(this).removeClass('hide').clearQueue();
  });

  $('.vehicle-info').stop().delay(5000).queue(function(){
    $(this).removeClass('hide').clearQueue();
    $('.success-vin').addClass('hide').clearQueue();
  });

  if(e.preventDefault)
        e.preventDefault();
    else
        e.stop();

});

//  Address lookup
$('#address-lookup-btn').click(function(e) {
  
  $('.address-lookup-searching').removeClass('hide');

  $('.address-lookup-searching').stop().delay(3000).queue(function(){
    $(this).addClass('hide').clearQueue();
  });

  $('.address-lookup-success').stop().delay(3000).queue(function(){
    $(this).removeClass('hide').clearQueue();
  });

  $('.select-address').stop().delay(4000).queue(function(){
    $(this).removeClass('hide').clearQueue();
    $('.address-lookup-success').addClass('hide').clearQueue();
  });

  if(e.preventDefault)
        e.preventDefault();
    else
        e.stop();
});


// $('#add-vehicle').click(function(e) {
//   $('.toggle-vehicle').toggle();
//   $('.vehicle-info').removeClass('hide');
//   if(e.preventDefault)
//         e.preventDefault();
//     else
//         e.stop();
// });

$('.delete-vehicle').click(function(e) {
  $('.vehicle-info').addClass('hide');
  if(e.preventDefault)
        e.preventDefault();
    else
        e.stop();
});



// Email address look up
// $('#email-btn').on('click', function() {
//   $('.mrs').removeClass('hide');
//   $('.mr').addClass('hide');
// });



$("#address-name").change(function () {
    // alert($("#address-name :selected").text());
    $('#street').val($(this).find(":selected").text());
    $('#city').val("Austin");
    $('#country').val("Great Britain");

    $('#streetHouse').addClass('has-success');
    $('#city-success').addClass('has-success');
    $('#country-success').addClass('has-success');
    
    $('.form-control-feedback').removeClass('hide').clearQueue();
});


// Form validation
$(document).ready(function() {
    $('#form-validation').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },

        fields: {
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email is required and cannot be empty'
                    },
                    emailAddress: {
                        message: 'The input is not a valid email address'
                    }
                }
            },
            vin: {
                validators: {
                	  notEmpty: {
                        message: 'The VIN is required and cannot be empty'
                    },
                    vin: {
                        message: 'The VIN number is not valid'
                    }
                }
            },
            'accepted[]': {
                validators: {
                    choice: {
                        min: 1,
                        max: 1,
                        message: 'Please choose to accept the terms'
                    }
                }
            },
            'title[]': {
                validators: {
                    notEmpty: {
                        message: 'The editor names are required'
                    }
                }
            },
            'name[]': {
                validators: {
                    notEmpty: {
                        message: 'The editor names are required'
                    }
                }
            },
            'postcode[]': {
                threshold: 5,
                validators: {
                    notEmpty: {
                        message: 'The editor names are required'
                    }
                }
            },
            'street[]': {
                validators: {
                    notEmpty: {
                        message: 'The editor names are required'
                    }
                }
            },
            'city[]': {
                validators: {
                    notEmpty: {
                        message: 'The editor names are required'
                    }
                }
            },
            'country[]': {
                validators: {
                    notEmpty: {
                        message: 'The editor names are required'
                    }
                }
            },
            'phone[]': {
                threshold: 10,
                validators: {
                    notEmpty: {
                        message: 'The editor names are required'
                    }
                }
            }

        }
    })
    .on('status.field.bv', function(e, data) {
            // $(e.target)  --> The field element
            // data.bv      --> The BootstrapValidator instance
            // data.field   --> The field name
            // data.element --> The field element
            data.bv.disableSubmitButtons(false);
    });
});




$('#myModal').addClass('hide');

$('#submit').click(function(e) {
  $('#myModal').removeClass('hide');
  if(e.preventDefault)
        e.preventDefault();
    else
        e.stop();
});

