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

// TENTATIVO DI RENDERE LE CARD UN CAROSEL SU MOBILE

  // $('.read-more').slick({
  //   arrows:true,
  //   dots:true,
  //   responsive: [
  //       {
  //         breakpoint: 440,
  //         settings: {
  //             slidesToShow: 1,
  //             slidesToScroll: 1,
  //             infinite: false
  //           }
  //       }
  //   ]
  // });

 // FINE TENTATIVO DI RENDERE LE CARD UN CAROSEL SU MOBILE

  function navabarScroll(){
      $(window).on('scroll', function(e) { //quando vado a fare scroll con il mouse
            st = $(this).scrollTop(); //imposto la posizione di scorrimento
            if (st > 80) { //se la posizione di scorrimento è maggiore a 80px
                $('.navbar').addClass('scrolled'); //cambio le proprieta  della navbar
            } else {  //altrimenti (se faccio scroll in alto)
                $('.navbar').removeClass('scrolled'); //rimetto le proprieta  della navbar come prima

            }
      });
  };

  function closeCookie(){
      $('.cookie-button').click(function(){
         $('.cookie').hide();
     });
  };

  function tabActive(){

        $('.tab-name').click(function(){

            var selectedTab = $(this);
            $('.tab-name').removeClass('active');
            selectedTab.addClass('active');
        });


  };

  function mobileMenu(){
      $('.fa-bars').click(function(){
          $('.drop-down-menu').fadeToggle();
          $('.logo').toggle();
          $('.hamburger-menu').toggle();
      });
  };



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

        function getData(path){
            $.getJSON("../ajax-json/" + path + ".json", function(json) {
                console.log(json);
            });
        };

        // function getText(numberText){
        //     $('.tab-text').addClass('hidden');
        //     if ($('.tab-text').hasClass('tab-text-' + numberText)) {
        //         $(this).addClass('visible');
        //     }
        // };

function init(){
    slider();
    navabarScroll();
    closeCookie();
    tabActive();
    mobileMenu();

    // var doc = $(document);
    // doc.on('click','.tab-name', tabActive)
    $('.invia').click(function(){
        validate();
    });

    $('.tab-one').click(function(){
        getData('tab1');
        // getText(one);
    });

    $('.tab-two').click(function(){
        getData('tab2');
        // getText(two);
    });

    $('.tab-three').click(function(){
        getData('tab3');
        // getText(three);
    });

};


$(document).ready(init);
