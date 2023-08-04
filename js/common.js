$(document).ready(function () {
    // 애니메이트 wow
    new WOW({
        animateClass: "animate__animated",
        mobile: false,
    }).init()


    // 햄버거
    $(".etc .hbg").click(function(){
        $(".etc .hbg").toggleClass("on")
        $(".hbg-nav").toggleClass("on")
    })




    // 우클릭 메뉴
    // 전체화면 선택 "html,body"
    $("html,body").contextmenu(function(e){
        // 우측마우스 방지 코드 (a는 위로올라가는 것 방지코드?)
        e.preventDefault();
        // 가로세로 좌표 
        let x = e.pageX;
        let y = e.pageY;
        console.log("가로:"+x , "세로:"+y)
        // x = 가로축을 뜻하는 변수명으로 지정하였으며, 이벤트를 현재의 페이지 x좌표를 변수명 x에 값을 저장한다.
        // y = 세로축을 뜻하는 변수명으로 지정하였으며, 이벤트를 현재의 페이지 y좌표를 변수명 y에 값을 저장한다.
        $(".click-menu").css("left", x+"px").css("top", y+"px").show()
    })

    // 좌측 클릭했을때 메뉴 없어지기
    $(".click-menu, html,body").click(function(e){
        $(".click-menu").hide()
    })




    // 다크모드

    $("html").attr("data-dark", false);

    //다크모드 풀림 방지 
    const dark_mode = localStorage.getItem("dark_mode");
    const body = document.querySelector('body');

    if(dark_mode == "true"){
        // 다크모드인 상태
        const checkbox = document.getElementById('checkbox');
        checkbox.checked = true;
        body.classList.add("dark_mode")
        $("html").attr("data-dark", "true");

        // 다크모드 이미지 적용
        $(".main .lp img").attr("src", "images//dark-lpcover.jpg")
        $(".wd .right .content .player .audio-box .plbtn .btn-play-pause-l img").attr("src", "images//dark-play-pause-left.png")
        $(".wd .right .content .player .audio-box .plbtn .btn-play img").attr("src", "images//dark-play.png")
        $(".wd .right .content .player .audio-box .plbtn .btn-pause img").attr("src", "images//dark-pause.png")
        $(".wd .right .content .player .audio-box .plbtn .btn-play-pause-r img").attr("src", "images//dark-play-pause-right.png")
        $(".ab-main .txt img").attr("src", "images//dark-about-me.png")
        $(".about .about-wrap .img img").attr("src", "images//dark-about-LPrecord.png")
        $(".psb .right .right-wrap > img").attr("src", "images//dark-shape-text.png")
        // 
        $(".floating .fl-top > a > img").attr("src", "images/dark-fl-top.png")
        $(".floating .fl-menu > a > img").attr("src", "images/dark-fl-menu.png")
        $(".floating .fl-close > a > img").attr("src", "images/dark-fl-close.png")
        // 
        $(".life-main .txt .title img").attr("src", "images/dark-experience.png")
        $(".life-main .txt .subt img").attr("src", "images/dark-in my life.png")




    }else{
        const checkbox = document.getElementById('checkbox');
        checkbox.checked = false;
        body.classList.remove("dark_mode");
        $("html").attr("data-dark", "false");

        // 다크모드해제 이미지 적용
        $(".main .lp img").attr("src", "images//LPcover.png")
        $(".wd .right .content .player .audio-box .plbtn .btn-play-pause-l img").attr("src", "images//play-pause-left.png")
        $(".wd .right .content .player .audio-box .plbtn .btn-play img").attr("src", "images//play.png")
        $(".wd .right .content .player .audio-box .plbtn .btn-pause img").attr("src", "images//pause.png")
        $(".wd .right .content .player .audio-box .plbtn .btn-play-pause-r img").attr("src", "images//play-pause-right.png")
        $(".ab-main .txt img").attr("src", "images//about-me.png")
        $(".about .about-wrap .img img").attr("src", "images//about-LPrecord.png")
        $(".psb .right .right-wrap > img").attr("src", "images//shape-text.png")
        // 
        $(".floating .fl-top img").attr("src", "images//fl-top.png")
        $(".floating .fl-menu > a > img").attr("src", "images//fl-menu.png")
        $(".floating .fl-close img").attr("src", "images//fl-close.png")
        // 
        $(".life-main .txt .title img").attr("src", "images/experience.png")
        $(".life-main .txt .subt img").attr("src", "images/in my life.png")

    }

    //get the checkbox to a variable
    const checkbox = document.getElementById('checkbox');

    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            // 다크모드
            $("html").attr("data-dark", "true");
            body.classList.add("data-dark")
            localStorage.setItem("dark_mode", checkbox.checked)

            // 다크모드 이미지 적용
            $(".main .lp img").attr("src", "images//dark-lpcover.jpg")
            $(".wd .right .content .player .audio-box .plbtn .btn-play-pause-l img").attr("src", "images//dark-play-pause-left.png")
            $(".wd .right .content .player .audio-box .plbtn .btn-play img").attr("src", "images//dark-play.png")
            $(".wd .right .content .player .audio-box .plbtn .btn-pause img").attr("src", "images//dark-pause.png")
            $(".wd .right .content .player .audio-box .plbtn .btn-play-pause-r img").attr("src", "images//dark-play-pause-right.png")
            $(".ab-main .txt img").attr("src", "images//dark-about-me.png")
            $(".about .about-wrap .img img").attr("src", "images//dark-about-LPrecord.png")
            $(".psb .right .right-wrap > img").attr("src", "images//dark-shape-text.png")
            // 
            $(".floating .fl-top > a >img").attr("src", "images//dark-fl-top.png")
            $(".floating .fl-menu > a > img").attr("src", "images//dark-fl-menu.png")
            $(".floating .fl-close > a > img").attr("src", "images//dark-fl-close.png")
            // 
            $(".life-main .txt .title img").attr("src", "images/dark-experience.png")
            $(".life-main .txt .subt img").attr("src", "images/dark-in my life.png")

        } else {
            // 다크모드 해제
            $("html").attr("data-dark", "false");
            body.classList.remove("data-dark");
            localStorage.setItem("dark_mode", checkbox.checked)

            // 다크모드해제 이미지 적용
            $(".main .lp img").attr("src", "images//LPcover.png")
            $(".wd .right .content .player .audio-box .plbtn .btn-play-pause-l img").attr("src", "images//play-pause-left.png")
            $(".wd .right .content .player .audio-box .plbtn .btn-play img").attr("src", "images//play.png")
            $(".wd .right .content .player .audio-box .plbtn .btn-pause img").attr("src", "images//pause.png")
            $(".wd .right .content .player .audio-box .plbtn .btn-play-pause-r img").attr("src", "images//play-pause-right.png")
            $(".ab-main .txt img").attr("src", "images//about-me.png")
            $(".about .about-wrap .img img").attr("src", "images//about-LPrecord.png")
            $(".psb .right .right-wrap > img").attr("src", "images//shape-text.png")
            // 
            $(".floating .fl-top > a >img").attr("src", "images//fl-top.png")
            $(".floating .fl-menu > a > img").attr("src", "images//fl-menu.png")
            $(".floating .fl-close > a > img").attr("src", "images//fl-close.png")
            // 
            $(".life-main .txt .title img").attr("src", "images/experience.png")
            $(".life-main .txt .subt img").attr("src", "images/in my life.png")
        }
    });









});