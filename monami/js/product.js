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
      $(".sub").removeClass("on").css({ display: "none" });
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

  $("div.visual-inner").css({display:"none"})
  $("div.visual-inner1").css({display:"block"})

  $("div.con-btn ul li:first-child label").click(function () {
    $("div.visual-inner, div.visual-inner-middle, div.visual-maintext2").css({ display: "none" });
    $("div.visual-inner1, div.m1, div.visual-maintext1").css({ display: "block" });
  });
  $("div.con-btn ul li:nth-child(2) label").click(function () {
    $("div.visual-inner, div.visual-inner-middle ,div.visual-maintext2").css({ display: "none" });
    $("div.visual-inner2, div.m1, div.visual-maintext1").css({ display: "block" });
  });
  $("div.con-btn ul li:nth-child(3) label").click(function () {
    $("div.visual-inner, div.visual-maintext2").css({ display: "none" });
    $("div.visual-inner3, div.m1, div.visual-maintext1").css({ display: "block" });
  });
  $("div.con-btn ul li:nth-child(4) label").click(function () {
    $("div.visual-inner, div.visual-maintext2").css({ display: "none" });
    $("div.visual-inner4, div.m1 ,div.visual-maintext1").css({ display: "block" });
  });
  $("div.con-btn ul li:nth-child(5) label").click(function () {
    $("div.visual-inner, div.visual-inner-middle, div.visual-maintext2").css({ display: "none" });
    $("div.visual-inner5, div.m1, div.visual-maintext1").css({ display: "block" });
  });
  $("div.con-btn ul li:nth-child(6) label").click(function () {
    $("div.visual-inner, div.visual-maintext1").css({ display: "none" });
    $("div.visual-inner6, div.m1, div.visual-maintext2").css({ display: "block" });
  });

  $("div.visual-inner-bottom ul li:nth-child(2) label").click(function () {
    $("div.visual-inner-middle").css({ display: "none" });
    $("div.m1").css({ display: "block" });
  });
  $("div.visual-inner-bottom ul li:nth-child(3) label").click(function () {
    $("div.visual-inner-middle").css({ display: "none" });
    $("div.m2").css({ display: "block" });
  });
  $("div.visual-inner-bottom ul li:nth-child(4) label").click(function () {
    $("div.visual-inner-middle").css({ display: "none" });
    $("div.m3").css({ display: "block" });
  });
  $("div.visual-inner-bottom ul li:nth-child(5) label").click(function () {
    $("div.visual-inner-middle").css({ display: "none" });
    $("div.m4").css({ display: "block" });
  });
  $("div.visual-inner-bottom ul li:nth-child(6) label").click(function () {
    $("div.visual-inner-middle").css({ display: "none" });
    $("div.m5").css({ display: "block" });
  });
  $("div.visual-inner-bottom ul li:nth-child(7) label").click(function () {
    $("div.visual-inner-middle").css({ display: "none" });
    $("div.m6").css({ display: "block" });
  });
  $("div.visual-inner-bottom ul li:nth-child(8) label").click(function () {
    $("div.visual-inner-middle").css({ display: "none" });
    $("div.m7").css({ display: "block" });
  });

});
