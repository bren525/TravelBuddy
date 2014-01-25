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
        $("#school").blur(function() {
  			var s1=$('#school').val();
        	$('[name="location1"]').val(s1);
		});
		$("#hours").blur(function() {
  			var s1=$('#hours').val();
  			if(!s1){
  				return true;
  			}
  			if($.isNumeric(s1) == false){
  				alert("Hours should be a number and between 0-23");
        		$('#hours').val("");
        		return false;	
        	}
        	var s2=parseInt(s1);
        	if(s2<0 || s2>23) {
        		alert("hours should be between 0-23");
        		$('#hours').val("");
        		return false;	
        	}
        	return true;
		});
		$("#minutes").blur(function() {
  			var s1=$('#minutes').val();
  			if(!s1){
  				return true;
  			}
  			if($.isNumeric(s1) == false){
  				alert("Minutes should be a number and between 0-59");
        		$('#Minutes').val("");
        		return false;	
        	}
        	var s2=parseInt(s1);
        	if(s2<0 || s2>59) {
        		alert("Minutes should be between 0-59");
        		$('#Minutes').val("");
        		return false;	
        	}
        	return true;
		});
        var today = new Date();
        var weekday=new Array(7);
		weekday[0]="Sun";
		weekday[1]="M";
		weekday[2]="T";
		weekday[3]="W";
		weekday[4]="Th";
		weekday[5]="F";
		weekday[6]="Sat";
    	for ( var i = 0; i < 8; i++ ) {    		
    		var nextday = new Date(today.getTime() + i * 24 * 60 * 60 * 1000); 
			//var month = nextday.getMonth() + 1;
			var dayOfWeek = weekday[nextday.getUTCDay()];
   			$("#"+(i+1)).text(nextday.getDate());
   			$("#week"+(i+1)).text(dayOfWeek);
		}
          
    });