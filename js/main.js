$(function () {
  //우측 상단 버튼
  $(".btn:first-child").addClass("btn-on");
  $(".btn:first-child").addClass("btn-none");
  $(".btn:first-child").click(function () {
    $(this).siblings().removeClass("btn-on");
    $(this).addClass("btn-none");
    $(".btn:nth-child(2)").removeClass("btn-none");
    $(this).addClass("btn-on");
    $(".gb").css({
      visibility: "hidden",
      opacity: "0",
    });
    $(".gb1").css({
      visibility: "visible",
      opacity: "1",
    });
  });
  $(".btn:nth-child(2)").click(function () {
    $(this).siblings().removeClass("btn-on");
    $(".btn").addClass("btn-none");
    $(this).addClass("btn-on");
    $(".gb").css({
      visibility: "hidden",
      opacity: "0",
    });
    $(".gb3, .gb4").css({
      visibility: "visible",
      opacity: "1",
    });
  });
  $(".btn:nth-child(3)").click(function () {
    $(this).siblings().removeClass("btn-on");
    $(".btn:first-child").removeClass("btn-none");
    $(this).addClass("btn-on");
    $(".gb").css({
      visibility: "hidden",
      opacity: "0",
    });
    $(".gb5").css({
      visibility: "visible",
      opacity: "1",
    });
  });

  // 크기 조절
  /* $(".gb1 > .window-controls .zoom").click(function () {
    $(".gb1").css({
      width: "1536px",
      height: "720px",
    });
    $(".gb1 .text-sub p").css({
      fontsize: "32px",
    });
    $(".gb1 .text-sub2 p").css({
      fontsize: "24px",
    });
    $(".gb1 .img img").css({
      width: "100%",
    });
  });
  $(".gb1 > .window-controls .minimize").click(function () {
    $(".gb1").css({
      width: "1280px",
      height: "600px",
    });
  });
  $(".gb1 .text-sub p").css({
    fontsize: "28px",
  });
  $(".gb1 .text-sub2 p").css({
    fontsize: "20px",
  });
  $(".gb1 .img img").css({
    width: "1280px",
  });

  $(".gb2 > .window-controls .zoom").click(function () {
    $(".gb2").css({
      width: "1536px",
      height: "720px",
    });
    $(".gb2 .text-sub p").css({
      fontsize: "32px",
    });
    $(".gb2 .text-sub2 p").css({
      fontsize: "24px",
    });
    $(".gb2 .img img").css({
      width: "100%",
    });
  });
  $(".gb2 > .window-controls .minimize").click(function () {
    $(".gb2").css({
      width: "1280px",
      height: "600px",
    });
  });
  $(".gb2 .text-sub p").css({
    fontsize: "28px",
  });
  $(".gb2 .text-sub2 p").css({
    fontsize: "20px",
  });
  $(".gb2 .img img").css({
    width: "1280px",
  });

  $(".gb3 > .window-controls .zoom").click(function () {
    $(".gb3").css({
      width: "1536px",
      height: "720px",
    });
    $(".gb3 .text-sub p").css({
      fontsize: "32px",
    });
    $(".gb3 .text-sub2 p").css({
      fontsize: "24px",
    });
    $(".gb3 .img img").css({
      width: "100%",
    });
  });
  $(".gb3 > .window-controls .minimize").click(function () {
    $(".gb3").css({
      width: "1280px",
      height: "600px",
    });
  });
  $(".gb3 .text-sub p").css({
    fontsize: "28px",
  });
  $(".gb3 .text-sub2 p").css({
    fontsize: "20px",
  });
  $(".gb3 .img img").css({
    width: "1280px",
  });

  $(".gb4 > .window-controls .zoom").click(function () {
    $(".gb4").css({
      width: "1536px",
      height: "720px",
    });
    $(".gb4 .text-sub p").css({
      fontsize: "32px",
    });
    $(".gb4 .text-sub2 p").css({
      fontsize: "24px",
    });
    $(".gb4 .img img").css({
      width: "100%",
    });
  });
  $(".gb4 > .window-controls .minimize").click(function () {
    $(".gb4").css({
      width: "1280px",
      height: "600px",
    });
  });
  $(".gb4 .text-sub p").css({
    fontsize: "28px",
  });
  $(".gb4 .text-sub2 p").css({
    fontsize: "20px",
  });
  $(".gb4 .img img").css({
    width: "1280px",
  });

  $(".gb5 > .window-controls .zoom").click(function () {
    $(".gb5").css({
      width: "1536px",
      height: "720px",
    });
    $(".gb5 .text-sub p").css({
      fontsize: "32px",
    });
    $(".gb5 .text-sub2 p").css({
      fontsize: "24px",
    });
    $(".gb5 .img img").css({
      width: "100%",
    });
  });
  $(".gb5 > .window-controls .minimize").click(function () {
    $(".gb5").css({
      width: "1280px",
      height: "600px",
    });
  });
  $(".gb5 .text-sub p").css({
    fontsize: "28px",
  });
  $(".gb5 .text-sub2 p").css({
    fontsize: "20px",
  });
  $(".gb5 .img img").css({
    width: "1280px",
  });

  $(".gb6 > .window-controls .zoom").click(function () {
    $(".gb6").css({
      width: "1536px",
      height: "720px",
    });
    $(".gb6 .text-sub p").css({
      fontsize: "32px",
    });
    $(".gb6 .text-sub2 p").css({
      fontsize: "24px",
    });
    $(".gb6 .img img").css({
      width: "100%",
    });
  });
  $(".gb6 > .window-controls .minimize").click(function () {
    $(".gb6").css({
      width: "1280px",
      height: "600px",
    });
  });
  $(".gb6 .text-sub p").css({
    fontsize: "28px",
  });
  $(".gb6 .text-sub2 p").css({
    fontsize: "20px",
  });
  $(".gb6 .img img").css({
    width: "1280px",
  }); */

  $(".gb1 .navigation-btn .prev img, .gb2 .navigation-btn .prev img, .gb3 .navigation-btn .prev img, .gb5 .navigation-btn .prev img").css({
    opacity: "0.3",
  });
  /* $(".hashtag").css({
    opacity:"0"
  }) */
  $(".gb1 .navigation-btn .next img").click(function () {
    $(".gb2 .navigation-btn .prev img").css({
      opacity: "1",
    });
    $(".gb1").css({
      visibility: "hidden",
      opacity: "0",
    });
    $(".gb2").css({
      visibility: "visible",
      opacity: "1",
    });
  });
  $(".gb2 .navigation-btn .next img").click(function(){
    $(".gb2-2 .navigation-btn .next img").css({
      opacity:"0.3"
    })
    $(".gb2-2 .hashtag").css({
      opacity:"0"
    })
    $(".gb2").css({
      visibility:"hidden",
      opacity:"0"
    })
    $(".gb2-2").css({
      visibility:"visible",
      opacity:"1"
    })
  })
  $(".gb2-2 .navigation-btn .prev img").click(function(){
    $(".gb2 .hashtag").css({
      opacity:"1"
    })
    $(".gb2-2").css({
      visibility:"hidden",
      opacity:"0"
    })
    $(".gb2").css({
      visibility:"visible",
      opacity:"1"
    })
  })
  $(".gb2 .navigation-btn .prev img").click(function () {
    $(".gb1 .navigation-btn .prev img").css({
      opacity: "0.3",
    });
    $(".gb2").css({
      visibility: "hidden",
      opacity: "0",
    });
    $(".gb1").css({
      visibility: "visible",
      opacity: "1",
    });
  });
  $(".gb3 .navigation-btn .next img").click(function(){
    $(this).css({
      opacity:"0"
    })
    $(".gb3 .navigation-btn .prev img").css({
      opacity:"0"
    })
    $(".gb4 .navigation-btn .next img").css({
      opacity:"0.3"
    })
    $(".gb3").css({
      left:"-650px",
      transition:"all 0.7s",
      opacity:"0.6"
    })
    $(".gb4").css({
      left:"52.5%",
      transition:"all 0.7s",
      opacity:"1"
    })
  })
  $(".gb4 .navigation-btn .prev img").click(function(){
    $(".gb4 .navigation-btn .next img").css({
      opacity:"1"
    })
    $(".gb3 .navigation-btn .prev img").css({
      opacity:"0.3"
    })
    $(".gb3 .navigation-btn .next img").css({
      opacity:"1"
    })
    $(".gb3").css({
      left:"52.5%",
      transition:"all 0.7s",
      opacity:"1"
    })
    $(".gb4").css({
      left:"2650px",
      transition:"all 0.7s",
      opacity:"0.6"
    })
  })
  $(".gb5 .navigation-btn .next img").click(function () {
    $(".gb6 .navigation-btn .prev img").css({
      opacity: "1",
    });
    $(".gb6 .navigation-btn .next img").css({
      opacity:"0.3"
    })
    $(".gb5").css({
      visibility: "hidden",
      opacity: "0",
    });
    $(".gb6").css({
      visibility: "visible",
      opacity: "1",
    });
  });
  $(".gb6 .navigation-btn .prev img").click(function () {
    $(".gb5 .navigation-btn .next img").css({
      opacity: "1",
    });
    $(".gb6").css({
      visibility: "hidden",
      opacity: "0",
    });
    $(".gb5").css({
      visibility: "visible",
      opacity: "1",
    });
  });

  // 글자 타이핑 효과
  const $text = document.querySelector(".typing .text");

  // 글자 모음
  const letters = [
    "Hello, Welcome to my portfolios.",
    "안녕하세요, 방문해주셔서 감사합니다.",
  ];

  // 글자 입력 속도
  const speed = 60;
  let i = 0;

  // 타이핑 효과
  const typing = async () => {
    const letter = letters[i].split("");

    while (letter.length) {
      await wait(speed);
      $text.innerHTML += letter.shift();
    }

    // 잠시 대기
    await wait(800);

    // 지우는 효과
    remove();
  };

  // 글자 지우는 효과
  const remove = async () => {
    const letter = letters[i].split("");

    while (letter.length) {
      await wait(speed);

      letter.pop();
      $text.innerHTML = letter.join("");
    }

    // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
    i = !letters[i + 1] ? 0 : i + 1;
    typing();
  };

  // 딜레이 기능 ( 마이크로초 )
  function wait(ms) {
    return new Promise((res) => setTimeout(res, ms));
  }

  // 초기 실행
  setTimeout(typing, 800);
});
