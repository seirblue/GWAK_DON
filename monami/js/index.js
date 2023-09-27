/* let lnb = true;
let ele = document.querySelectorAll(".sub");
let n = ele.length;
document.getElementById("menu").onclick = function (e) {
  e.preventDefault();
  document.getElementById("bg").classList.toggle("on");
  if (lnb) {
    for (let i = 0; i < n; i++) {
      ele[i].classList.replace("sub", "sub-A");
    }
    document.querySelectorAll("sub-A").classList.add("on");
    // }
  } else {
    for (let i = 0; i < n; i++) {
      ele[i].classList.replace("sub-A", "sub");
    }
  }
  lnb = !lnb;
}; */

$(function () {
  let lnb = true;
  let ele = $(".sub");
  let n = ele.length;
  $("#menu").click(function (e) {
    e.preventDefault();
    $("#bg").toggleClass("on");
    if (lnb) {
      for (let i = 0; i < n; i++) {
        $(".text > li ul").removeClass("sub");
        $(".text > li ul").eq(i).addClass("sub-A");
        $(".text > li ul").eq(i).stop().slideDown();
      }
      $(".sub-A").addClass("on");
    } else {
      for (let i = 0; i < n; i++) {
        $(".text > li ul").removeClass("sub-A");
        $(".text > li ul").eq(i).addClass("sub");
        $(".text > li ul").eq(i).stop().slideUp();
      }
      $(".sub").removeClass("on").css({display:"none"});
    }
    lnb = !lnb;
  });

  /* $(".text > li ul").css({
    display: "none",
  }); */
  
  $(".text > li").hover(
    function () {
      $(this).find("ul.sub").stop().slideDown();
    },
    function () {
      $(this).find("ul.sub").stop().slideUp();
    }
  );

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 7,
    spaceBetween: 20,
    // centeredSlides: true,
  });

  $("div.product2 .pro-top2 .button ul li:first-child label")
    .eq(0)
    .click(function () {
      $(".mySwiper1").css({
        display: "block",
      });
      $(".mySwiper2, .mySwiper3, .mySwiper4").css({
        display: "none",
      });
    });
  $("div.product2 .pro-top2 .button ul li:nth-child(2) label")
    .eq(0)
    .click(function () {
      $(".mySwiper2").css({
        display: "block",
      });
      $(".mySwiper1, .mySwiper3, .mySwiper4").css({
        display: "none",
      });
    });
  $("div.product2 .pro-top2 .button ul li:nth-child(3) label")
    .eq(0)
    .click(function () {
      $(".mySwiper3").css({
        display: "block",
      });
      $(".mySwiper1, .mySwiper2, .mySwiper4").css({
        display: "none",
      });
    });
  $("div.product2 .pro-top2 .button ul li:nth-child(4) label")
    .eq(0)
    .click(function () {
      $(".mySwiper4").css({
        display: "block",
      });
      $(".mySwiper1, .mySwiper2, .mySwiper3").css({
        display: "none",
      });
    });

    $(".close-btn").click(function(){
      $("div.pop-btn").css({
        display:"none"
      })
    })
});
