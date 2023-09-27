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

});
