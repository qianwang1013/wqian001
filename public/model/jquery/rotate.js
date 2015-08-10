$(function(){
    var rotation = 0;

    jQuery.fn.rotate = function(degrees) {
        $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                     '-moz-transform' : 'rotate('+ degrees +'deg)',
                     '-ms-transform' : 'rotate('+ degrees +'deg)',
                     'transform' : 'rotate('+ degrees +'deg)',
                     '-webkit-animation-duration': '3s',
                     '-webkit-transition': 'all 500ms ease-in-out',
                     '-moz-transition': 'all 500ms ease-in-out',
                     '-o-transition': 'all 500ms ease-in-out',
                     '-ms-transition': 'all 500ms ease-in-out'
                    });

        return $(this);
    };

    /*.deg45 { transform: rotate(45deg) translate(12em) rotate(-45deg); }
    .deg135 { transform: rotate(135deg) translate(12em) rotate(-135deg); }
    .deg180 { transform: translate(-12em); }
    .deg225 { transform: rotate(225deg) translate(12em) rotate(-225deg); }
    .deg315 { transform: rotate(315deg) translate(12em) rotate(-315deg); }
    */
    jQuery.fn.rotateEach = function(degrees) {
        switch($(this).attr('data-degree')) {
        case "0":
            $(this).css({'transform': 'translate(12em) rotate(135deg)'});
            break;
        case "45":
            $(this).css({'transform': 'rotate(45deg) translate(12em) rotate(135deg)'});
            break;
        case "90":
            $(this).css({'transform': 'translateY(12em) rotate(225deg)'});
            break;
        case "135":
            $(this).css({'transform': 'rotate(135deg) translate(12em) rotate(135deg)'});
            break;
        case "180":
            $(this).css({'transform': 'translate(-12em) rotate(-45deg)'});
            break;
        case "225":
            $(this).css({'transform': 'rotate(225deg) translate(12em) rotate(135deg)'});
            break;
        case "270":
            $(this).css({'transform': 'translateY(-12em) rotate(45deg)'});
            break;
        case "315":
            $(this).css({'transform': 'rotate(315deg) translate(12em) rotate(135deg)'});
            break;
        default:
            break;
    }};

    $('#rotateCircle').click(function() {
        rotation += 40;
        $(this).rotate(rotation);
    });

    $('#rotateButton .btn').click(function(){
        var $rotateButton = $(this).closest('#rotateButton');
        $rotateButton.find('.clicked').removeClass('clicked');
        $(this).addClass('clicked');
        var rotation;
        var buttonRotation;
        var beforeRotate = parseInt($(this).attr('data-degree'));
        if(beforeRotate <= 225 ){
                rotation = 225-beforeRotate;
        }else{
                rotation = 360 - (beforeRotate-225);    
        }       

        $rotateButton.rotate(rotation);
        $(this).rotateEach(buttonRotation);         

    });

});
