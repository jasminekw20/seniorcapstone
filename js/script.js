/* script.js 
   Author:
   Date:
*/


$(document).ready(function(){ // begin document.ready block


//history layers section
    $(".unrestoredrestoration").hover(function(){
        $('.photocaption', this).fadeToggle();

    });
//changing background color to black 
    $('.lightsdim').waypoint(function(direction){
        if (direction=='down'){
            $('.entrysection').animate({
                'background-color':'black'
            });
        };
        if (direction=='up'){
            $('.entrysection').animate({
                'background-color':'#b6cfb9'
            });
        };
    },{offset: '300px'});

    $('.lightsdim').waypoint(function(direction){
        if (direction=='down'){
            $('.dimmingtext p').css({
                'color':'white'
            });
        };
        if (direction=='up'){
            $('.dimmingtext p').animate({
                'color':'black'
            });
        };
    },{offset: '300px'},5000);

    $('.lightsdimagain').waypoint(function(direction){
        if (direction=='up'){
            $('.entrysection').animate({
                'background-color':'black'
            });
        };
        if (direction=='up'){
            $('.dimmingtext p').css({
                'color':'white'
            });
        };
    },{offset: '0px'},5000);


//changing background color to light
    $('.backtolight').waypoint(function(direction){
        if (direction=='down'){
            $('.playritual').animate({
                'background-color':'#b6cfb9'
            });
        };
        if (direction=='down'){
            $('.entrysection').animate({
                'background-color':'#b6cfb9'
            });
        };
        if (direction=='up'){
            $('.playritual').animate({
                'background-color':'black'
            });
            $('.playritual p').css({
                'color':'white'
            });
            $('.textwithpaper p').css({
                'color':'white'
            })
            $('.unionfloristcaption p').css({
                'color':'white'
            })
        };

    },{offset: '300px'});

    $('.backtolight').waypoint(function(direction){
        if (direction=='down'){
            $('.backgroundtext p').css({
                'color':'black'
            });
        };
        if (direction=='down'){
            $('.lightblue p').css({
                'color':'black'
            });
        };

        if (direction=='up'){
            $('.backgroundtext p').css({
                'color':'black'
            });
        };

    },{offset: '300px'},5000);


//serendipitoushovers
    $('.eachimage').mouseenter(function(){
        $(this).find('.hoveringcaption').fadeToggle();
    });
    $('.eachimage').mouseleave(function(){
        $(this).find('.hoveringcaption').fadeToggle();
    });

//hovering captions
    $('.eachimage').mouseenter(function(){
        $(this).find('.hoveringcaption').fadeToggle();
    });
    $('.eachimage').mouseleave(function(){
        $(this).find('.hoveringcaption').fadeToggle();
    });

//hovering serendipity
    $('.objects', this).mouseenter(function(){
        $('.actualobjectimage', this).fadeToggle();
        $('.actualobjectimage', this).css({
            'visibility':'visible'
        });
    });
    $('.objects', this).mouseleave(function(){
        $('.actualobjectimage', this).fadeToggle();
    });

//playing Time Travel Mart Sounds
   
   var offon = 0;

   $('.timetravellogo').click(function(){

        if (offon == 0) {
            //$('.objectsound').get(0).currentTime = 0;
            $('.objectsound').get(0).play();
            offon = 1;
        }  else if (offon == 1) {
            $('.objectsound').get(0).pause();
            offon = 0;
        }
   });

//playing Audio track

   var onoff = 0;

   $('.listentome').click(function(){

        if (onoff == 0) {
            $('.podcast').get(0).play();
            onoff = 1;
        } else if (onoff == 1) {
            $('.podcast').get(0).pause();
            onoff = 0;
        }
   });

   $('.maninside').waypoint(function(direction){
        if (direction == 'down'){
            $('.princessbackground img').attr('src', 'img/silhouette.jpg'); 
         };
        if (direction == 'up'){
            $('.princessbackground img').attr('src', 'img/tiles.jpg'); 
        };
    },{ offset: '300px'});

    $('.hallway').waypoint(function(direction){
        if (direction == 'down'){
            $('.princessbackground img').attr('src', 'img/chinastaircase.jpg'); 
         };
        if (direction == 'up'){
            $('.princessbackground img').attr('src', 'img/silhouette.jpg'); 
        };
    },{ offset: '300px'});

    $('.purpleday').waypoint(function(direction){
        if (direction == 'down'){
            $('.princessbackground img').attr('src', 'img/curvedpanorama.jpg'); 
        };
        if (direction == 'up'){
            $('.princessbackground img').attr('src', 'img/chinastaircase.jpg'); 
        };
    },{ offset: '300px'});

    $('.blueday').waypoint(function(direction){
        if (direction == 'down'){
            $('.princessbackground img').attr('src', 'img/curvedblue.jpg'); 
        };
        if (direction == 'up'){
            $('.princessbackground img').attr('src', 'img/curvedpanorama.jpg'); 
        };
    },{ offset: '300px'});

    $('.tuskhut').waypoint(function(direction){
        if (direction == 'down'){
            $('.princessbackground img').attr('src', 'img/tuskhutman.jpg'); 
        };
        if (direction == 'up'){
            $('.princessbackground img').attr('src', 'img/curvedblue.jpg'); 
        };
    },{ offset: '300px'});

    $('.saloon').waypoint(function(direction){
        if (direction == 'down'){
            $('.princessbackground img').attr('src', 'img/frontiersaloon.png'); 
        };
        if (direction == 'up'){
            $('.princessbackground img').attr('src', 'img/tuskhutman.jpg'); 
        };
    },{ offset: '300px'});


//brassroots moving images
    $('.jewelbar').waypoint(function(direction){
        if (direction == 'down'){
            $('.brdhistorybg img').attr('src', 'img/bararea.jpg'); 
         };
        if (direction == 'up'){
            $('.brdhistorybg img').attr('src', 'img/gemonstairs.jpg'); 
        };
    },{ offset: '300px'});
    $('.graffiti').waypoint(function(direction){
        if (direction == 'down'){
            $('.brdhistorybg img').attr('src', 'img/graffiti.jpg'); 
         };
        if (direction == 'up'){
            $('.brdhistorybg img').attr('src', 'img/bararea.jpg'); 
        };
    },{ offset: '300px'});
    $('.familystone').waypoint(function(direction){
        if (direction == 'down'){
            $('.brdhistorybg img').attr('src', 'img/livedin.jpg'); 
         };
        if (direction == 'up'){
            $('.brdhistorybg img').attr('src', 'img/graffiti.jpg'); 
        };
    },{ offset: '300px'});

     $('.magazine').waypoint(function(direction){
        if (direction == 'down'){
            $('.brdhistorybg img').attr('src', 'img/duotogether.jpg'); 
         };
        if (direction == 'up'){
            $('.brdhistorybg img').attr('src', 'img/livedin.jpg'); 
        };
    },{ offset: '300px'});

//Photo Captions
    $(".memory").hover(function(){
        $('.photocaption', this).fadeToggle();

    });
    $(".albumimage").hover(function(){
        $('.photocaption', this).fadeToggle();

    });
    $(".brdsetting img").hover(function(){
        $('.photocaption', this).fadeToggle();

    });
    $(".eachrowpic").hover(function(){
        $('.photocaption', this).fadeToggle();

    });
    $(".porterimage").hover(function(){
        $('.photocaption', this).fadeToggle();

    });
    $(".brdinteraction").hover(function(){
        $('.photocaption', this).fadeToggle();

    });



}); //end document.ready block
