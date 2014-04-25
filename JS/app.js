function into_item(){
	var text_grab =$('#item').val();
	var num_grab=$('#quantity').val();
	$('.contents').prepend('<li class="list-group-item"><span>'+num_grab+'           '+text_grab+'</span><button id="crossed"/></li>');};
function button_change(){
	$('#add').remove();
	$('#instructions').remove();
	$('#adder').append('<div id="done"><button></button></div>');
	$('#done').show();
	$('#adder').toggle();
	};
function remove_input(){
	$('#adder').toggle();
};
	

$(document).ready(function(){

	
	$('#add').on('click', function(){
		button_change();
		
		
		
	});
	

	$("#addition").on('click', function(event){
		into_item();
		event.preventDefault();
		event.preventpropagation();
		$('ul.list-group-item').sortable();
		$('#item').val('Item');
		$('#quantity').val('Quantity'); 
	
	});
	
	$('span').on('click', function(){
	$('this').toggleClass('crossedOff')
;
});

$(document).on('dblclick','li',function(){
$(this).remove();
});	 


$(document).on('click','#crossed',function(){
	$(this).prev().toggleClass('crossedOff');
	});
$(document).on('click','#done',function(){
	remove_input();
	});

	
	
	
});


	

	
