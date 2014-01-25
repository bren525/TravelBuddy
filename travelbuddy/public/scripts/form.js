$(document).ready(
    function(){
        var d = new Date();
        var weekdays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
        for(var i =1; i<8; i++){
            $("#"+i).text(weekdays[d.getDay()]+" "+d.getDate())
            .val(d.getMonth()+"/"+d.getDate()+"/"+d.getFullYear());
            console.log((d.getMonth()+1)+"/"+d.getDate()+"/"+d.getFullYear());
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
        });
        $(".unselected").click(function(){
        	$(".selected").removeClass("selected");
        	$(this).addClass("selected");
            $("#date").val($(this).val());
        });
          
    });