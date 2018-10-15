
function title_click(e){
	var articleid = e.id;
	$(function(){
		$.ajax({
	    	type: "get",
		    url: "/article/title",
		    contentType: 'application/json',
		    data: {
		    	id:articleid
		    },
		    timeout: 3000,
		    success: function(ee){
		    	
		    }
		});
	});
}