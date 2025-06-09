$(function () {
    //헤더 - 국내,해외 버튼
    $(".country-btn>button").on("click", function (e) {
        count = $(this).index();
        console.log(count);
        $(".country-btn>button").eq(count).addClass("active")
            .siblings().removeClass("active");
    })

    //헤더 - 인원수 체크하기
    let personcount = $("#personnel").prop("value");
    console.log(personcount);
    $(".person-count>.plus").on("click", function () {
        personcount = $("#personnel").prop("value");
        personcount++;
        $("#personnel").prop("value", personcount)
    })
    $(".person-count>.minus").on("click", function () {
        personcount = $("#personnel").prop("value");
        if (personcount > 0) {
            personcount--;
            $("#personnel").prop("value", personcount)
        }
    });

    // 날짜선택    
    $("#from").datepicker({
        dateFormat: 'yy-mm-dd' //달력 날짜 형태
        , prevText: "이전" // 이전 버튼 
        , nextText: "다음" // 다음 버튼 
        , showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
        , showMonthAfterYear: true // 월- 년 순서가아닌 년도 - 월 순서
        , changeYear: true //option값 년 선택 가능
        , changeMonth: true //option값  월 선택 가능                
        , showOn: "focus" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시  
        // , buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif" //버튼 이미지 경로
        // , buttonImageOnly: true //버튼 이미지만 깔끔하게 보이게함
        // , buttonText: "~" //버튼 호버 텍스트              
        , yearSuffix: "년" //달력의 년도 부분 뒤 텍스트        
        , monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'] //달력의 월 부분 텍스트
        , monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'] //달력의 월 부분 Tooltip
        , dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'] //달력의 요일 텍스트
        , dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'] //달력의 요일 Tooltip

    });

    //초기값을 오늘 날짜로 설정
    $('#from').datepicker('setDate', 'today'); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)

    $("#to").datepicker({
        dateFormat: 'yy-mm-dd' //달력 날짜 형태
        , prevText: "이전" // 이전 버튼 
        , nextText: "다음" // 다음 버튼 
        , showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
        , showMonthAfterYear: true // 월- 년 순서가아닌 년도 - 월 순서
        , changeYear: true //option값 년 선택 가능
        , changeMonth: true //option값  월 선택 가능                
        , showOn: "focus" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시  
        // , buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif" //버튼 이미지 경로
        // , buttonImageOnly: true //버튼 이미지만 깔끔하게 보이게함
        // , buttonText: "~" //버튼 호버 텍스트              
        , yearSuffix: "년" //달력의 년도 부분 뒤 텍스트
        , monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'] //달력의 월 부분 텍스트
        , monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'] //달력의 월 부분 Tooltip
        , dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'] //달력의 요일 텍스트
        , dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'] //달력의 요일 Tooltip

    });

    //To의 초기값을 내일로 설정
    $('#to').datepicker('setDate', '+1D'); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)

    // ham-btn
    $(".ham-close>a").click(function (h) {
        h.preventDefault();
        $(this).toggleClass("active");
        $(".ham-menu-list").toggle();
    })

    $(".ham-menu>a").click(function (sEvent) {
        sEvent.preventDefault();
    
        // 현재 클릭된 메뉴의 하위 메뉴를 토글
        $(this).siblings('.ham-sub').toggle();
    
        // 현재 메뉴의 이미지 클래스만 토글
        $(this).find("img").toggleClass("active");
    
        // 나머지 형제 메뉴의 하위 메뉴 닫기
        $(this).parent().siblings().find('.ham-sub').hide();
    
        // 나머지 형제 메뉴의 이미지 클래스 초기화
        $(this).parent().siblings().find("img").removeClass("active");
    });

    // 푸터 사이트맵
    $('.service-box').click(function (event) {
        event.preventDefault(); // a 태그의 기본 동작(페이지 이동) 방지
        $('.list-box').toggle(); // list-box의 보임/숨김 상태 전환
        $("img").toggleClass("active");
    });

    let oddEven = 0;
    $(".lo-price>button").click(function (e) {
        $(this).toggleClass("active");
    })  

});
