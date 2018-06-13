var log = console.log.bind(console);

var DEFAULT_NUM = 60;

var CHINESE = ["壹","贰","叁","肆","伍","陆","柒","捌","玖","拾"];

var aqiData = [
    ["北京", 90],
    ["上海", 50],
    ["福州", 10],
    ["广州", 50],
    ["成都", 90],
    ["西安", 100]
  ];
  
  (function () {
  
    /*
    在注释下方编写代码
    遍历读取aqiData中各个城市的数据
    将空气质量指数大于60的城市显示到aqi-list的列表中
    */
    var $ = function(id){
        return document.querySelector(id);
    }

    // 从大到小排序
    var sort = function(){
        for(var i=0;i<aqiData.length;i++){
            //var startNum = arr[i];
            for(var j=aqiData.length - 1;j>i;j--){
                //var endNum = arr[j];
                if(aqiData[j][1] > aqiData[i][1]){
                    var tmp = aqiData[i];
                    aqiData[i] = aqiData[j];
                    aqiData[j] = tmp;
                    //startNum = aqiData[i][1];
                }
            }
        }

        return aqiData;
    }

    // 数组按条件截取
    var cut_arr = function(sortArr){
        var arr = [];

        for(var i = 0;i<sortArr.length;i++){
            if(sortArr[i][1] > DEFAULT_NUM) {
                arr.push(sortArr[i]);
            }
        }

        return arr;
    }

    var convert = function(num) {
        if(!isNaN(num) && num < CHINESE.length) {
            return CHINESE[num - 1];
        } else {
            log("请输入1~10");
        }
            
    }

    log(convert(1));
  })();
  