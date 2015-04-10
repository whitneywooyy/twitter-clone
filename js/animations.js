$(document).ready(function(){
	$("#tweet-content .tweet-compose").focus(function(){
		$(this).addClass("addHeight");
		$("#tweet-controls").css({'display': 'block'}); 
	})	// end #tweet-content .tweet-compose focus fn
	$("#tweet-content .tweet-compose").blur(function(){
		$(this).removeClass("addHeight");
		$("#tweet-controls").css({'display': 'none'}); 
	})	// end #tweet-content .tweet-compose blur fn
	$(".reply .tweet-compose").focus(function(){
		$(this).addClass("addHeight");
	})	// end .reply .tweet-compose focus fn
	$(".reply .tweet-compose").blur(function(){
		$(this).removeClass("addHeight");
	})	// end .reply .tweet-compose blur fn

	// TO DO > Fix connection between 





});	// end of script