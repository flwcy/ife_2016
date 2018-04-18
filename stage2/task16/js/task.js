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
    var cityValue = getInputValue("aqi-city-input","city");
    if(isEmpty(cityValue))
        return;
    var aqiValue = getInputValue("aqi-value-input","aqiValue");
    if(isEmpty(aqiValue))
        return;
    
    aqiData[cityValue] = aqiValue;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var aqiTable = document.getElementById("aqi-table");
    // 先清空表格，再重新渲染
    aqiTable.innerHTML = "";
    
    if(isEmptyObject(aqiData))
        return;

    var tr = document.createElement("tr");

    // 渲染表格表头
    var cityTh = renderTableTd("th","城市");
    var aqiValueTh = renderTableTd("th","空气质量");
    var optionTh = renderTableTd("th","操作");

    tr.appendChild(cityTh);
    tr.appendChild(aqiValueTh);
    tr.appendChild(optionTh);
    aqiTable.appendChild(tr);
    for(var key in aqiData) {
        var _tr = document.createElement("tr");
        var cityTd = renderTableTd("td",key);
        var aqiValueTd = renderTableTd("td",aqiData[key]);

        var _button = document.createElement("input");
        _button.type = "button";
        _button.value = "删除";

        var optionTd = renderTableTd("td","");
        optionTd.appendChild(_button);

        _tr.appendChild(cityTd);
        _tr.appendChild(aqiValueTd);
        _tr.appendChild(optionTd);
        aqiTable.appendChild(_tr);
    }
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
function delBtnHandle(e) {
    // do sth.
    var parent = e.parentNode.parentNode;
    delete aqiData[parent.firstChild.innerHTML];
    renderAqiList();
}

function init() {
    var addBtn = document.getElementById("add-btn");
    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    addBtn.addEventListener("click",function(){
        addBtnHandle();
    });
    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
    var aqiTable = document.getElementById("aqi-table");
    aqiTable.addEventListener("click",function(e){
        if(e.target && e.target.type == "button") {
            delBtnHandle(e.target);
        }
    });
}

init();

function getInputValue(id,key){
    
    // 获取用户输入的城市名称
    var aqiInput = document.getElementById(id);
    // 去除前后空格
    var value = aqiInput.value.trim();
    var message = null;
    var result = value;
    if(isEmpty(value)) {
        message = (key == "city") ? "城市名称不能为空" : "空气质量指数不能为空";
        result = null;
    } else if(key == "city" && !regJudge("^[a-zA-Z\u4e00-\u9fa5]+$",value)){
        message = "城市名称必须为中英文字符";
        result = null;
    } else if(key =="aqiValue" && !regJudge("^[0-9]*$",value)){
        message ="空气质量指数必须为数字";
        result = null;
    }
    if(!isEmpty(message)) {
        alert(message);
        aqiInput.value="";
        aqiInput.focus();
    }
    
    return result;
}

function isEmptyObject(obj){
    for(var key in obj) {
        return false;
    }

    return true;
}

//判断字符是否为空的方法
function isEmpty(obj){
    if(typeof obj == "undefined" || obj == null || obj == ""){
        return true;
    }else{
        return false;
    }
}

/**
 * 创建表格的表头/列
 * @param {*} key th/td
 * @param {*} value 文本内容
 */
function renderTableTd(key,value) {
    var th = document.createElement(key);
    var txt = document.createTextNode(value);
    th.appendChild(txt);
    return th;
}

/**
 * 正则判断
 * @param {*} reg 
 * @param {*} value 
 */
function regJudge(reg,value) {
    var regExp = new RegExp(reg);
    if(regExp.test(value))
        return true;
    return false;
}
