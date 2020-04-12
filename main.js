// FUNCTION FOR SLIDER USING SLICKJS
function slider(){
    $('.slider').slick({
      arrows:true,
      dots:true,
      fade:true,
      responsive: [
          {
            breakpoint: 550,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                arrows:false
              }
          }
      ]
    });
};

// FUNCTION TO CHANGE THE NAVBAR AFTER SCROLL
function navabarScroll(){
  $(window).on('scroll', function(e) {
        st = $(this).scrollTop();
        if (st > 80) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');

        }
  });
};

// FUNCTION TO CLOSE THE COOKIE'S SECTION
function closeCookie(){
  $('.cookie-button').click(function(){
     $('.cookie').hide();
 });
};

// FUNCTION TO CHANGE THE ACTIVE CLASS ON CLICK
function tabActive(){
    $('.tab-name').click(function(){
        var selectedTab = $(this);
        $('.tab-name').removeClass('active');
        selectedTab.addClass('active');
    });
};

// FUNCTION TO OPEN AND CLOSE THE MENU FOR MOBILE
function mobileMenu(){
  $('.fa-bars').click(function(){
      $('.drop-down-menu').fadeToggle();
      $('.logo').toggle();
      $('.hamburger-menu').toggle();
  });
};

// FUNCTION TO VALIDATE FORM'S INFORMATIONS
function validate() {
    var email = $('.email').val();
    console.log(email);
    if (email == "") {
      alert("email must be filled out");
 // else if (email) {
 // }
      return false;
    }
    email = '';

    var message = $('.message').val();
    console.log(message);
    if (message == "") {
      alert("message must be filled out");
      return false;
    }
    message = '';
}

// FUNCTION TO GET TEXT FROM AJAX CALL
function getData(path){
    $.ajax({
        url: "./ajax-json/" + path + ".json",
        dataType: "json",
        beforeSend: function() {
            $('.loader').show();
        },
        success: function(data) {
            var textArray = data.item.content;
            var finalText = textArray.toString();

            setTimeout(function(){
                $('.tab-text > p').html(finalText);
            }, 1500);
        },
        complete: function() {
            $('.loader').hide();
        }});
};

// FUNCTION FOR ANIMATED DOM ON SCROLLING
// function animatedScroll(){
//     ScrollReveal().reveal('.slider *, .read-more *, .banner *, .tab *, #contact-us *, .footer  *, cookie *',{
//         duration: 250,
//         easing: 'ease-in',
//         interval: 70
//     });
// };

function init(){
    slider();
    navabarScroll();
    closeCookie();
    tabActive();
    mobileMenu();
    getData('tab1');
        // animatedScroll();

    $('.invia').click(function(){
        validate();
    });

    $('.tab-one').click(function(){
        getData('tab1');
    });

    $('.tab-two').click(function(){
        getData('tab2');
    });

    $('.tab-three').click(function(){
        getData('tab3');
    });
};


$(document).ready(init);
