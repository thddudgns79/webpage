//l1_nav_img_wrap => 이미지 감싸는 div박스
//l1_nav_img =? 이미지 태그
var imgsrcs = [];
imgsrcs.push("https://a0.muscache.com/pictures/373869d1-31bb-4a47-95d9-ccd5e478b715.jpg");
imgsrcs.push("https://a0.muscache.com/pictures/ea71f998-267a-4ffd-9ca8-ee70814dd775.jpg");
imgsrcs.push("https://a0.muscache.com/pictures/483c0cae-5bfe-45b3-b4e4-8697253b2875.jpg");
imgsrcs.push("https://a0.muscache.com/pictures/8565b4ea-91f1-403a-86cb-ba3f676968e3.jpg");
imgsrcs.push("https://a0.muscache.com/pictures/ddab88e4-da9d-4e7c-8af8-165507476572.jpg");
imgsrcs.push("https://a0.muscache.com/pictures/e7b107e1-f59d-4caa-b77c-2f19579dfd58.jpg");
imgsrcs.push("https://a0.muscache.com/pictures/4f1d6994-4898-4b2c-9186-a5f7f59eebf6.jpg");
imgsrcs.push("https://a0.muscache.com/pictures/c54d41c5-c279-442f-9ec3-afbc1c5104cb.jpg");
imgsrcs.push("https://a0.muscache.com/pictures/2f4996be-1e1d-4e34-b966-e5d381b3f438.jpg");
imgsrcs.push("https://a0.muscache.com/pictures/dfe265d9-06b5-48f5-ad2d-0fa6be296069.jpg");
imgsrcs.push("https://a0.muscache.com/pictures/bee64a5a-5246-4bdb-8500-42b0c3e74e87.jpg");
imgsrcs.push("https://a0.muscache.com/pictures/bfc3ca12-f96b-4595-9402-51611f7aa429.jpg");
imgsrcs.push("https://a0.muscache.com/pictures/f30562b6-2382-41a0-bf3e-28bf97fbe68a.jpg");

$(function(){
    //l1 nav

    //페이지 로드 시 농장 선택 default
    var $imgNode = $("<img class='l1_nav_img'>");
    $($imgNode).attr("src", imgsrcs[0]);
    var $imgWrapper = $("<div class='l1_nav_img_wrap'></div>");
    $($imgWrapper).append($imgNode);
    $(".l1_nav").eq(0).children().prepend($imgWrapper);

    $(".l1_nav").click(function(){
        // 텍스트 색깔 바뀜
        $(".l1_nav_name").css("color","rgb(113, 113, 113)");
        $(this).find(".l1_nav_name").css("color", "black");

        //이미지 생김
        $(".l1_nav_img_wrap").remove(); // 일단 모든 아이콘 삭제 초기화
        var idx = $(".l1_nav").index(this); // 눌린 버튼의 인덱스 구하기
        if(idx == 13) return; // 더보기 버튼이면 추가할 이미지 없음 
        
        var $imgNode = $("<img class='l1_nav_img'>");
        $($imgNode).attr("src", imgsrcs[idx]);
        var $imgWrapper = $("<div class='l1_nav_img_wrap'></div>");
        $($imgWrapper).append($imgNode);
        $(this).children().prepend($imgWrapper);

    });

    $("#l1_nav14").click(function(){
        if($("#l1_nav_modal_wrap").css("display") == "none"){
            $("#l1_nav_modal_wrap").show();
        }
        else{
            $("#l1_nav_modal_wrap").hide();
        }
    });


    //l1 language button
    $("#l1_language_button").click(function(){
        $('#m3_modal1').fadeIn();
            $('body').css("overflow", "hidden");
            $('#m3_modal1_wrapper').css("overflow-y", "auto");
            $('.m3_hideOrShow').css('display','block');
            $('.m3_hideOrShow').css({'padding-left':'12px', 'padding-right':'12px'});
            $('.m3_hideOrShow > span > a').css({'text-decoration':'none','color':'black','display':'inline-block','font-size':'14px','font-weight':'600'});
            $('.m3_langBtn').css({'display':'inline-block','padding-left':'10px', 'padding-right':'10px','padding-top':'10px', 'padding-bottom':'10px'});
            $('.m3_langBtn').css({'margin-left':'-10px', 'margin-right':'6px','margin-bottom':'6px', 'margin-top':'6px'});
            $('.m3_currBtn').css({'display':'inline-block','padding-left':'10px', 'padding-right':'10px','padding-top':'10px', 'padding-bottom':'10px'});
            $('.m3_currBtn').css({'margin-bottom':'6px', 'margin-top':'6px'});
    });






    //l1 filter
    $(".l1_filter_modal_moreContent").each(function(index, item){
        $(item).prev().children().each(function(index, item){
            if(index >= 4){
                $(item).hide();
            }
        });
    });

    $(".l1_filter_modal_toggle").hide();

    $(document).click(function(e){
        if($("#l1_filter_modal").is(e.target)){
            $('#l1_filter_modal').css('display','none');
            $('body').css("overflow", "scroll");
        }
    });

    $("#l1_filter_modal_closeIcon").click(function(){
        $('#l1_filter_modal').hide();
        $('body').css("overflow", "scroll");
    });

    $('#l1_header2_filter3_button').click(function(){
        $('#l1_filter_modal').fadeIn();
        $('body').css("overflow", "hidden");
        $('#l1_filter_modal_wrapper').css("overflow-y", "auto");
    });
    
    $('.l1_filter_modal_closeicon').click(function(){
        $('#l1_filter_modal').css('display','none');
        $('body').css("overflow", "scroll");
    });

    $('.l1_filter_modal_plusButton').click(function(){
        var nowNum = $(this).parent().children(".l1_filter_modal_numberText").text();
        $(this).parent().children(".l1_filter_modal_numberText").text(parseInt(nowNum) + 1);
    });

    $('.l1_filter_modal_minusButton').click(function(){
        var nowNum = $(this).parent().children(".l1_filter_modal_numberText").text();
        console.log(nowNum);
        if(nowNum == 0){
            return;
        }
        $(this).parent().children(".l1_filter_modal_numberText").text(parseInt(nowNum) - 1);
    });

    $(".l1_filter_modal_clickArea").click(function(){
        var state = $(this).children("img").attr("src");
        if(state == "./images/button-on-48.png"){
            $(this).children("img").attr("src","./images/button-off-48.png");
        }
        else{
            $(this).children("img").attr("src","./images/button-on-48.png");
        }
    });

    $(".l1_filter_modal_moreContent").click(function(){
        var state = true;

        $(this).prev().children().each(function(index, item){
            if(index == 4){
                if($(item).css("display") == "none"){
                    state = true;
                }
                else{
                    state = false;
                }
            }
        });

        // 접혀 있는 경우
        if(state){
            $(this).prev().children().each(function(index, item){
                $(item).show();
            });
        }

        // 열려 있는 경우
        else{
            $(this).prev().children().each(function(index, item){
                if(index >= 4){
                    $(item).hide();
                }
            });
        }
    });

    $("#l1_filter_modal_uniqueMoreContent").click(function(){
        var state = $(".l1_filter_modal_toggle").css("display");
        if(state == "none"){
            $(".l1_filter_modal_toggle").show();
        }
        else{
            $(".l1_filter_modal_toggle").hide();
        }
    });

    $("#l1_filter_modal_footer_leftButton").click(function(){
        $(".l1_filter_modal_checkboxGroup  input").prop("checked", false);
        $(".l1_filter_modal_numberText").text("0");
        $(".l1_filter_modal_clickArea > img").attr("src","./images/button-off-48.png");
    });
});
