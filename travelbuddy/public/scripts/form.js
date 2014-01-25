$(document).ready(
    function(){
        $("#switch").click(function () {
        	var l1=$('[name="location1"]').val();
        	var l2=$('[name="location2"]').val();
        	$('[name="location1"]').val(l2);
        	$('[name="location2"]').val(l1);
            $(this).toggleClass("left right");
            if($(this).hasClass("right")){
                $(this).text("-->")
            }else if($(this).hasClass("left")){
                $(this).text("<--")
            }else{
                $(this).text("No Class")
            }
        	return false;        	
        });
        $(".unselected").click(function(){
            console.log("clicked!")
        	$(".selected").removeClass("selected");
        	$(this).toggleClass("selected");
            //$(this).text("selected");

        });
        var today = new Date();
    	for ( var i = 1; i < 8; i++ ) {    		
    		var nextday = new Date(today.getTime() + i * 24 * 60 * 60 * 1000); 
			var month = nextday.getMonth() + 1;
   			$("#"+i).text(nextday.getDate()+"/"+month);
		}
          
    });