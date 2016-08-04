/**
 * Created by Vince on 2016/8/3.
 */

//封装网站常用的提示框，自定义，loading

/*
*
* 自定义html层
* */
function layerCustom(html) {
    layer.open({
        type: 1,
        title: false,
        closeBtn: 2,
        shadeClose: true,
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