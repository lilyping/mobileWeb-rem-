/**
 * Created by liping.liang on 2018/4/19.
 */

var vm=new Vue({
    el:"#demo2",
    data:{
        name: '张三',
        num:'',
        userAll:'',
        user:''
    },
    props:{

    },
    computed:{

    },
    components:{

    },
    mounted:function () {

    },
    methods: {


    }

});


var vm3=new Vue({
    el:"#demo3",
    data:{
        user:''
    },
    props:{

    },
    computed:{

    },
    components:{

    },
    mounted:function () {

    },
    methods: {


    }

});

//demo2
$(function () {
    $.ajax({
        type: 'get',
        url: 'data/demo2.json',
        dataType: "json",
        async: true,
        success: function (data) {
            if (data.message == "succ") {
                console.log(data);
                vm.userAll=data.productTab;
                vm.num=data.num;
            } else {
                // alert("");
            }
        },
        error: function (data) {
            alert(JSON.stringify(data));
        }
    });


});

//demo3
$(function () {
    $.ajax({
        type: 'get',
        url: 'data/demo2.json',
        dataType: "json",
        async: true,
        success: function (data) {
            if (data.message == "succ") {
                console.log(data);
                vm3.user=data.user;
            } else {
                // alert("");
            }
        },
        error: function (data) {
            alert(JSON.stringify(data));
        }
    });


});







//demo5  $text==''||$text!=$num||$text!=$email
$(function () {
    // var $text=$('#text').attr('placeholder');
    var $pattern=$('#text').attr('pattern');
    var value=$('#text').val();
    console.log($pattern);
    console.log(value);
    console.log(value.match($pattern));
   $('#text').focus(function () {
      $(this).attr('pattern','');
   });
    $('#text').blur(function () {
        // if(value.match($pattern)){
        //     $('.InputNum').append('<strong style="color:green;">输入正确</strong>');
        //     $('#text').css('border','1px solid green');
        // }
        // else{
        //     $('.InputNum').append('<strong style="color:red;">输入不正确</strong>');
        //     $('#text').css('border','1px solid red');
        // }

        // var reg = /^[0-9a-z][a-z0-9\._-]{1,}@[a-z0-9-]{1,}[a-z0-9]\.[a-z\.]{1,}[a-z]$/
        // var reg2 =/^1\d{10}$|^(0\d{2,3}-?|\(0\d{2,3}\))?[1-9]\d{4,7}(-\d{1,8})?$/
        // var reg3=/^([\u4e00-\u9fa5]+|([a-z]+\s?)+)$/

        var reg=new RegExp("^[\u4e00-\u9fa5],{0,}$");
        var reg2=new RegExp("^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$");
        var reg3=new RegExp("^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$");

        if(reg.test(value)){
            $('.InputNum').append('<strong style="color:green;">输入正确</strong>');
            $('#text').css('border','1px solid green');
        }
        else if(reg2.test(value)){
            $('.InputNum').append('<strong style="color:green;">输入正确</strong>');
            $('#text').css('border','1px solid green');
        }
        else if(reg3.test(value)){
            $('.InputNum').append('<strong style="color:green;">输入正确</strong>');
            $('#text').css('border','1px solid green');
        }
        else{
            alert("你输入的字符是数字或者字母")
        }
    });
});


























