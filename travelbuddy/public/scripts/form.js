$(document).ready(
    function(){
        var d = new Date();
        var weekdays = ["Sun","M","T","W","Th","F","Sat"];
        $("#currentdate").val(d.getTime());
        for(var i =1; i<8; i++){
            $("#"+i).text(d.getDate())
            
            $("#week"+i).text(weekdays[d.getDay()]);
            d.setDate(d.getDate()+1);
        }
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
        	$(".selected").removeClass("selected");
        	$(this).addClass("selected");
          	var d = new Date(parseInt($("#currentdate").val()) + (parseInt($(this).attr('id'))-1)*24*60*60*1000);
          	$("#date").val((d.getMonth()+1)+"/"+d.getDate()+"/"+d.getFullYear());
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
    });