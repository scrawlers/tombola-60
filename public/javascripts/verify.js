
$(document).ready(function() {
      var last_class = "";
      $('#box_type').change(function(){
    	  $(".boxlist").html("");
	// alert( Number($("[name='combination']").val().split(",").length));
        // alert(Number($(this).val()))
    	 
// input pick number and game list	
    	  for(var i=1; i<=Number($(this).val());i++){
    		  var input = "<input type='text', class='input-mini', name=lucky_no[]>";
    		  $(".boxlist").html($(".boxlist").html() + input);
    	  }
	$('.boxlist').removeClass(last_class);
	$('.boxlist').addClass('boxbg'+Number($(this).val()));
        last_class = 'boxbg'+Number($(this).val());
 });


//select game and verification card
      $('#box_type').change();
      var i= 0;
      $("[name='lucky_no[]']").each(function(){
    	  var ccard = $("[name='combination']").val().split(",");
    	 $(this).val(ccard[i]);
    	 i++;
      });
      console.log($(this).val(ccard[i]));
      var ctr=0;
      var box_ctr =0;
      if($("[name='combination']").val().split(",").length >= 6){
          $("[name='lucky_no[]']").each(function(){
        	 box_ctr++;
         	 var win = $("[name='winner']").val().split(",");
         	if(win.indexOf($(this).val())!=-1){
         		$(this).css("border","2px solid green");
         		ctr++;
         	}
         	else{
         		$(this).css("border","2px solid red");
         	}
         	if(ctr == box_ctr){
         		setInterval(function(){
            		  $(".boxlist").fadeIn().delay(50).fadeOut();
           		},1000);
         	}
           });
    	  
    	  
      }
//button clear
  $("#clearme").click(function(){
      $("[name='lucky_no[]']").each(function(){
           $(this).val("");
           if($(this).parent().attr("id") && $(this).parent().attr("id").indexOf("boxee")!=-1){
		 if($(this).parent().attr("id")!="boxee-1"){
                         $(this).parent().hide();
                         $(".boxlist").html("");            
                }
           }
 	       
      });
   });
 
   if($("[name='combination']").val().split(",").length>1){
             $("#box_type option[value='"+$("[name='combination']").val().split(",").length+"']").attr("selected","selected");
             $('#box_type').change();    
    
});
