/**
 * Created by kyle on 2014/12/1.
 *
 * @param datas $("form").serializeArray();
 * @return jsonData;
 */

function form2json(datas){
    var oo = {};
    var regIsArr = /\[(\d*)\]$/;
    for(var j=0;j<datas.length;j++){
        var data = datas[j];
        var deps = oo;
        var names = data.name.split(".");
        var value = data.value;
        //取出最后的name  等到最后赋值
        var last = names.pop();

        for(var i=0;i<names.length;i++){
            var n = names[i];

            //判断数组对象，取出index
            if(regIsArr.test(n)){
                var idx = RegExp.$1;
                n = n.replace(regIsArr, "");

                if(deps[n] == undefined){
                    deps[n] = [];

                }
                // 默认应该需要idx
                if(idx == ""){
                    idx = deps[n].length;
                }
                if(deps[n][idx] == undefined){
                    deps[n][idx] = {};
                }
                deps = deps[n][idx];
            }else{
                if(!deps[n]){
                    deps[n] = {};
                }
                deps = deps[n];
            }
        }
        //判断末尾字段是否数组；
        if(regIsArr.test(last)){
            last = last.replace(regIsArr, "");
            if(deps[last] == undefined){
                deps[last] = [];
            }
            deps[last].push(value);
        }else{
            deps[last] = value;
        }
    }
    return oo;
}
