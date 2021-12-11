(function() {
  var app = {
    'routes': {
      'about': {
        'rendered': function() {
          console.log('view currently showing is "About"');
          app.preventScroll();
        }
      },
      'skills': {
        'rendered': function() {
          console.log('view currently showing is "Skills"');
          app.preventScroll();
        }
      },
      'portfolio': {
        'rendered': function() {
          console.log('view currently showing is "Portfolio"');
          app.preventScroll();
        }
      },
      'contact': {
        'rendered': function() {
          console.log('view currently showing is "Contact"');
          app.preventScroll();
        }
      },
    },
    'default': 'about',
    'preventScroll': function() {
      document.querySelector('html').scrollTop = 0;
      document.querySelector('body').scrollTop = 0;
    },
    'routeChange': function() {
      app.routeID = location.hash.slice(1);
      app.route = app.routes[app.routeID];
      app.routeElem = document.getElementById(app.routeID);
      app.route.rendered();
    },
    'init': function() {
      window.addEventListener('hashchange', function() {
        app.routeChange();
      });
      if (!window.location.hash) {
        window.location.hash = app.default;
      } else {
        app.routeChange();
      }
    }
  };
  window.app = app;
})();

app.init();

// TOP NAV
$(".heading").click(function() {
  $(this).toggleClass("active");
  $(this).next(".group").slideToggle(300);
});

$("#top #top-menu").click(function() {
  $(this).toggleClass("active");
  $("#sidebar").toggle("slide");
  $("#content").toggleClass("active");
  if($("#top .active").is(":visible")) {
    $(this).html("<i class='fas fa-times'></i>");
  } else {
    $(this).html("<i class='fas fa-bars'></i>");
  }
});

// MODALS
$(".open-modal").click(function() {
  $("body").addClass("active-body");
  $(this).next(".modal").toggle();
  if($(".modal").is(":visible")) {
    $(".close-modal").fadeIn();
    $(".video-bg, #container").click(".modal").fadeOut();
  }
});

$(".close-modal").click(function() {
  $(this).fadeOut();
  $(".modal").fadeOut();
  $("body").removeClass("active-body");
});

$(".video-bg, .active-body #container").click(function() {
  $("body").removeClass("active-body");
  $(".modal, .close-modal").fadeOut();
});

// SIDEBAR
$("#top-logo a, #sidebar a, .prev-next a").on("click", function() {
  var activeLink = $(".sidebar-active");
  activeLink.removeClass("sidebar-active");
  $(this).addClass("sidebar-active");
});

// COLOR CHANGER
$("span.pink").click(function() {
  $("body").toggleClass("pink-mode");
  if($("body.pink-mode").is(":visible")) {
    $("#top-logo img").attr("src", "https://gregfreeman.me/img/logo-pink.png");
  } else {
    $("#top-logo img").attr("src", "https://gregfreeman.me/img/logo.png");
  }
});

$("span.blue").click(function() {
  $("body").removeClass("pink-mode");
  if($("body.pink-mode").is(":visible")) {
    $("#top-logo img").attr("src", "https://gregfreeman.me/img/logo-pink.png");
  } else {
    $("#top-logo img").attr("src", "https://gregfreeman.me/img/logo.png");
  }
});
