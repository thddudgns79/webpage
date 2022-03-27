function createItem(n, p, d, pr, pa){
    return {
        name : n,
        price : p,
        distance : d,
        period : pr,
        path : pa
    }
}

var items = [];
// 짝수 홀수 
for(var i = 0; i < 2; i++){
    items.push([]);
}

// 짝
items[0].push(createItem("우붓, 발리","100,104원 / 박", "5,261km 거리", "10월 9일 ~ 16일", "https://a0.muscache.com/im/pictures/6943ce46-c64f-43b4-824b-5551735befcc.jpg?im_w=720"));
items[0].push(createItem("Jari, 히마찰프라데시 주","139,370원 / 박", "4,533km 거리", "5월 6일 ~ 13일", "https://a0.muscache.com/im/pictures/miso/Hosting-48617245/original/ed9478c6-a3b5-473a-866b-fd4ba2e878fa.jpeg?im_w=720"));
items[0].push(createItem("Kuta Utara, 발리","248,881원 / 박", "5,285km 거리", "4월 1일 ~ 8일", "https://a0.muscache.com/im/pictures/c7dbff68-db8a-4942-900b-a2e28ac0fb3e.jpg?im_w=720"));
items[0].push(createItem("Selat, 발리","279,017원 / 박", "5,245km 거리", "5월 2일 ~ 9일", "https://a0.muscache.com/im/pictures/3ea7819c-1615-485e-aa89-85196813c760.jpg?im_w=720"));
items[0].push(createItem("Kecamatan Ubud, 발리","231,529원 / 박", "5,269km 거리", "4월 1일 ~ 8일", "https://a0.muscache.com/im/pictures/78724213-fd09-4f7e-b6b4-244f5dc2d660.jpg?im_w=720"));
items[0].push(createItem("쑤저우, 장쑤성(Jiangsu)","125,308원 / 박", "908km 거리", "4월 1일 ~ 8일", "https://a0.muscache.com/im/pictures/miso/Hosting-45228737/original/2b507300-d09d-40fe-969e-f1d51f235b4d.jpeg?im_w=720"));
items[0].push(createItem("Payangan, 발리","79,464원 / 박", "5,261km 거리", "6월 24일 ~ 7월 1일", "https://a0.muscache.com/im/pictures/85a9f2db-728a-48ee-b24c-b4a8fe53b237.jpg?im_w=720"));
items[0].push(createItem("Kecamatan Ubud, 발리","24,227원 / 박", "5,263km 거리", "5월 6일 ~ 13일", "https://a0.muscache.com/im/pictures/52f10e98-6c54-43ea-b49b-3399bf5ec76f.jpg?im_w=720"));
items[0].push(createItem("남원읍, 서귀포시, 제주도","278,088원 / 박", "477km 거리", "7월 15일 ~ 22일", "https://a0.muscache.com/im/pictures/27ef3c63-1851-4830-88a6-992f72dd8154.jpg?im_w=720"));
items[0].push(createItem("구좌읍, 제주시, 제주도","71,628원 / 박", "447km 거리", "4월 25일 ~ 5월 2일", "https://a0.muscache.com/im/pictures/157e0cc4-e563-4d1a-925a-8cff35d25e90.jpg?im_w=720"));
items[0].push(createItem("Hwado-myeon,Kanghw...","102,214원 / 박", "5,261km 거리", "10월 9일 ~ 16일", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-50081001/original/dcf462d8-ca87-4a53-af97-26b4657e969b.jpeg?im_w=720"));
items[0].push(createItem("Gadeok-myeon, Cheon...","573,778원 / 박", "122km 거리", "4월 1일 ~ 8일", "https://a0.muscache.com/im/pictures/c3051be6-20fb-4aa7-9089-0e55236f9dd9.jpg?im_w=720"));
items[0].push(createItem("Ocheon-myeon, Borye...","273,805원 / 박", "144km 거리", "6월 6일 ~ 13일", "https://a0.muscache.com/im/pictures/71f144b2-d4f6-454f-8059-2dd5ed00fcfd.jpg?im_w=720"));
items[0].push(createItem("Hwado-myeon,Kanghwa","371,345원 / 박", "53km 거리", "5월 14일 ~ 21일", "https://a0.muscache.com/im/pictures/e52d3f01-43f5-4e31-92f9-ac5d6cb8153e.jpg?im_w=720"));
items[0].push(createItem("Hwayang-myeon, Yeo...","98,277원 / 박", "329km 거리", "4월 1일 ~ 8일", "https://a0.muscache.com/im/pictures/fe137ff5-ab5e-4ee8-8adc-13022161e690.jpg?im_w=720"));
items[0].push(createItem("Muncheok-myeon, Gu...","168,343원 / 박", "270km 거리", "5월 20일 ~ 27일", "https://a0.muscache.com/im/pictures/79ba7026-4232-45f4-b7fc-b785cc744c97.jpg?im_w=720"));
items[0].push(createItem("제주시, 제주특별자치도","274,383원 / 박", "462km 거리", "5월 14일 ~ 21일", "https://a0.muscache.com/im/pictures/miso/Hosting-42611010/original/e3406ad5-a1f3-4a8b-aae1-289946742b71.jpeg?im_w=720"));
items[0].push(createItem("Sang-myeon, Gapyeo...","158,440원 / 박", "37km 거리", "4월 1일 ~ 8일", "https://a0.muscache.com/im/pictures/8ca2855d-ac87-408c-902a-a2f63b21ac2a.jpg?im_w=720"));
items[0].push(createItem("Seorak-myeon, Gapyeo...","138,557원 / 박", "47km 거리", "4월 10일 ~ 17일", "https://a0.muscache.com/im/pictures/64775391-56ed-4d33-bb63-a08d719dbd62.jpg?im_w=720"));
items[0].push(createItem("애월읍, 제주시, 제주도","345,763원 / 박", "460km 거리", "6월 26일 ~ 7월 3일", "https://a0.muscache.com/im/pictures/eda1cb43-dbcb-4b4d-89ad-6d550dc5bd60.jpg?im_w=720"));

// 홀
items[1].push(createItem("남원읍, 서귀포시, 제주도","278,088원 / 박", "477km 거리", "7월 15일 ~ 22일", "https://a0.muscache.com/im/pictures/27ef3c63-1851-4830-88a6-992f72dd8154.jpg?im_w=720"));
items[1].push(createItem("제주시, 제주특별자치도","274,383원 / 박", "462km 거리", "5월 14일 ~ 21일", "https://a0.muscache.com/im/pictures/miso/Hosting-42611010/original/e3406ad5-a1f3-4a8b-aae1-289946742b71.jpeg?im_w=720"));
items[1].push(createItem("Sang-myeon, Gapyeo...","158,440원 / 박", "37km 거리", "4월 1일 ~ 8일", "https://a0.muscache.com/im/pictures/8ca2855d-ac87-408c-902a-a2f63b21ac2a.jpg?im_w=720"));
items[1].push(createItem("Kecamatan Ubud, 발리","231,529원 / 박", "5,269km 거리", "4월 1일 ~ 8일", "https://a0.muscache.com/im/pictures/78724213-fd09-4f7e-b6b4-244f5dc2d660.jpg?im_w=720"));
items[1].push(createItem("Hwayang-myeon, Yeo...","98,277원 / 박", "329km 거리", "4월 1일 ~ 8일", "https://a0.muscache.com/im/pictures/fe137ff5-ab5e-4ee8-8adc-13022161e690.jpg?im_w=720"));
items[1].push(createItem("Muncheok-myeon, Gu...","168,343원 / 박", "270km 거리", "5월 20일 ~ 27일", "https://a0.muscache.com/im/pictures/79ba7026-4232-45f4-b7fc-b785cc744c97.jpg?im_w=720"));
items[1].push(createItem("쑤저우, 장쑤성(Jiangsu)","125,308원 / 박", "908km 거리", "4월 1일 ~ 8일", "https://a0.muscache.com/im/pictures/miso/Hosting-45228737/original/2b507300-d09d-40fe-969e-f1d51f235b4d.jpeg?im_w=720"));
items[1].push(createItem("Payangan, 발리","79,464원 / 박", "5,261km 거리", "6월 24일 ~ 7월 1일", "https://a0.muscache.com/im/pictures/85a9f2db-728a-48ee-b24c-b4a8fe53b237.jpg?im_w=720"));
items[1].push(createItem("우붓, 발리","100,104원 / 박", "5,261km 거리", "10월 9일 ~ 16일", "https://a0.muscache.com/im/pictures/6943ce46-c64f-43b4-824b-5551735befcc.jpg?im_w=720"));
items[1].push(createItem("구좌읍, 제주시, 제주도","71,628원 / 박", "447km 거리", "4월 25일 ~ 5월 2일", "https://a0.muscache.com/im/pictures/157e0cc4-e563-4d1a-925a-8cff35d25e90.jpg?im_w=720"));
items[1].push(createItem("Hwado-myeon,Kanghw...","102,214원 / 박", "5,261km 거리", "10월 9일 ~ 16일", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-50081001/original/dcf462d8-ca87-4a53-af97-26b4657e969b.jpeg?im_w=720"));
items[1].push(createItem("Gadeok-myeon, Cheon...","573,778원 / 박", "122km 거리", "4월 1일 ~ 8일", "https://a0.muscache.com/im/pictures/c3051be6-20fb-4aa7-9089-0e55236f9dd9.jpg?im_w=720"));
items[1].push(createItem("Ocheon-myeon, Borye...","273,805원 / 박", "144km 거리", "6월 6일 ~ 13일", "https://a0.muscache.com/im/pictures/71f144b2-d4f6-454f-8059-2dd5ed00fcfd.jpg?im_w=720"));
items[1].push(createItem("Selat, 발리","279,017원 / 박", "5,245km 거리", "5월 2일 ~ 9일", "https://a0.muscache.com/im/pictures/3ea7819c-1615-485e-aa89-85196813c760.jpg?im_w=720"));
items[1].push(createItem("Kecamatan Ubud, 발리","24,227원 / 박", "5,263km 거리", "5월 6일 ~ 13일", "https://a0.muscache.com/im/pictures/52f10e98-6c54-43ea-b49b-3399bf5ec76f.jpg?im_w=720"));
items[1].push(createItem("Jari, 히마찰프라데시 주","139,370원 / 박", "4,533km 거리", "5월 6일 ~ 13일", "https://a0.muscache.com/im/pictures/miso/Hosting-48617245/original/ed9478c6-a3b5-473a-866b-fd4ba2e878fa.jpeg?im_w=720"));
items[1].push(createItem("Kuta Utara, 발리","248,881원 / 박", "5,285km 거리", "4월 1일 ~ 8일", "https://a0.muscache.com/im/pictures/c7dbff68-db8a-4942-900b-a2e28ac0fb3e.jpg?im_w=720"));
items[1].push(createItem("Seorak-myeon, Gapyeo...","138,557원 / 박", "47km 거리", "4월 10일 ~ 17일", "https://a0.muscache.com/im/pictures/64775391-56ed-4d33-bb63-a08d719dbd62.jpg?im_w=720"));
items[1].push(createItem("애월읍, 제주시, 제주도","345,763원 / 박", "460km 거리", "6월 26일 ~ 7월 3일", "https://a0.muscache.com/im/pictures/eda1cb43-dbcb-4b4d-89ad-6d550dc5bd60.jpg?im_w=720"));
items[1].push(createItem("Hwado-myeon,Kanghwa","371,345원 / 박", "53km 거리", "5월 14일 ~ 21일", "https://a0.muscache.com/im/pictures/e52d3f01-43f5-4e31-92f9-ac5d6cb8153e.jpg?im_w=720"));






$(function(){
    for(var i = 0; i < items[0].length; i++){
        var item = items[0][i];
        var $gridItem = $("<div class='l2_main_grid_item'><div>");

        var $imgContainer = $("<div class='l2_main_imgContainer'></div>");
        var $textContainer1 = $("<div class='l2_main_textContainer1'></div>");
        var $textContainer2 = $("<div class='l2_main_textContainer2'></div>");

        var $imgNode = $("<img class='l2_main_imgNode'>");
        var $imgNode2 = $("<img class='l2_main_imgNode2'>");
        $imgNode.attr("src", item.path);
        $imgNode2.attr("src", "./images/heartUnclick.png");
        

        $($imgContainer).append($imgNode);
        $($imgContainer).append($imgNode2);
        $($textContainer1).append($("<div class='l2_main_nameText'>" + item.name + "</div>"));
        $($textContainer1).append($("<div class='l2_main_priceText'>" + item.price + "</div>"));
        $($textContainer2).append($("<div class='l2_main_distanceText'>" + item.distance + "</div>"));
        $($textContainer2).append($("<div class='l2_main_periodText'>" + item.period + "</div>"));


        $($gridItem).append($imgContainer);
        $($gridItem).append($textContainer1);
        $($gridItem).append($textContainer2);

        $(".l2_main_grid_container").append($gridItem);
    }

    $(".l2_main_imgNode2").click(function(){
        if($(this).attr("src") == "./images/heartUnclick.png"){
            $(this).attr("src", "./images/heartClick.png");
        }
        else{
            $(this).attr("src", "./images/heartUnclick.png");
        }
    });

    $(".l1_nav").click(function(){
        var idx = $(".l1_nav").index(this);
        if(idx == 13) return; // 더보기 버튼

        if(idx % 2 == 0){
            $(".l2_main_grid_container").empty();
            for(var i = 0; i < items[0].length; i++){
                var item = items[0][i];
                var $gridItem = $("<div class='l2_main_grid_item'><div>");

                var $imgContainer = $("<div class='l2_main_imgContainer'></div>");
                var $textContainer1 = $("<div class='l2_main_textContainer1'></div>");
                var $textContainer2 = $("<div class='l2_main_textContainer2'></div>");

                var $imgNode = $("<img class='l2_main_imgNode'>");
                var $imgNode2 = $("<img class='l2_main_imgNode2'>");
                $imgNode.attr("src", item.path);
                $imgNode2.attr("src", "./images/heartUnclick.png");

                $($imgContainer).append($imgNode);
                $($imgContainer).append($imgNode2);
                $($textContainer1).append($("<div class='l2_main_nameText'>" + item.name + "</div>"));
                $($textContainer1).append($("<div class='l2_main_priceText'>" + item.price + "</div>"));
                $($textContainer2).append($("<div class='l2_main_distanceText'>" + item.distance + "</div>"));
                $($textContainer2).append($("<div class='l2_main_periodText'>" + item.period + "</div>"));


                $($gridItem).append($imgContainer);
                $($gridItem).append($textContainer1);
                $($gridItem).append($textContainer2);

                $(".l2_main_grid_container").append($gridItem);
            }
            $(".l2_main_imgNode2").click(function(){
                if($(this).attr("src") == "./images/heartUnclick.png"){
                    $(this).attr("src", "./images/heartClick.png");
                }
                else{
                    $(this).attr("src", "./images/heartUnclick.png");
                }
            });
        }

        else{
            $(".l2_main_grid_container").empty();
            for(var i = 0; i < items[1].length; i++){
                var item = items[1][i];
                var $gridItem = $("<div class='l2_main_grid_item'><div>");

                var $imgContainer = $("<div class='l2_main_imgContainer'></div>");
                var $textContainer1 = $("<div class='l2_main_textContainer1'></div>");
                var $textContainer2 = $("<div class='l2_main_textContainer2'></div>");

                var $imgNode = $("<img class='l2_main_imgNode'>");
                var $imgNode2 = $("<img class='l2_main_imgNode2'>");
                $imgNode.attr("src", item.path);
                $imgNode2.attr("src", "./images/heartUnclick.png");

                $($imgContainer).append($imgNode);
                $($imgContainer).append($imgNode2);
                $($textContainer1).append($("<div class='l2_main_nameText'>" + item.name + "</div>"));
                $($textContainer1).append($("<div class='l2_main_priceText'>" + item.price + "</div>"));
                $($textContainer2).append($("<div class='l2_main_distanceText'>" + item.distance + "</div>"));
                $($textContainer2).append($("<div class='l2_main_periodText'>" + item.period + "</div>"));


                $($gridItem).append($imgContainer);
                $($gridItem).append($textContainer1);
                $($gridItem).append($textContainer2);

                $(".l2_main_grid_container").append($gridItem);
            }
            $(".l2_main_imgNode2").click(function(){
                if($(this).attr("src") == "./images/heartUnclick.png"){
                    $(this).attr("src", "./images/heartClick.png");
                }
                else{
                    $(this).attr("src", "./images/heartUnclick.png");
                }
            });
        }
    });
});



