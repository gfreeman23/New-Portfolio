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

$("#top span").click(function() {
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
  $(this).next(".modal").toggle();
  if($(".modal").is(":visible")) {
    $(".close-modal").fadeIn();
    $(".video-bg").click(".modal").fadeOut();
  }
});

$(".close-modal").click(function() {
  $(this).fadeOut();
  $(".modal").fadeOut();
});

$(".video-bg").click(function() {
  $(".modal, .close-modal").fadeOut();
});

// SIDEBAR
$("#top-logo a, #sidebar a, .prev-next a").on("click", function() {
  var activeLink = $(".sidebar-active");
  activeLink.removeClass("sidebar-active"); 
  $(this).addClass("sidebar-active");
});

// SHARE ICONS
var shareURL = $(location).attr("href");

$("a.social-share-twitter").attr("href", "https://twitter.com/intent/tweet?text=Check Out This Awesome Site!&amp;url=" + shareURL + "&amp;via=socialshare");
$("a.social-share-facebook").attr("href", "https://www.facebook.com/sharer/sharer.php?u=" + shareURL);
$("a.social-share-linkedin").attr("href", "https://www.linkedin.com/shareArticle?mini=true&url=" + shareURL + "&amp;title=Check Out This Awesome Site!");                         
$("a.social-share-pinterest").attr("href", "https://pinterest.com/pin/create/button/?url=" + shareURL + "&amp;description=Check Out This Awesome Site!");                                    

$(".share-icons a").attr("onclick", "javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=no,scrollbars=no,height=400,width=600'); return false;").attr("target", "_blank");