/*global $, jquery, alert*/
$(document).ready(function () {
    
    "use strict";
    
        $('html').niceScroll({
               cursorcolor : "#222",
               cursorwidth : "7px",
               cursorborder : "none",
               cursorborderradius : "none",
               zindex : "9999"
        });
    
    //scroll
    var scrollButton = $("#scroll-top");
     $(window).scroll(function(){
      if($(this).scrollTop() >= 300)
      {
          scrollButton.show(1000);
      }
      else{
          scrollButton.hide(1000);
      }
    });
        //clack on scroll
        scrollButton.click(function(){
           $("html,body").animate({scrollTop:0},400);
      });
        var inp = document.getElementById("mail");


          inp.onfocus = function () {
              
            "use strict";
            if (this.placeholder === "Write your email") {
                
                this.placeholder = "";
            }


        };
        inp.onblur = function () {
            "use strict";
            if (this.placeholder === "") {
                this.placeholder = "Write your email";
            }
        };
    var maxText = $('textarea').attr("maxlength");
    
    $(".length").html('<span>' + maxText + '</span>');
    
    $('textarea').keyup(function () {
        
        var textLength = $(this).val().length,
            rem = maxText - textLength;
        $(".length").html('<span>' + rem + '</span>');
    });
    var lead = document.getElementById("pop").innerHtml,
       vb = lead.substring(0,10),
        hhhh = document.getElementById("pop").innerHTML = vb + "..."
});


