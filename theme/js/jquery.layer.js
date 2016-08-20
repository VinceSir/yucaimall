/**
 * Created by Vince on 2016/8/3.
 */

//封装网站常用的提示框，自定义，loading

/*
*
* 自定义html层
*
* _area 可以是字符串宽度，高度自动，也可是数组 [宽，高]，
* */
function layerCustom(html,_area) {
    layer.open({
        type: 1,
        title: false,
        closeBtn: 0,
        shadeClose: true,
        area:_area,
        content:html
    });
}

/*
*
* 提示信息层
* */
function layerMsg(txt) {
    layer.msg(txt);
}

/*
*
* 提示层
* */
function layerAlert(txt) {
    layer.alert(txt, {
        skin: 'layerAlert' //样式类名
        ,closeBtn: 0
    })
}

/*
*
* 加载
* time int  等待时长
* */
function layerLoad(time) {
    var index = layer.load(1,{time: time*1000});
}


/*
*
* 带iocn 提示层
*
*  text 提示文本
* typeNum : 1 成功  2 失败  3 疑问  4 锁定  5 遗憾  6 微笑  7 警告
*
* */
function iconMsg(config) {
    var obj = {
        text:'',
        typeNum:'1',
        time:'2000',
        fun:function () {
            // 可选
        }
    }
    $.extend(true,obj,config);

    layer.msg(obj.text, {
        icon: obj.typeNum,
        time: obj.time //   2秒关闭（如果不配置，默认是3秒）
    },function () {
        if(obj.fun!= " " || obj.fun != null ){
            if(typeof obj.fun == 'function'){
                obj.fun();
            }
        }
        return;
    });
}

/*
*
* 询问层
*
*   text： string  询问文本呢
*   okFun: function  确定回调
*   closeFun: function  取消回调，默认关闭 layer
* */
function confirm(obj) {
    var conf = {
        text:'询问层',
        okFun:function () {
            
        },
        closeFun:function () {

        }
    }
    $.extend(true,conf,obj);
    layer.confirm(conf.text, {
        btn: ['确定','取消'] //按钮
    }, function(){
        conf.okFun();
    }, function(){
        conf.closeFun();
    });
}