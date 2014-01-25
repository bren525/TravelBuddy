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
        	if(s2<0 || s2>11) {
        		alert("hours should be between 0-11");
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
    $("#taxi").click(function(){
      $(this).toggleClass("on");
      if($("#transportation").val() == "both"){
        $("#transportation").val("transit");
      }else if($("#transportation").val() == "taxi"){
        $("#transportation").val("none");
      }else if($("#transportation").val() == "transit"){
        $("#transportation").val("both");
      }else{
        $("#transportation").val("taxi");
      }
      console.log($("#transportation").val());
    });

    $("#transit").click(function(){
      $(this).toggleClass("on");
      if($("#transportation").val() == "both"){
        $("#transportation").val("taxi");
      }else if($("#transportation").val() == "taxi"){
        $("#transportation").val("both");
      }else if($("#transportation").val() == "transit"){
        $("#transportation").val("none");
      }else{
        $("#transportation").val("transit");
      }
      console.log($("#transportation").val());
    });
    $("#ampm").click(function(){
      $(this).toggleClass("pm");
      if($(this).hasClass("pm")){
        $(this).text("PM");
        $("#ampmin").val("pm");
      }else{
        $(this).text("AM");
        $("#ampmin").val("am");
      }
      console.log($("#ampmin").val());
    });
          
    });