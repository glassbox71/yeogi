$(function () {
    // 히어로 영역 마우스 스크롤
    let sPos = [];
    let sCount = $("main>section").length;
    for (i = 0; i < sCount; i++) {
        sPos[i] = $("main>section").eq(i).offset().top;
    }
    console.log(sPos);

    let posY;
    $(window).on("scroll", function () {
        posY = $(this).scrollTop();
        if (posY > sPos[0] && posY < sPos[2]) {
            $("header").addClass("font-black")
        }
        else {
            $("header").removeClass("font-black")
        }
    })
    $(window).on("scroll", function () {
        posY = $(this).scrollTop();
        if (posY > sPos[0]) {
            $(".search-wrap").addClass("color-on")
        }
        else {
            $(".search-wrap").removeClass("color-on")
        }
    })
    $(window).on("scroll", function () {
        posY = $(this).scrollTop();
        if (posY > sPos[1]) {
            $(".search-wrap").addClass("off")
        }
        else {
            $(".search-wrap").removeClass("off")
        }
    })

    // 메인슬라이드 페이드
    let secNum = 0;
    let timer;
    let autoPlay = true;


    $(".num>i").text(secNum + 1);

    function fadeBanner() {
        $(".e-text-box>li").eq(secNum).fadeIn(1000).siblings().fadeOut(1000);
        $(".e-img-box>li").eq(secNum).fadeIn(1000).siblings().fadeOut(1000);
        $(".num>i").text(secNum + 1);
    };

    //자동재생 시작
    function startPlay() {
        timer = setInterval(function () {
            if (secNum < 4) {
                secNum++;
            } else {
                secNum = 0;
            }
            fadeBanner();
        }, 5000);
        autoPlay = true;
        $(".e-playStop").removeClass("pause");
        $(".e-line").removeClass("active");
    }   

    //자동재생 중지
    function stopPlay() {
        clearInterval(timer);
        autoPlay = false;
        $(".e-playStop").addClass("pause");
        $(".e-line").addClass("active");
    }

    //다시 자동재생생
    startPlay();
    //화살표눌렀을때 라인바 재실행
    function resetLine(){
        $(".e-line").removeClass("active");
        stopPlay()
        void $(".e-line")[0].offsetWidth;
        setTimeout(function() {
            $(".e-line").addClass("active");
            stopPlay()
        }, 20);
    }
    //pager        
    //arrow
    $(".e-right-arrow").on("click", function () {
        if (secNum < 4) {
            secNum++;
        } else {
            secNum = 0;
        }
        console.log(secNum);
        fadeBanner();
        resetLine();
    });
    $(".e-left-arrow").on("click", function () {
        if (secNum > 0) {
            secNum--;
        } else {
            secNum = 4;
        }
        console.log(secNum);
        fadeBanner();
        resetLine();
    });
    
    $(".e-playStop").on("click", function () {

        if (autoPlay) {
            stopPlay();
        } else {
            startPlay();
        }
    })
})

