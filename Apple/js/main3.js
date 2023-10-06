$(function () {
  //상단 메뉴 슬라이드

  var topmenu = $(".top-menu ul li");
  var submenu = $(".sub-menu");

  $(topmenu).hover(
    function () {
        $(submenu).slideDown();
    },
    function () {
        $(submenu).slideUp();
    }
  );
});
