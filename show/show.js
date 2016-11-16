$(function(){
		$("#content div").hide();
		/*
		$("#navi p").hover(
			function(){
				$(this).css("background-color","yellow");
				$(this).css("border", "2px solid black");
				var $content=$(this).attr("name");
				$("#content p").each(function(i, list){
						if ($content == list.attributes[0].value){
							$(list).show("slow");
						}
					});
			},
			function(){
				$(this).css("background-color","none");
				$(this).css("border", "none");
				$("#content p").hide("fast");
			}
			);
		*/
		$("#navi p").click(
			function(){
				$("#content div").hide();
				var $content=$(this).attr("name");
				$("#content div[name='"+$content+"']").show("slow");
				/*$("#content div").each(function(i, list){
						if ($content == list.attributes[0].value){
							$(list).show("slow");
						}
					});*/
			});
			/*
			function(){
				$("#content div").hide("slow");
			});*/
	});
