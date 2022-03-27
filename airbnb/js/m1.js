$(".m1_header_right_profile").on("click", function () {
    if ($("#m1_profile_menu").css("display") == "none") {
        $("#m1_profile_menu").css("display", "inline");
    } else {
        $("#m1_profile_menu").css("display", "none");
    }
});

$("#m1_search_btn1").on("click", function (e) {
    if ($(".m1_nav_location").css("display") == "none") {
        $(".m1_nav_location").css("display", "inline");
    }
});

$("#m1_search_btn4").on("click", function (e) {
    if ($(".m1_nav_personnel").css("display") == "none") {
        $(".m1_nav_personnel").css("display", "inline");
    } else {
        $(".m1_nav_personnel").css("display", 'none');
    }
});

$(".m1_186q534").on("click", function(){
    if($(".m1_nav_location").css("display") == "none"){
        $(".m1_nav_location").css("display", "inline");
        console.log("test");
    }
});

$(document).click(function(e){

    if (!$(e.target).is('#m1_search_btn1')&&!$(e.target).is('#location')) {
         $(".m1_nav_location").css("display", "none");
    }
});

// $(document).click(function(e){
//     if(!$('.m1_nav_location').has(e.target).length && $('.m1_nav_location').css('display') == 'inline'){
//         console.log("tst");
//         $('.m1_nav_location').css('display', 'none');
//     }
// });

function count(type) {
    var cntElement1 = document.getElementById("adult");
    var num1 = cntElement1.innerText;
    if (type == 'plus1') {
        num1 = parseInt(num1) + 1;
    } else if (type == 'minus1') {
        num1 = parseInt(num1) - 1;
    }
    var cntElement2 = document.getElementById("child");
    var num2 = cntElement2.innerText;
    if (type == 'plus2') {
        num2 = parseInt(num2) + 1;
    } else if (type == 'minus2') {
        num2 = parseInt(num2) - 1;
    }

    var cntElement3 = document.getElementById("baby");
    var num3 = cntElement3.innerText;
    if (type == 'plus3') {
        num3 = parseInt(num3) + 1;
    } else if (type == 'minus3') {
        num3 = parseInt(num3) - 1;
    }

    var cntElement4 = document.getElementById("animal");
    var num4 = cntElement4.innerText;
    if (type == 'plus4') {
        num4 = parseInt(num4) + 1;
    } else if (type == 'minus4') {
        num4 = parseInt(num4) - 1;
    }

    if(num1 >= 1){
        $('.btn_minus1').removeAttr("disabled");
    }else{
        $('.btn_minus1').attr("disabled", "disabled");
    }
    if(num2 >= 1){
        $('.btn_minus2').removeAttr("disabled");
    }else{
        $('.btn_minus2').attr("disabled", "disabled");
    }
    if(num3 >= 1){
        $('.btn_minus3').removeAttr("disabled");
    }else{
        $('.btn_minus3').attr("disabled", "disabled");
    }
    if(num4 >= 1){
        $('.btn_minus4').removeAttr("disabled");
    }else{
        $('.btn_minus4').attr("disabled", "disabled");
    }

    cntElement4.innerText = num4;

    cntElement3.innerText = num3;

    cntElement2.innerText = num2;

    cntElement1.innerText = num1;
}

//modal 창 관련
{ //modal window class = m1_modal 버튼 m1_sign
$(function(){
    const eleModal = document.querySelector('.m1_modal');

    document.querySelector('.m1_sign').addEventListener('click', openModal);
    document.querySelector('.m2_join_modal_close').addEventListener('click', closeModal);
    document.querySelector('.m1_modal').addEventListener('click', windowModal);
    function openModal(){
        eleModal.style.display = "block";
    }
    function closeModal(){
        eleModal.style.display = "none";
    }
    function windowModal(){
        if(event.target==this){
            eleModal.style.display = "none";
        }
    }
});
}

//날짜 입력 달력
{
$(function() {

    $('#m1_serach_btn2').daterangepicker({
        autoUpdateInput: false,
        locale: {
        cancelLabel: 'Clear'
    }
});

$('#m1_serach_btn3').daterangepicker({
        autoUpdateInput: false,
        locale: {
        cancelLabel: 'Clear'
    }
});

$('#m1_serach_btn2').on('apply.daterangepicker', function(ev, picker) {
$(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
$(".date_input1").text(picker.startDate.format('MM/DD/YYYY'));
$(".date_input2").text(picker.endDate.format('MM/DD/YYYY'));
});

$('#m1_serach_btn2').on('cancel.daterangepicker', function(ev, picker) {
$(this).val('');
});

$('#m1_serach_btn3').on('apply.daterangepicker', function(ev, picker) {
$(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
$(".date_input1").text(picker.startDate.format('MM/DD/YYYY'));
$(".date_input2").text(picker.endDate.format('MM/DD/YYYY'));
});

$('#m1_serach_btn3').on('cancel.daterangepicker', function(ev, picker) {
$(this).val('');
});

});
}

