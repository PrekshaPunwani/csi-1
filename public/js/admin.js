$(document).ready(function(){function s(){1==a?(o.hide(),e.removeClass("is-open"),e.addClass("is-closed"),a=!1):(o.show(),e.removeClass("is-closed"),e.addClass("is-open"),a=!0)}var e=$(".hamburger"),o=$(".overlay"),a=!1;e.click(function(){s()}),$('[data-toggle="offcanvas"]').click(function(){$("#wrapper").toggleClass("toggled")})});