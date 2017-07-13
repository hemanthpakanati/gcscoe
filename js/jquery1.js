$(document).ready(function() {
    $('.navbar a.dropdown-toggle').on('click', function(e) {
        var $el = $(this);
        var $parent = $(this).offsetParent(".dropdown-menu");
        $(this).parent("li").toggleClass('open');

        if(!$parent.parent().hasClass('nav')) {
            $el.next().css({"top": $el[0].offsetTop, "left": $parent.outerWidth() - 4});
        }

        $('.nav li.open').not($(this).parents("li")).removeClass("open");

        return false;
    });
});

 $(window).scroll(function() {
    if($(this).scrollTop() > 50)  /*height in pixels when the navbar becomes non opaque*/ 
    {
        $('.opaque-navbar').addClass('opaque');
    } else {
        $('.opaque-navbar').removeClass('opaque');
    }
});


$(document).ready(function(){
    $('.open-modal1').click(function(){
        $('#myModal1').modal('show');
    });
  
});
$(document).ready(function(){
    $('.open-modal2').click(function(){
        $('#myModal2').modal('show');
    });
  
});
$(document).ready(function(){
    $('.open-modal3').click(function(){
        $('#myModal3').modal('show');
    });
  
});
$(document).ready(function(){
    $('.open-modal4').click(function(){
        $('#myModal4').modal('show');
    });
  
});
$(document).ready(function(){
    $('.open-modal5').click(function(){
        $('#myModal5').modal('show');
    });
  
});
$(document).ready(function(){
    $('.open-modal6').click(function(){
        $('#myModal6').modal('show');
    });
  
});
$(document).ready(function(){
    $('.open-modal7').click(function(){
        $('#myModal7').modal('show');
    });
  
});
$(document).ready(function(){
    $('.open-modal8').click(function(){
        $('#myModal8').modal('show');
    });
  
});
$(document).ready(function(){
    $('.open-modal9').click(function(){
        $('#myModal9').modal('show');
    });
  
});


jQuery(document).ready(function($) {
 
        $('#myCarousel').carousel({
                interval: 5000
        });
 
        //Handles the carousel thumbnails
        $('[id^=carousel-selector-]').click(function () {
        var id_selector = $(this).attr("id");
        try {
            var id = /-(\d+)$/.exec(id_selector)[1];
            console.log(id_selector, id);
            jQuery('#myCarousel').carousel(parseInt(id));
        } catch (e) {
            console.log('Regex failed!', e);
        }
    });
        // When the carousel slides, auto update the text
        $('#myCarousel').on('slid.bs.carousel', function (e) {
                 var id = $('.item.active').data('slide-number');
                $('#carousel-text').html($('#slide-content-'+id).html());
        });
});

/*-----Products -----*/
$('[data-toggle="popover"]').popover({
        placement : 'top',
        trigger: 'hover'
    });