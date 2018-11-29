$(function(){
    //1.设置tab选项卡——切换所有老师/所有学生/所有家长
    var $selected=$(".tab_items").children();
    var $divs=$(".boxs");
    $(".selected").css({'border-left':'0px'});
    //开始监听
    /*console.log($selected,$divs);*/
    var index;
    var $a_search=$("#class_search");
    $.each($selected,function(){
        $(this).on("click",function () {
            /* console.log($(this));
             console.log($($selected).index(this));*/
            index=$($selected).index(this);
            var $others=$(this).siblings();
            $.each($others,function () {//排他
                $(this).removeClass("selected");
            });
            $.each($divs,function () {
                $(this).css("display", "none");
            });
            $(this).addClass("selected");
            $($divs[index]).css("display","block");
            //当点击tab选项卡其他页面时，当前页面还原所有box
            $($divs[index]).find($(".box_tea")).css("display","inline-block");

            /*再对搜索按钮进行监听*/
            function keyword_search2() {
                var $info=$("#quick_search").val();//得到要搜索的值
                var boxs=$($divs[index]).find($(".box_tea>p"));
                $.each(boxs,function () {
                    if($(this).text() === $info){
                        $(this).parent().css("display","inline-block");
                    }else{
                        $(this).parent().css("display","none");
                    }
                });//筛选出查询到的名字
            }
            $("#quick_search").on("keydown",function (e) {
                if(e.keyCode===13){
                    /*console.log("you are press 'Enter'！");*/
                    keyword_search2();
                }else{
                    //什么也不做...
                }
            });
            $a_search.on("click",function () {
                keyword_search2();
            });
        });
    });
    /*2.监听搜索按钮，对输入的信息进行搜索查询*/
    $("#quick_search").on("keydown",function (e) {
        if(e.keyCode===13){
            /*console.log("you are press 'Enter'！");*/
            keyword_search();
        }else{
            //什么也不做...
        }
    });
    $a_search.on("click",function () {//实现按全名查找
        //调用函数，筛选，显示对应的卡片
        keyword_search();
    });
    function keyword_search() {
        var $info=$("#quick_search").val();//得到要搜索的值
        $.each($(".boxs_teachers .box_tea>p"),function () {
            if($(this).text() === $info){
                $(this).parent().css("display","inline-block");
            }else{
                $(this).parent().css("display","none");
            }
        });//筛选出查询到的名字
    }
    getClassMemberList();
    //动态获取班级成员列表
    //判断从主页面传来的要展示内容的信息是什么
    var $bzr;

    function getClassMemberList() {
        $.ajax({
            url:"./source/infoclass.json",
            dataType:"json",
            success:function (data) {
                //遍历获取到的数据，创建该班级的所有信息卡片
                //分成老师，学生，家长三部分
                var $bzr=data[0].bzr;
                var $teaname=data[0].teachers;//三个对象数组，每个元素都是一个单独的对象，包含名字
                var $stuname=data[0].students;
                var $parename=data[0].parentss;
                /*console.log(typeof $teaname,typeof $stuname,typeof $parename);*/
                /*console.log( $teaname, $stuname, $parename);*/
               for(var i=0;i<$teaname.length;i++){
                   //遍历数组，创建多个box
                   var tname='name'+(i+1);
                   /*console.log(name,$teaname[i][name]);*/
                   var tbox=createMemberCard($teaname[i][tname]);
                   $(tbox).css("margin-right","13px");
                   $(".boxs_teachers>.firstline").append(tbox);
               }
                for(var j=0;j<$stuname.length;j++){
                    //遍历数组，创建多个box
                    var sname='name'+(j+1);
                    var sbox=createMemberCard($stuname[j][sname]);
                    $(sbox).css("margin-right","13px");
                    $(".boxs_students>.firstline").append(sbox);
                }
                for(var k=0;k<$parename.length;k++){
                    //遍历数组，创建多个box
                    var pname='name'+(k+1);
                    var pbox=createMemberCard($parename[k][pname]);
                    $(pbox).css("margin-right","13px");
                    $(".boxs_parents>.firstline").append(pbox);
                }
            },
            error:function (e) {
                console.log("错误信息："+e+"");
            }
        });
    }
    function createMemberCard(ele) {
        var $membox=$("<div class=\"box_tea\">\n" +
            "                            <div class=\"photo_tea\"><img src=\"img/18.png\" alt=\"img_chid\"></div>\n" +
            "                            <div class=\"hidden\"></div>\n" +
            "                            <p>"+ele+"</p>\n" +
            "                        </div>");
        return $membox;
    }
});
