// JavaScript Document

var App = App || {}

var test = true;

App = (function(){

    function loadAndShow(para) {
            $('#collapse').load("templates/"+para.find('a').attr('link'), function() {
            $('#collapse-container').slideDown("slow");
            $('#cross-button').removeClass("hidden");
        });
    }

    return {
        addPortfolioListener: function (){
            $('.over').click(function() {
                if(test) console.log("profolio clicked");
                if($('#collapse-container').css('display') != "none"){
                    $('#collapse-container').slideUp("slow").promise().done(loadAndShow($(this)));
                } else {
                    loadAndShow($(this));
                }
            });
        },

        addPortfolioCloseListener: function (){
            $('#cross-button').click(function() {
                if(test) console.log("close button clicked");
                $('#collapse-container').slideUp("slow").promise().done(function(){
                    $('#cross-button').addClass("hidden");
                });
            });
        },

        addScrollDownTrigger: function(){
            $('#circle-hint span').click(function() {
                if(test) console.log("circle hint button clicked");
                $('html, body').animate({
                   scrollTop: $(window).height()
                 });
            })
        },

        addScrollListener: function(){
            $(window).scroll(function(event){
                var scrollTop = $(window).scrollTop();
                if(scrollTop >= $(window).height() && $("nav").hasClass("minimized") ){
                    $("nav").removeClass("minimized");
                    $("nav").animate({
                      width:$(window).width() 
                    },300, function(){
                        $('nav > *').css('display','block');
                    })
                    console.log("show nav")
                } else if(scrollTop < $(window).height() && !$("nav").hasClass("minimized") ){
                    $('nav').addClass('minimized');
                    $('nav > *').css('display','none');
                    $("nav").animate({
                      width:0
                    },100)
                    console.log("hide nav")

                }
            })
        },

        addSmoothScroll: function(){
            $("nav ul li a[href^='#']").on('click', function(e) {
                if(test) console.log("nav button clicked");
               // prevent default anchor click behavior
               e.preventDefault();

               // store hash
               var hash = this.hash;

               // animate
               $('html, body').animate({
                   scrollTop: $(hash).offset().top
                 }, 300, function(){

                   // when done, add hash to url
                   // (default click behaviour)
                   window.location.hash = hash;
                 });

            });
        }

    }
})()



// $('a').click(function(){
//     $('html, body').animate({
//         scrollTop: $( $.attr(this, 'href') ).offset().top
//     }, 500);
//     return false;
// });

$(document).ready(function(){
    App.addPortfolioListener();
    App.addPortfolioCloseListener();
    App.addScrollDownTrigger();
    App.addScrollListener();
    App.addSmoothScroll();
})

