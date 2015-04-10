$(document).ready(function(){

	// var counter = 0;
	// var maxChars = $("#char-count");

	$("#tweet-content .tweet-compose").focus(function(){
		$(this).addClass("addHeight");
		$("#tweet-controls").css({'display': 'block'}); 
	})	// end #tweet-content .tweet-compose focus fn
	$("#tweet-content .tweet-compose").blur(function(){
		$(this).removeClass("addHeight");
		$("#tweet-controls").css({'display': 'none'}); 
	})	// end #tweet-content .tweet-compose blur fn 	// TO DO >> Add if statement saying, if there are characters typed in the textarea (.tweet-compose), then make it so that blur() cannot happen.
	$(".reply .tweet-compose").focus(function(){
		$(this).addClass("addHeight");
	})	// end .reply .tweet-compose focus fn
	$(".reply .tweet-compose").blur(function(){
		$(this).removeClass("addHeight");
	})	// end .reply .tweet-compose blur fn 	// TO DO >> Add if statement saying, if there are characters typed in the textarea (.tweet-compose), then make it so that blur() cannot happen.
	$(".tweet-compose").on("keypress keyup", function(){
		var charsRemaining = 140 - ($(".tweet-compose").val().length);
		console.log($("#char-count").html(charsRemaining));
		if (charsRemaining <= 10) {
			$("#char-count").css({'color': 'red'});
		}
		else {
			$("#char-count").css({'color': '#999'});
		}
		disableTweet();
	})
	var disableTweet = function(){
		if (($(".tweet-compose").val().length) > 140) {
			$(".button").prop("disabled", true);
		}
		else {
			$(".button").prop("disabled", false);
		}
	};




});	// end of script