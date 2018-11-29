$(function () {
    //监听学校
    $("#school").on("blur",function (e) {
        var text=$(this).val();
        var add_warning=$(this).parent().parent();
        if(text.length==0){
            remove_warning(this);
            add_warning.append("<td class='warning'>学校不能为空！</td>");
        }else{
            remove_warning(this);
        }
    });
    //监听班级名
    $("#className").on("blur",function (e) {
        var text=$(this).val();
        var add_warning=$(this).parent().parent();
        if(text.length==0){
            remove_warning(this);
            add_warning.append("<td class='warning'>班级名不能为空！</td>");
        }else if(text.length>20 ){
            remove_warning(this);
            add_warning.append("<td class='warning'>限20个字符,请重新输入！</td>");
        }else if(text.indexOf("_")>-1){
            remove_warning(this);
            add_warning.append("<td class='warning'>不支持输入_，请重新输入！</td>");
        }else if(text.indexOf("%")>-1){
            remove_warning(this);
            add_warning.append("<td class='warning'>不支持输入%，请重新输入！</td>");
        }else{
            remove_warning(this);
        }
    })
    //监听下拉框
    $("#xd").on("blur",function (e) {
        var text=$(this).val();
        var add_warning=$(this).parent().parent();
        if(text.length==0){
            remove_warning(this);
            add_warning.append("<td class='warning'>学段不能为空！请选择！</td>");
        }else{
            remove_warning(this);
        }
    });
    $("#nd").on("blur",function (e) {
        var text=$(this).val();
        var add_warning=$(this).parent().parent();
        if(text.length==0){
            remove_warning(this);
            add_warning.append("<td class='warning'>年段不能为空！请选择！</td>");
        }else{
            remove_warning(this);
        }
    });
    //封装移除警告类
    function remove_warning(ele) {
        /*console.log(ele);*/
        $(ele).parent().parent().children().remove(".warning");
    }
    var ind=xd_select();
    nd_select();
    //实现下拉框的内容显示的监听——学段
    function xd_select(){
        var option=$("#xd2");
        var option_items=$(".option")[0].children;
        option.on("click",function (e) {
            $(".option").css("display","inline-block");
            $("#xd2").css("transform", "rotate(180deg)");
        });
        var index_xd;
        $.each(option_items,function (index,ele) {
            /* console.log(option_items);*/
            $(this).on("click",function (e) {
                var name=$(this).text().trim();
                /*console.log(index);*/
                /*console.log($(this).text());*/
                /*var $input=$(".option").parent().find("tr").children().find("td").children().find("");*/
                $("#xd").val(name);
                /* console.log($("#xd"),$("#xd").attr("value"));*/
                $(".option").css("display","none");


               /*console.log($(this).parent().parent().children().find("#td_xd + td"));*/
               var remove_warning=$(this).parent().parent().children().find("#td_xd + td");
                remove_warning.remove();
                $("#xd2").css("transform", "rotate(0deg)");
                $(".option2").empty();
                $("#nd").val("");
                nd_select(index);
            });
        });
        return index_xd;
    }
    //实现下拉框的内容显示的监听——年段
    function nd_select(index) {
        var option=$("#nd2");//监听图标点击
        //根据学段选项，动态创建年级选项
       /* console.log($("#xd").val());*/
        if(index==0){
            for(var i=1;i<=6;i++){
                switch (i) {
                    case 1:
                        var $li = $(".option2").append('<li>&nbsp;&nbsp;一年级</li>');
                        break;
                    case 2:
                        var $li = $(".option2").append('<li>&nbsp;&nbsp;二年级</li>');
                        break;
                    case 3:
                        var $li = $(".option2").append('<li>&nbsp;&nbsp;三年级</li>');
                        break;
                    case 4:
                        var $li = $(".option2").append('<li>&nbsp;&nbsp;四年级</li>');
                        break;
                    case 5:
                        var $li = $(".option2").append('<li>&nbsp;&nbsp;五年级</li>');
                        break;
                    case 6:
                        var $li = $(".option2").append('<li>&nbsp;&nbsp;六年级</li>');
                        break;
                }
            }
        }else if(index==1){
            for(var i=1;i<=3;i++){
                switch (i) {
                    case 1:
                        var $li = $(".option2").append('<li>&nbsp;&nbsp;初一</li>');
                        break;
                    case 2:
                        var $li = $(".option2").append('<li>&nbsp;&nbsp;初二</li>');
                        break;
                    case 3:
                        var $li = $(".option2").append('<li>&nbsp;&nbsp;初三</li>');
                        break;
                }
            }
        }else if(index==2){
            for(var i=1;i<=3;i++){
                switch (i) {
                    case 1:
                        var $li = $(".option2").append('<li>&nbsp;&nbsp;高一</li>');
                        break;
                    case 2:
                        var $li = $(".option2").append('<li>&nbsp;&nbsp;高二</li>');
                        break;
                    case 3:
                        var $li = $(".option2").append('<li>&nbsp;&nbsp;高三</li>');
                        break;
                }
            }
        }else{
            for(var i=1;i<=4;i++){
                switch (i) {
                    case 1:
                        var $li = $(".option2").append('<li>&nbsp;&nbsp;大一</li>');
                        break;
                    case 2:
                        var $li = $(".option2").append('<li>&nbsp;&nbsp;大二</li>');
                        break;
                    case 3:
                        var $li = $(".option2").append('<li>&nbsp;&nbsp;大三</li>');
                        break;
                    case 4:
                        var $li = $(".option2").append('<li>&nbsp;&nbsp;大四</li>');
                        break;
                }
            }
        }
        var option_items=$(".option2")[0].children;//获得选项列表
        option.on("click",function (e) {
            $(".option2").css("display","inline-block");
            $("#nd2").css("transform", "rotate(180deg)");
        });
        $.each(option_items,function (index,ele) {
            /* console.log(option_items);*/
            $(this).on("click",function (e) {
                var name=$(this).text().trim();
                /*console.log($(this).text());*/
                /* var $input=$(".option").parent().find("tr").children().find("td").children().find("input");*/
                $("#nd").val(name);
                /*console.log($("#xd"),$("#xd").attr("value"));*/
                $(".option2").css("display","none");
                $("#nd2").css("transform", "rotate(0deg)");
                var remove_warning=$(this).parent().parent().children().find("#td_nd + td");
                remove_warning.remove();
            });
        });
    }
    var storage;
    var saved_data;
    var update_data = [];//用来累积创建的班级卡片的信息
    function check_hasLocalStorage() {
        if(!window.localStorage){
            return false;
        }else {
            //将创建班级的元素全部存入localStorage中
            storage = window.localStorage;
            saved_data = JSON.parse(storage.getItem('dataClass'));
            if (saved_data) {
                $.each(saved_data,function () {
                    update_data.push(this);//暂时存着之前已创建好的卡片
                });

            }
        }
    }
    //监听保存按钮
    $(".save_button").on("click",function (e) {
        check_finished();
        check_hasLocalStorage();
        saveData();
    })
    //检查所有元素是否填写清楚
    function check_finished() {
        var flag=0;
        /*console.log($('input:radio[name="set"]:checked').val());*/
        if($('input:radio[name="set"]:checked').val()!==undefined){
            flag+=1;
        }
        if($('input:radio[name="type"]:checked').val()!==undefined){
            flag+=1;
        }
        var $Warning=$(".info_table tr").find("td.warning");
        /*console.log($Warning);*/
        if(flag!=2){
            alert("您还没有填写完整信息，请继续填写...");
        }/*else if($Warning.length>0){
            alert("您还没有填写完整信息，请继续填写...");
        }*/else if($("#school").val()===""||
            $("#xd").val()===""||
            $("#nd").val()===""||
            $("#className").val()===""){
            alert("您还没有填写完整信息，请继续填写...");
        }else{
            alert("填写完成");
            $(".save_button").attr("href","main_index.html");
        }
    }
    function saveData() {
            //data为接收的信息数据
            var data={
                'school':$("#school").val()+"",
                'xd':$("#xd").val()+"",
                'nd':$("#nd").val()+"",
                'classname':$("#className").val()+"",
                'type':$("input:radio[name='type']:checked").val()+"",
                'set':$("input:radio[name='set']:checked").val()+""
            }; /* console.log(data);*/
            //接着把目前要创建的卡片信息添加到更新localStorage信息后面
            update_data.push(data);
            var d=JSON.stringify(update_data);
            storage.setItem("dataClass",d);//已将需要创建的班级信息存入localStorage
            /*console.log(storage.getItem("dataClass"));*/
           /* ...接下来就是在check_class页面中读取localStorage中的全部信息，创建卡片并显示*/
    }

});