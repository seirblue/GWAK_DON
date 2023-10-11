$(function () {
  //상단 메뉴 슬라이드

  let topmenu = $(".top-menu ul li");
  let submenu = $(".sub-menu");
  let lnb = $(".sub-menu .lnb");
  let wrap = $("#wrap");

  $(topmenu).hover(
    function () {
      let i = $(this).index();
      $(submenu).eq(i).stop().slideDown(500);
      $(".top-menu").css({
        background: "#000",
        transition: "0.2s",
      });
      $(submenu).find(lnb).css({
        opacity: "0",
        transition: "0.2s",
      });
      $(submenu).eq(i).find(lnb).css({
        opacity: "1",
        transition: "0.2s",
      });
      $(wrap).stop().addClass("on");
    },
    function () {
      $(submenu).stop().slideUp(500);
      $(wrap).stop().removeClass("on");
      /* if ($(wrap).hasClass("on")) {
      } else {
        $(wrap).addClass("on");
      } */
    }
  );
  $(submenu).hover(
    function () {
      $(this).stop().slideDown(500, "linear");
    },
    function () {
      $(this).stop().slideUp(200);
      $(".top-menu").css({
        background: "rgba(22,22,25,0.8)",
        transitionDelay: "0.5s",
      });
      $(wrap).stop().removeClass("on");
    }
  );
});
