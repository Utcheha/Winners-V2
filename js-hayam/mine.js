
/* NAVBAR websites /mobile/video*/ 


$("#websites").click(function(){
    $("#website").show(1)
    $("#video").hide(1)
    $("#mobile").hide(1)

    /*when click on load more*/ 
    $("#load").click(function(){
        $("#loadwebsite").show(50,function(){
        $("#load").text("عرض أقل")
        })
        $("#load").click(function(){
            $("#loadwebsite").hide(50,function(){
                $("#load").text("عرض المزيد")
            })    
        })
    }) 

})
 
$("#videos").click(function(){
    $("#video").show(1)
    $("#website").hide(1)
    $("#mobile").hide(1)
   
    /*when click on load more*/ 
    $("#load").click(function(){
        $("#loadvideo").show(50,function(){
        $("#load").text("عرض أقل")
        })
        $("#load").click(function(){
            $("#loadvideo").hide(50,function(){
                $("#load").text("عرض المزيد")
            })    
        })
    }) 

})

$("#mobiles").click(function(){
    $("#mobile").show(1)
    $("#website").hide(1)
    $("#video").hide(1)
   /*when click on load more*/ 
   $("#load").click(function(){
    $("#loadmobile").show(1,function(){
    $("#load").text("عرض أقل")
    })
    $("#load").click(function(){
        $("#loadmobile").hide(1,function(){
            $("#load").text("عرض المزيد")
        })    
    })
}) 

})


/*nominees section */


 /*when click on load more*/ 
 $("#loadnomniees").click(function(){
    $("#nominees").show(50,function(){
    $("#loadnomniees").text("عرض أقل")
    })
    $("#loadnomniees").click(function(){
        $("#nominees").hide(50,function(){
            $("#loadnomniees").text("عرض المزيد");
        })    
    })
}) 





















/*about page*/ 

$('.owl-carouselheam').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:5
        }
    }
})



/*carsoul 2*/ 
$('.carousel-inner').carousel-inner({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})



// navbar
{$(function () {
    $(".shy-header").shyheader({
        classname: "is-watching",
        container: 'shy-container'
    });
});
!function(e,t,n,i){"use strict";e.shyheader=function(i,o){var s=this;s.$el=e(i),s.el=i,s.$el.data("shyheader",s);var a=!1,c=0,l=0,r=0,h=5,d=0,f="";s.initialize=function(){s.options=e.extend({},e.shyheader.defaultOptions,o),d=s.$el.outerHeight(!0),"undefined"!==s.options.container&&(f=e("."+s.options.container),f.css("padding-top",d+"px"),s.options.offsetContentFlag=!0),t.addEventListener("scroll",s.triggerScroll,!1)},s.triggerScroll=function(){a=!0,c=n.body.scrollTop||t.pageYOffset,s.checkScrollPosition()},s.checkScrollPosition=function(){s.options.offsetContentFlag?c>=d&&s.watch():s.watch()},s.watch=function(){a&&(s.getDirection(),a=!1)},s.getDirection=function(){r=c,Math.abs(l-r)<=h||(r>l?s.$el.addClass(s.options.classname):r+e(t).height()<e(n).height()&&s.$el.removeClass(s.options.classname),l=r)},s.initialize()},e.shyheader.defaultOptions={classname:"is-watching",container:"undefined",offsetContentFlag:!1},e.fn.shyheader=function(t){return this.each(function(){new e.shyheader(this,t)})}}(jQuery,window,document);
}
























/*contact page*/ 

$("#rate").click(1,function(){
    $(this).css("color","yellow");
})
$("#rate1").click(1,function(){
    $(this).css("color","yellow");
})
$("#rate2").click(1,function(){
    $(this).css("color","yellow");
})
$("#rate3").click(1,function(){
    $(this).css("color","yellow");
})
$("#rate4").click(1,function(){
    $(this).css("color","yellow");
})