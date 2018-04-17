var log = console.log.bind(console);

/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var cityValue = getInputValue("aqi-city-input","城市名称");
    if(isEmpty(cityValue))
        return;
    var aqiValue = getInputValue("aqi-value-input","空气质量指数");
    if(isEmpty(aqiValue))
        return;


 
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {

}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
  // do sth.

  renderAqiList();
}

function init() {
    var addBtn = document.getElementById("add-btn");
    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    addBtn.addEventListener("click",function(){
        addBtnHandle();
    });
    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

init();

function getInputValue(id,message){
    // 获取用户输入的城市名称
    var aqiInput = document.getElementById(id);
    // 去除前后空格
    var value = aqiInput.value.trim();
    if(isEmpty(aqiInput.value.trim())) {
        alert(message + "不能为空");
        aqiInput.value="";
        aqiInput.focus();
        return null;
    }  
    
    return value;
}

//判断字符是否为空的方法
function isEmpty(obj){
    if(typeof obj == "undefined" || obj == null || obj == ""){
        return true;
    }else{
        return false;
    }
}
