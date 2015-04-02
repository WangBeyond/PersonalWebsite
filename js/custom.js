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

        addScrollListener: function(){
            if(test) console.log("scroll");
            $(window).scroll(function(event){
                var scrollTop = $(window).scrollTop();
                var divam = 2;
                $('#home').css('top', "-"+scrollTop/divam+"px");
            })
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
    App.addScrollListener();
})

