$(function(){
    var pare_box=$(".box");
    getClassList();
    //获取json中的班级列表
    function getClassList() {
        $.ajax({
            url:"./source/classList.json",
            dataType:"json",
            success:function (data) {
                //遍历获取到的数据，创建每个班级地信息卡片
                //test-addclasscard
                /*var $div_box=$(".box")[0];//先取第一个box盒子
                /!*console.log(data[0]);*!/
                var $card=createClassCard(data[0]);
                $div_box.append($card[0]);*/
                var $card0=createClassCard(data[0]);
                $(".box")[0].append($card0[0]);
                for(var i=1;i<pare_box.length;i++){
                    var $div_box=$(".content_2 div.box")[i-1];
                    var $card=createClassCard(data[i]);
                    $div_box.append($card[0]);
                }
            },
            error:function (e) {
                console.log("错误信息："+e+"");
            }
        });
    }
    function createClassCard(element) {
        return $(
            "<div class=\"text\"><span>" + element.grade + "</span><br>" +
            "班级：<span>" + element.class + "</span><br>" +
            "班主任：<span class='bzr'>" + element.teacher + "</span><br>" +
            "学生：<span>" + element.stu_num + "</span></div>");
    }
    var storage;
    if(!window.localStorage){
        return false;
    }else {
        storage=window.localStorage;
        console.log(storage.getItem("dataClass"));
    }
    var data_classCard=JSON.parse(storage.getItem("dataClass"));//得到的是数组，每个元素都是一个完整的对象，包含完整的班级信息
    //遍历数组，创建卡片
    for(var i=0;i<data_classCard.length;i++){
        var item=data_classCard[i];
        /*console.log(item.school,item.xd,item.nd);*/
        //创建卡片
        if(item.type.indexOf("行政班")>-1){
            console.log(item.type.indexOf("行政班"));
            var $card=$("<a class='click_me' href='check_class.html'><div class='box' id='x"+i+"'><div class='box_bg'><img src=\"img/7.png\" alt=\"logo_7\"></div></div><div id=\"tag\">行政班</div></a>");
            $(".content_1>div").append($card);
            var $div_box=$("#x"+i+"");//取到a标签里的div
            var $div=$(
                "<div class='text'><span>"+item.nd+"-2018级</span><br>" +
                "班级：<span>"+item.classname+"</span><br>" +
                "班主任：<span class='bzr'>刘老师</span><br>" +
                "学生：<span>34人</span></div>");
            $div_box.append($div);
            $("#x"+i+"").parent().css("margin-right","5px");
            /*function getteaname() {
                $.ajax({
                    url:"./check_class.html",
                    type:"POST",
                    data:{
                        "bzr":"田小雨"
                    },
                    success:function (data) {
                    }
                });
            }*/
        }
        else{
            console.log(item.type.indexOf("教学班"));
            var $card=$("<a class=\"click_me\" href=\"check_class.html\"><div class=\"box\" id='x"+i+"'><div class=\"box_bg\"><img src=\"img/7.png\" alt=\"logo_7\"></div></div></a>");
            $(".content_2>div").append($card);
            var $div_box=$("#x"+i+"");//取到a标签里的div
            var $div=$(
                "<div class=\"text\"><span>"+item.nd+"-2018级</span><br>" +
                "班级：<span>"+item.classname+"</span><br>" +
                "班主任：<span class='bzr'>刘老师</span><br>" +
                "学生：<span>34人</span></div>");
            $div_box.append($div);
            $("#x"+i+"").parent().css("margin-right","5px");//为了排版工整，具体为什么会差一点不知道。

        }
    }
});