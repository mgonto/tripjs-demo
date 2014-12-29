$(document).ready(function() {


    var expose = true;

    var trip = new Trip([
      {
        sel: '.btn-create',
        content:"Please click here to go to the Applications page",
        position: 's',
        expose: expose
      },
      {
        sel: '.btn-create-app',
        content:"Please click here to create a new app",
        position: 's',
        expose: expose
      },
      {
        sel: '.appn4',
        content:"Congratulations, the app has been created!",
        position: 's',
        delay: 2000,
        expose: expose
      }
    ], {
      delay: -1
    });


    $('.btn-create').click(function(ev) {
      ev.preventDefault();
      $('.logged-in').show();
      $('.login-box').hide();
      trip.next();
    });

    $('.btn-create-app').click(function(ev) {
      ev.preventDefault();
      $('.list').append('<li class="appn4">App N4</li>');
      if (trip) {
        trip.next();
        trip = null;
      }
    });

    $('.btn-tutorial').click(function(ev) {
      ev.preventDefault();
      trip.start();
    });




});
