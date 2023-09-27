let subMenu = document.querySelectorAll(".sub-menu");
let gnb = document.querySelectorAll(".menu ul li a");
let Lnb = document.querySelectorAll(".lnb");
let fl = document.querySelector("#wrap");
let hd = document.querySelectorAll("header");
let ht = Lnb[3].offsetHeight;
console.log("ht :" + ht);
for (let i = 0; i <= 9; i++) {
  subMenu[i].style.opacity = "0";
}
gnb.forEach(function (item, keys) {
  console.log(keys);
  item.addEventListener("mouseenter", function (e) {
    let j = Array.from(gnb).indexOf(e.target);
    function others(item) {
      return item !== j;
    }
    let othersItem = Array.from(subMenu).filter(others);
    othersItem.forEach(function (item) {
      item.style.height = "0px";
      item.style.opacity = "0";
    });
    Lnb.forEach(function () {
      let subht = Lnb[j].offsetHeight;
      console.log("j + " + j);
      //   subMenu[j].style.height = "auto"; 이렇게 하면 transition이 안됨
      subMenu[j].style.height = subht + "px";
      subMenu[j].style.opacity = "1";
    });
  });
});
hd.forEach(function (item) {
  item.addEventListener("mouseenter", function () {
    document.querySelector(".top-menu").style.backgroundColor = "#fff";
    document.querySelector(".top-menu").style.transitionDelay = "0";
    /* for (let i = 0; i <= 2; i++) {
    fl[i].classList.add("on");
  } */
    fl.classList.add("on");
  });
  item.addEventListener("mouseleave", function () {
    document.querySelector(".top-menu").style.backgroundColor = "#fff";
    document.querySelector(".top-menu").style.transitionDelay = "0.1s";

    /* for (let i = 0; i <= 2; i++) {
    fl[i].classList.remove("on");
  } */
    fl.classList.remove("on");
  });
});
subMenu.forEach(function (item, keys) {
  // let x = gnb[keys].querySelector("a");
  item.addEventListener("mouseenter", function () {
    //   subMenu.style.height = ht + "px";
    // gnb[keys].classList.add("active");
  });
  item.addEventListener("mouseleave", function (e) {
    let j = Array.from(subMenu).indexOf(e.target);
    subMenu[j].style.height = 0 + "px";
    /* for (let i = 0; i <= 4; i++) {
            subMenu[i].style.height = 0 + "px";
          } */
    // gnb[keys].classList.remove("active");
  });
});

$(function () {
  $(".visual .visual-inner-middle .top-btn ul li .se1").click(function(e){
    e.preventDefault();
    $(".visual .visual-inner-middle .top-btn ul li a").css({
      color:"#6e6e73",
      transition:"0.3s",
    })
    $(this).css({
      color:"#1d1d1f",
      transition:"0.3s",
    })
  })
  $(".visual .visual-inner-middle .top-btn ul li .se2").click(function(e){
    e.preventDefault();
    $(".visual .visual-inner-middle .top-btn ul li a").css({
      color:"#6e6e73",
      transition:"0.3s",
    })
    $(this).css({
      color:"#1d1d1f",
      transition:"0.3s",
    })
  })

  $("#part3 div.one div.bottom div.desc").css({
    display: "none",
  });
  $("#part3 div.one div.bottom div.desc1").css({
    display: "block",
  });
  $("#part3 div.one div.middle ul li a").css({
    color: "#6e6e73",
  });
  $("#part3 div.one div.middle ul li:first-child a").css({
    color: "#1d1d1f",
  });

  $("#part3 div.one .bottom .back-img .back-img-inner2").hover(
    function () {
      $(this).css({
        scale:"1.2",
        transition:"0.5s",
      })
    },
    function () {
      $(this).css({
        scale:"1",
        transition:"0.5s",
      })
    }
  );
  $("#part3 div.two .bottom .back-img .back-img-inner2").hover(
    function () {
      $(this).css({
        scale:"1.1",
        transition:"0.5s",
      })
    },
    function () {
      $(this).css({
        scale:"1",
        transition:"0.5s",
      })
    }
  );

  $("#part3 div.one div.middle ul li:first-child").click(function () {
    $("#part3 div.one div.bottom div.desc").css({
      display: "none",
    });
    $("#part3 div.one .bottom .back-img .back-img-inner2").css({
      background: "url(../images/bia_safari_large.jpg)",
      transition: "0.5s",
    });
    $("#part3 div.one div.bottom div.desc1").css({
      display: "block",
    });
    $("#part3 div.one div.middle ul li a").css({
      color: "#6e6e73",
    });
    $("#part3 div.one div.middle ul li:first-child a").css({
      color: "#1d1d1f",
    });
  });
  $("#part3 div.one div.middle ul li:nth-child(2)").click(function () {
    $("#part3 div.one div.bottom div.desc").css({
      display: "none",
    });
    $("#part3 div.one .bottom .back-img .back-img-inner2").css({
      background: "url(../images/bia_photos_large.jpg)",
      transition: "0.5s",
    });
    $("#part3 div.one div.bottom div.desc2").css({
      display: "block",
    });
    $("#part3 div.one div.middle ul li a").css({
      color: "#6e6e73",
    });
    $("#part3 div.one div.middle ul li:nth-child(2) a").css({
      color: "#1d1d1f",
    });
  });
  $("#part3 div.one div.middle ul li:nth-child(3)").click(function () {
    $("#part3 div.one div.bottom div.desc").css({
      display: "none",
    });
    $("#part3 div.one .bottom .back-img .back-img-inner2").css({
      background: "url(../images/bia_imovie_large.jpg)",
      transition: "0.5s",
    });
    $("#part3 div.one div.bottom div.desc3").css({
      display: "block",
    });
    $("#part3 div.one div.middle ul li a").css({
      color: "#6e6e73",
    });
    $("#part3 div.one div.middle ul li:nth-child(3) a").css({
      color: "#1d1d1f",
    });
  });
  $("#part3 div.one div.middle ul li:nth-child(4)").click(function () {
    $("#part3 div.one div.bottom div.desc").css({
      display: "none",
    });
    $("#part3 div.one .bottom .back-img .back-img-inner2").css({
      background: "url(../images/bia_garageband_large.jpg)",
      transition: "0.5s",
    });
    $("#part3 div.one div.bottom div.desc4").css({
      display: "block",
    });
    $("#part3 div.one div.middle ul li a").css({
      color: "#6e6e73",
    });
    $("#part3 div.one div.middle ul li:nth-child(4) a").css({
      color: "#1d1d1f",
    });
  });
  $("#part3 div.one div.middle ul li:nth-child(5)").click(function () {
    $("#part3 div.one div.bottom div.desc").css({
      display: "none",
    });
    $("#part3 div.one .bottom .back-img .back-img-inner2").css({
      background: "url(../images/bia_pages_large.jpg)",
      transition: "0.5s",
    });
    $("#part3 div.one div.bottom div.desc5").css({
      display: "block",
    });
    $("#part3 div.one div.middle ul li a").css({
      color: "#6e6e73",
    });
    $("#part3 div.one div.middle ul li:nth-child(5) a").css({
      color: "#1d1d1f",
    });
  });
  $("#part3 div.one div.middle ul li:nth-child(6)").click(function () {
    $("#part3 div.one div.bottom div.desc").css({
      display: "none",
    });
    $("#part3 div.one .bottom .back-img .back-img-inner2").css({
      background: "url(../images/bia_numbers_large.jpg)",
      transition: "0.5s",
    });
    $("#part3 div.one div.bottom div.desc6").css({
      display: "block",
    });
    $("#part3 div.one div.middle ul li a").css({
      color: "#6e6e73",
    });
    $("#part3 div.one div.middle ul li:nth-child(6) a").css({
      color: "#1d1d1f",
    });
  });
  $("#part3 div.one div.middle ul li:nth-child(7)").click(function () {
    $("#part3 div.one div.bottom div.desc").css({
      display: "none",
    });
    $("#part3 div.one .bottom .back-img .back-img-inner2").css({
      background: "url(../images/bia_keynote_large.jpg)",
      transition: "0.5s",
    });
    $("#part3 div.one div.bottom div.desc7").css({
      display: "block",
    });
    $("#part3 div.one div.middle ul li a").css({
      color: "#6e6e73",
    });
    $("#part3 div.one div.middle ul li:nth-child(7) a").css({
      color: "#1d1d1f",
    });
  });

  $(".visual .visual-inner-middle .top-btn ul li").eq(0).addClass("active2");
  /* $(".visual .visual-inner-middle .top-btn ul li").eq(0).click(function(){
    let i = $(this).index();
    $(".visual .visual-inner-middle .top-btn ul li").removeClass("active2");
    $(this).addClass("active2")
  }) */

  $(".visual .visual-inner-middle .mid-parent").hide();
  $(".visual .visual-inner-middle .mid-parent1").show();
  $(".visual .visual-inner-middle .top-btn ul li:first-child").click(function(){
    $(".visual .visual-inner-middle .top-btn ul li").removeClass("active2");
    $(".visual .visual-inner-middle .top-btn ul li:first-child").addClass("active2");
    $(".visual .visual-inner-middle .mid-parent").hide();
    $(".visual .visual-inner-middle .mid-parent1").show();
  })
  $(".visual .visual-inner-middle .top-btn ul li:last-child").click(function(){
    $(".visual .visual-inner-middle .top-btn ul li").removeClass("active2");
    $(".visual .visual-inner-middle .top-btn ul li:last-child").addClass("active2");
    $(".visual .visual-inner-middle .mid-parent").hide();
    $(".visual .visual-inner-middle .mid-parent2").show();
  })

  $("#part3 .one .middle ul li").eq(0).find("a").addClass("active");
  $("#part3 .one .middle ul li").click(function () {
    let i = $(this).index();
    $("#part3 .one .middle ul li a").removeClass("active");
    $(this).find("a").addClass("active");
  });

  $("#part3 .two .middle ul li").eq(0).find("a").addClass("active");
  $("#part3 .two .middle ul li").click(function () {
    let i = $(this).index();
    $("#part3 .two .middle ul li a").removeClass("active");
    $(this).find("a").addClass("active");
  });

  $("div.back-img-inner2 img").eq(0).css({
    opacity: "1",
  });
  $("div.back-img-inner2 img").eq(0).siblings().css({
    opacity: "0",
  });
  $("#part3 div.two div.bottom div.desc").css({
    display: "none",
  });
  $("#part3 div.two div.bottom div.desc1").css({
    display: "block",
  });
  $("#part3 div.two div.middle ul li a").css({
    color: "#6e6e73",
  });
  $("#part3 div.two div.middle ul li:first-child a").css({
    color: "#1d1d1f",
  });

  $("#part3 div.two div.middle ul li:first-child").click(function () {
    $("div.back-img-inner2 img").eq(0).siblings().css({
      opacity: "0",
      transition: "0.5s",
    });
    $("#part3 div.two div.bottom div.desc").css({
      display: "none",
    });
    $("div.back-img-inner2 img").eq(0).css({
      opacity: "1",
      transition: "0.5s",
    });
    $("#part3 div.two div.bottom div.desc1").css({
      display: "block",
    });
    $("#part3 div.two div.middle ul li a").css({
      color: "#6e6e73",
    });
    $("#part3 div.two div.middle ul li:first-child a").css({
      color: "#1d1d1f",
    });
  });

  $("#part3 div.two div.middle ul li:nth-child(2)").click(function () {
    $("div.back-img-inner2 img").eq(1).siblings().css({
      opacity: "0",
      transition: "0.5s",
    });
    $("#part3 div.two div.bottom div.desc").css({
      display: "none",
    });
    $("div.back-img-inner2 img").eq(1).css({
      opacity: "1",
      transition: "0.5s",
      clipPath: "inset(0% 9% 0% 9%)",
      transform: "translateY(4px)",
    });
    $("#part3 div.two div.bottom div.desc2").css({
      display: "block",
    });
    $("#part3 div.two div.middle ul li a").css({
      color: "#6e6e73",
    });
    $("#part3 div.two div.middle ul li:nth-child(2) a").css({
      color: "#1d1d1f",
    });
  });

  $("#part3 div.two div.middle ul li:nth-child(3)").click(function () {
    $("div.back-img-inner2 img").eq(2).siblings().css({
      opacity: "0",
      transition: "0.5s",
    });
    $("#part3 div.two div.bottom div.desc").css({
      display: "none",
    });
    $("div.back-img-inner2 img").eq(2).css({
      opacity: "1",
      transition: "0.5s",
    });
    $("#part3 div.two div.bottom div.desc3").css({
      display: "block",
    });
    $("#part3 div.two div.middle ul li a").css({
      color: "#6e6e73",
    });
    $("#part3 div.two div.middle ul li:nth-child(3) a").css({
      color: "#1d1d1f",
    });
  });

  $("#part3 div.two div.middle ul li:nth-child(4)").click(function () {
    $("div.back-img-inner2 img").eq(3).siblings().css({
      opacity: "0",
      transition: "0.5s",
    });
    $("#part3 div.two div.bottom div.desc").css({
      display: "none",
    });
    $("div.back-img-inner2 img").eq(3).css({
      opacity: "1",
      transition: "0.5s",
    });
    $("#part3 div.two div.bottom div.desc4").css({
      display: "block",
    });
    $("#part3 div.two div.middle ul li a").css({
      color: "#6e6e73",
    });
    $("#part3 div.two div.middle ul li:nth-child(4) a").css({
      color: "#1d1d1f",
    });
  });

  $("#part3 div.two div.middle ul li:nth-child(5)").click(function () {
    $("div.back-img-inner2 img").eq(4).siblings().css({
      opacity: "0",
      transition: "0.5s",
    });
    $("#part3 div.two div.bottom div.desc").css({
      display: "none",
    });
    $("div.back-img-inner2 img").eq(4).css({
      opacity: "1",
      transition: "0.5s",
    });
    $("#part3 div.two div.bottom div.desc5").css({
      display: "block",
    });
    $("#part3 div.two div.middle ul li a").css({
      color: "#6e6e73",
    });
    $("#part3 div.two div.middle ul li:nth-child(5) a").css({
      color: "#1d1d1f",
    });
  });

  let animationSpeed1 = 60; // 기본 슬라이더 속도 (초당 이동 거리)
  let animationSpeed2 = 80; // 기본 슬라이더 속도 (초당 이동 거리)
  let sliderWidth = $(".slider").width() * $(".slider").length; //이미지 가로 값
  $(".slider-container1").append($("#slider1").eq(0).clone());
  $(".slider-container2").append($("#slider2").eq(0).clone());

  const tl1 = gsap.timeline({ repeat: -1 });
  tl1.to(".slider-container1", {
    x: -sliderWidth,
    duration: animationSpeed2,
    ease: "linear",
  });
  tl1.play();
  $(".slider-container1").hover(
    function () {
      //tl.pause();
      animationSpeed2 = 200; // 원하는 속도로 조절합니다.
      tl1.duration(animationSpeed2);
    },
    function () {
      animationSpeed2 = 80; // 마우스를 떠난 후 기존 속도로 복구합니다.
      tl1.duration(animationSpeed2);
      tl1.play();
    }
  );
  const tl2 = gsap.timeline({ repeat: -1 });
  tl2.to(".slider-container2", {
    x: -sliderWidth,
    duration: animationSpeed1,
    ease: "linear",
  });
  tl2.play();
  $(".slider-container2").hover(
    function () {
      //tl.pause();
      animationSpeed1 = 200; // 원하는 속도로 조절합니다.
      tl2.duration(animationSpeed1);
    },
    function () {
      animationSpeed1 = 60; // 마우스를 떠난 후 기존 속도로 복구합니다.
      tl2.duration(animationSpeed1);
      tl2.play();
    }
  );
});
