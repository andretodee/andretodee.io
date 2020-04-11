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

    // var tab1 = {
    // 	"item": {
    // 		"title": "Vestibulum at odio sit amet",
    // 		"content": [
    // 			"Vestibulum at odio sit amet diam consectetur congue.",
    // 			"Donec imperdiet tincidunt nisi non dignissim.",
    // 			"Maecenas diam metus, fermentum a velit ut, auctor consequat ligula.",
    // 			"In ultrices lobortis venenatis.",
    // 			"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque dignissim sit amet lectus ac tincidunt.",
    // 			"Quisque bibendum mi at tempus tempus.",
    // 			"Suspendisse pretium, quam eu faucibus cursus, nunc leo pharetra justo, ut rutrum lorem ipsum quis velit.",
    // 			"Aenean imperdiet molestie dignissim.",
    // 			"Curabitur faucibus nulla metus, vel ornare libero accumsan eget."
    // 		]
    // 	}
    // }
    //
    // var tab2 = {
    //     "item": {
    //         "title": "Sed vehicula neque",
    //         "content": [
    //             "Donec ultricies felis non sem euismod, vel hendrerit metus porttitor.",
    //             "Donec sed ex ut tellus ultricies vestibulum vitae sit amet erat.",
    //             "Etiam tempor, libero eget bibendum auctor, risus nulla finibus dolor, in ullamcorper ipsum sapien dignissim felis.",
    //             "Nunc mattis sagittis mi, at hendrerit dolor semper non.",
    //             "Sed scelerisque sollicitudin felis euismod laoreet.",
    //             "Nunc elementum purus orci, nec ornare mi vehicula at.",
    //             "Praesent porta nisi in magna aliquam, sed consequat turpis ornare.",
    //             "Sed laoreet porttitor purus vitae tincidunt."
    //         ]
    //     }
    // }
    //
    // var tab3 = {
    //     "item": {
    //         "title": "Nulla id libero pretium",
    //         "content": [
    //             "Quisque massa leo, congue quis turpis et, ullamcorper consequat felis.",
    //             "Nullam non vulputate elit.",
    //             "Fusce id blandit tortor.",
    //             "Nullam sagittis urna quis leo volutpat, nec porta nibh mollis.",
    //             "Sed placerat, ligula sed condimentum fringilla, neque dui blandit dolor, eu semper quam nunc non magna.",
    //             "Cras a hendrerit nisi.",
    //             "Phasellus aliquam rutrum lectus, feugiat eleifend ex faucibus quis.",
    //             "Aliquam sed quam tellus.",
    //             "Duis porta vel nisi at tempus.",
    //             "Suspendisse eu vestibulum odio, id ultricies mauris.",
    //             "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    //             "Aenean sit amet auctor tellus.",
    //             "Vivamus sodales nisi fermentum euismod posuere."
    //         ]
    //     }
    // }

    function getData(path){
        $.getJSON("./ajax-json/" + path + ".json", function(json) {
            console.log('test');
            console.log(json);
            var textArray = json.item.content;

            var finalText = textArray.toString();

            $('.tab-text > p').html(finalText);

        });





    };


function init(){
    slider();
    navabarScroll();
    closeCookie();
    tabActive();
    mobileMenu();
    getData('tab1');

    // var doc = $(document);
    // doc.on('click','.tab-name', tabActive)
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
