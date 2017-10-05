$(document).ready(function(){
   
    $('a.scrool').on('click', function(evt){
       
       evt.preventDefault(); 
    
	var target = $(this).attr('href');
       
      
	$('html, body')
      
       .stop()
      
       .animate({scrollTop: $(target).offset().top}, 1000 );
    });
});
