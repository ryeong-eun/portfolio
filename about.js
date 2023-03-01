$(document).ready(function () {

    
    // 애니메이션
    AOS.init({
    })

    // 애니메이트 wow
    new WOW({
        animateClass: "animate__animated",
        mobile: false,
    }).init()


    // 프로그레스바
    // 기능을 먼저 선언. 매개변수값(id, per, color, time 등등)이 함수에 들어가서 동작/ skill 이름은 편하는 대로
    function skill(id, per, color){
        let circle = new ProgressBar.Circle(id,{
            strokeWidth: 7,
            // 배경 너비
            trailWidth: 6,
            trailColor: "#414141",
            color: color,
            duration: 1400,
            step: function(state, circle){
                circle.setText(Math.round(circle.value()*100)+"%")
            }
        })
        circle.animate(per)
    }

    // skill("#ps", 0.9, "#130b53");
    // skill("#ai", 0.8, "#8d1717");
    // skill("#html", 0.85, "#f35825");
    // skill("#css", 0.75, "#007bc9 ");
    // skill("#js", 0.6, "#fb9e21");


    let a = false;
    $(window).scroll(function (){
        let pos = $(this).scrollTop()
        console.log(pos)
        if(pos > 1890 && a == false){
            skill("#ps", 0.9, "#45b7ff");
            skill("#ai", 0.8, "#8d1717");
            skill("#html", 0.85, "#f35825");
            skill("#css", 0.75, "#0472b7 ");
            skill("#js", 0.6, "#fb9e21");
            a = true;
        }
    })






    // 플로팅메뉴
    let floating_top = parseInt($(".floating").css("top"))
    // alert(floating_top)
    //  parseInt : 해당 데이터의 값 중 다른 값을 모두 제외하고 오로지 수치만 가지고 오는 속성

    $(window).scroll(function(){
        // 현재 세로길이 만큼 차는 선
        // 스크롤 위치 값
        let pos = $(window).scrollTop()
        let current = (pos / ($(document).outerHeight()-$(window).height()))*100
        // $(document).outerheight() : 보더를 포함한 세로길이값
        // $(window).height() : 현재 전체 세로길이 값
        console.log(current)

        // 따라오는 플로팅 메뉴
        $(".floating").stop().animate({
            top: pos + floating_top
        })
    })


    // 플로팅 top
    $(".fl-top").click(function(){
        $("html, body").stop().animate({
            scrollTop:0
        },500)
    })

    // 메뉴 누르면 네비 나오기
    let prev = -1;

    // 플로팅 메뉴 클릭시 이미지 바뀌기
    let $height = $("#nav li").length;
    const body = document.querySelector('body');
    $(".fl-menu").click(function(e){

        const dark_mode = localStorage.getItem("dark_mode");
        e.preventDefault()
        
        // 다크모드
        if(dark_mode == "true"){
            if($(".fl-menu > a > img").attr("src") == "images/dark-fl-close.png"){
                $("#nav").css("height", "");
                $(".fl-top").stop().animate({
                    bottom: ""
                }, 300)
                $(".fl-menu").find(" > a >  img").attr("src", "images/dark-fl-menu.png");
            }else{
                $("#nav").css("height",$height*38.5+"px");
                $(".fl-top").stop().animate({
                    bottom: $height*40+"px"
                }, 300)
                $(".fl-menu").find(" > a >  img").attr("src", "images/dark-fl-close.png");
            }
        
        }else{
            if($(".fl-menu > a > img").attr("src") == "images/fl-close.png"){
                $("#nav").css("height", "");
                $(".fl-top").stop().animate({
                    bottom: ""
                }, 300)
                $(".fl-menu").find(" > a >  img").attr("src", "images/fl-menu.png");
            }else{
                $("#nav").css("height",$height*38.5+"px");
                $(".fl-top").stop().animate({
                    bottom: $height*40+"px"
                }, 300)
                $(".fl-menu").find(" > a >  img").attr("src", "images/fl-close.png");
            }
        }
    })



    
});