$(document).ready(function () {

    // 애니메이트 wow
    new WOW({
        animateClass: "animate__animated",
        mobile: false,
    }).init()
    
    // 애니메이션
    AOS.init({
    })

    




    // 오디오 플레이어
    const $btn_play = $(".wd .right .content .player .audio-box .plbtn .btn-play")
    const $btn_pause = $(".wd .right .content .player .audio-box .plbtn .btn-pause")

    let audioTimer;

    $btn_play.click(function(){
        togglePlay($(this))
    })

    $btn_pause.click(function(){
        togglePlay($(this))
    })

    // 리스트 클릭시 해당 작업물 보이기
    const $work_content = $(".wd .right .content .content-wrap")
    const $work_nav = $(".wd .right .list ul li");
    var player = document.getElementById('bgm-audio-player');
    
    $work_content.eq(0).show()
    $work_nav.eq(0).addClass("on")
    
    $work_nav.click(function(e){
        e.preventDefault()
        let i = $(this).index();
        $work_nav.removeClass("on").eq(i).addClass("on")
        $work_content.hide().eq(i).show()
        // 오디오
        stopAudioTimer();
        togglePlay($(".audio-control-btn.btn-pause"));
        $(".play-time.start").text('00:00');
        $(".play-time.end").text('00:00');
        $(".play-progress-bar").width(0);
        // obj.prev().show();
        //     obj.hide();

        
    })
    



    function audioPlayerInit(){
        // 공통사항 
        // : 타이머중지, 재생버튼으로 초기화, 볼륨버튼 초기화, 재생시간 초기화
        stopAudioTimer();
        togglePlay($(".audio-control-btn.btn-pause"));
        $(".play-time.start").text('00:00');
        $(".play-time.end").text('00:00');
        $(".play-progress-bar").width(0);
    }

    let progress_val = 0;


    function timer(){
        var progressBar = $(".play-progress-bar");
        progress_val = 0;	// 재생 progress bar 값
       var playtime = 0;		// 재생 시간
        
        player.play();
        $(".play-time.end").text(setTimeFormat(player.duration))
        // audio 태그에서 현재 재생시간을 가져온다.
        currentTime = Math.round(player.currentTime);
        // 00:00의 형식으로 표기하기위해 포맷변경
        playtime = setTimeFormat(currentTime);
    
        
    
    // 가져온 현재 재생시간을 progress bar에 표기하기위해 currentTime가공
    // 재생 완료를 100으로 잡고 현재 재생시간을 계산
    // 소수점 첫번째 자리까지 계산
    let maxTime = player.duration
    progress_val = (currentTime/maxTime)*100;
    progress_val = progress_val.toFixed(1);
    $(".play-time.start").text(playtime);
    progressBar.css('width', progress_val+"%");
    }

    audioPlayerInit();
    function togglePlay(obj) {
        if(obj.hasClass('btn-play')){ 
            // 재생 -> 일시정지
            obj.hide();
            obj.next().show();
            startAudioTimer()
        } else if(obj.hasClass('btn-pause')){
            obj.prev().show();
            obj.hide();
            stopAudioTimer()
        }
    }


    //     오디오 재생시 인터벌 시작
//    : 재생 로딩바 시작
//    : 재생시간 포멧 변경 시작 */
function startAudioTimer(){
    //플레이어가 재생중일때 실시간재생 시간을 초단위로 출력
 

    audioTimer = setInterval(timer, 1000);
}

function stopAudioTimer(){ 
    clearInterval(audioTimer); 
    $(".play-progress-bar").css('width', progress_val+"%"); 
    player.pause()
}

function setTimeFormat(sec_time){
    var sec_num = parseInt(sec_time);
    var minutes = Math.floor(sec_num / 60);
    var seconds = sec_num - (minutes * 60);

    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}

    return minutes + ':' + seconds;
}


let btn_count = 0;
const $btn_next = $(".wd .right .content .player .audio-box .plbtn .audio-control-btn.btn-play-pause-r")
const $btn_prev = $(".wd .right .content .player .audio-box .plbtn .audio-control-btn.btn-play-pause-l")
$btn_next.click(function(){
    btn_count++;
    if(btn_count > $work_nav.length-1){
        btn_count = 0;
    }

    $work_nav.removeClass("on").eq(btn_count).addClass("on")
        $work_content.hide().eq(btn_count).show()
        // 오디오
        stopAudioTimer();
        togglePlay($(".audio-control-btn.btn-pause"));
        $(".play-time.start").text('00:00');
        $(".play-time.end").text('00:00');
        $(".play-progress-bar").width(0);
    
})

$btn_prev.click(function(){
    btn_count--;
    if(btn_count < 0){
        btn_count = $work_nav.length - 1;
    }
    $work_nav.removeClass("on").eq(btn_count).addClass("on")
        $work_content.hide().eq(btn_count).show()
        // 오디오
        stopAudioTimer();
        togglePlay($(".audio-control-btn.btn-pause"));
        $(".play-time.start").text('00:00');
        $(".play-time.end").text('00:00');
        $(".play-progress-bar").width(0);
})





    // 모달창
    const $modal = $(".wd .right .content .content-wrap .desc .img") 
    const work_img = [
        "../images/dyson detail page.jpg",
        "../images/kakao event page.jpg",
        "../images/bamboo package.jpg",
        "../images/misorea logo.jpg"
    ]

    $modal.click(function(e){
        e.preventDefault();
        let i = $modal.index(this)

        $(".window").fadeIn()
        $(".window-content").show();
        $(".window-content img").attr("src", work_img[i])
        // 모달창 열었을 때 밖의 스크롤 삭제 
        $("html, body").css("overflow", "hidden")
    })

    $(".window-content i, .window").click(function(){
        $(".window").fadeOut()
        $(".window-content").scrollTop(0).hide();
        $("html, body").css("overflow", "visible")
    })

    let close = parseInt($(".window-content i").css("top"));

    $(".window-content").scroll(function(){
        let pos = $(".window-content").scrollTop();
        $(".window-content i").css("top", close+pos+"px")
        // 최초 닫기 버튼의 위치가 20px(탑값) 모달창이 스크롤 되면 해당 값 + 20을 더해주면 해당 위치에 고정되는 원리 
    })



});