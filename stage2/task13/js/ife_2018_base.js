var log = console.log.bind(console);

var first_number = document.querySelector("#first-number");
var second_number = document.querySelector("#second-number");
var result = document.querySelector("#result");

// result.innerHTML += parseFloat(first_number.value) + parseFloat(second_number.value);

var first_value = parseFloat(first_number.value);
var second_value = parseFloat(second_number.value);

// 绑定事件
document.querySelector("#add-btn").addEventListener("click",function(){
    result.innerHTML = first_value + second_value;
});

document.querySelector("#minus-btn").addEventListener("click",function(){
    result.innerHTML = first_value - second_value;
});

document.querySelector("#times-btn").addEventListener("click",function(){
    result.innerHTML =first_value * second_value;
});

document.querySelector("#divide-btn").addEventListener("click",function(){
    result.innerHTML = first_value / second_value;
});