let value;

const number1 = document.getElementById("1");
const number2 = document.getElementById("2");
const result1 = document.getElementById("result-1");
const send1 = document.getElementById("send-1");

const number3 = document.getElementById("3");
const number4 = document.getElementById("4");
const result2 = document.getElementById("result-2");
const send2 = document.getElementById("send-2");

const number5 = document.getElementById("5");
const number6 = document.getElementById("6");
const result3 = document.getElementById("result-3");
const send3 = document.getElementById("send-3");

const number7 = document.getElementById("7");
const number8 = document.getElementById("8");
const result4 = document.getElementById("result-4");
const send4 = document.getElementById("send-4");

const number9 = document.getElementById("9");
const number10 = document.getElementById("10");
const result5 = document.getElementById("result-5");
const send5 = document.getElementById("send-5");

const number11 = document.getElementById("11");
const number12 = document.getElementById("12");
const result6 = document.getElementById("result-6");
const send6 = document.getElementById("send-6");

const number13 = document.getElementById("13");
const number14 = document.getElementById("14");
const result7 = document.getElementById("result-7");
const send7 = document.getElementById("send-7");

const number15 = document.getElementById("15");
const result8 = document.getElementById("result-8");
const send8 = document.getElementById("send-8");

const number16 = document.getElementById("16");
const result9 = document.getElementById("result-9")
const send9 = document.getElementById("send-9");

const number17 = document.getElementById("17");
const result10 = document.getElementById("result-10")
const send10 = document.getElementById("send-10");

const number18 = document.getElementById("18");
const result11 = document.getElementById("result-11")
const send11 = document.getElementById("send-11");

const number19 = document.getElementById("19");
const number20 = document.getElementById("20");
const result12 = document.getElementById("result-12");
const send12 = document.getElementById("send-12");

const clear1 = document.getElementById("clear-1");
const clear2 = document.getElementById("clear-2");
const clear3 = document.getElementById("clear-3");
const clear4 = document.getElementById("clear-4");
const clear5 = document.getElementById("clear-5");
const clear6 = document.getElementById("clear-6");
const clear7 = document.getElementById("clear-7");
const clear8 = document.getElementById("clear-8");
const clear9 = document.getElementById("clear-9");
const clear10 = document.getElementById("clear-10");
const clear11 = document.getElementById("clear-11");
const clear12 = document.getElementById("clear-12");

val = send1.addEventListener("click",x);
val = send2.addEventListener("click",y);
val = send3.addEventListener("click",z);
val = send4.addEventListener("click",v);
val = send5.addEventListener("click",p);
val = send6.addEventListener("click",r);
val = send7.addEventListener("click",m);
val = send8.addEventListener("click",s);
val = send9.addEventListener("click", n);
val = send10.addEventListener("click", t);
val = send11.addEventListener("click", u);
val = send12.addEventListener("click", o);

val = clear1.addEventListener("click", a);
val = clear2.addEventListener("click",b);
val = clear3.addEventListener("click",c);
val = clear4.addEventListener("click", d);
val = clear5.addEventListener("click",e);
val = clear6.addEventListener("click",f);
val = clear7.addEventListener("click",g);
val = clear8.addEventListener("click",h);
val = clear9.addEventListener("click", j);
val = clear10.addEventListener("click", k);
val = clear11.addEventListener("click", l);
val = clear11.addEventListener("click", w);


function Sine(radians, radius) {
    return Math.sin(radians) * radius;
  }

function dtr(degrees) {
    let pi = Math.PI;
    return degrees*pi/180;
}

function a(){

    console.clear(x);

 const rem = document.getElementById("result-1");
 const rem1 = document.getElementById("1");
   const rem2 = document.getElementById("2");

 rem.value = " ";
 rem1.value = " ";
   rem2.value = " ";

}

function b(){

    console.clear(y);

    const rem = document.getElementById("result-2");
    const rem1 = document.getElementById("3");
   const rem2 = document.getElementById("4");

    rem.value = " ";
    rem1.value = " ";
   rem2.value = " ";
}

function c(){

    console.clear(z);

    const rem = document.getElementById("result-3");
    const rem1 = document.getElementById("5");
    const rem2 = document.getElementById("6");

    rem.value = " ";
    rem1.value = " ";
    rem2.value = " ";
}

function d(){

    console.clear(v);

   const rem = document.getElementById("result-4");
   const rem1 = document.getElementById("7");
   const rem2 = document.getElementById("8");

   rem.value = " ";
   rem1.value = " ";
   rem2.value = " ";

}

function e(){

    console.clear(p);

    const rem = document.getElementById("result-5");
    const rem1 = document.getElementById("9");
    const rem2 = document.getElementById("10");

    rem.value = " ";
    rem1.value = " ";
    rem2.value = " ";
}

function f(){

    console.clear(r);

    const rem = document.getElementById("result-6");
    const rem1 = document.getElementById("11");
    const rem2 = document.getElementById("12");

    rem.value = " ";
    rem1.value = " ";
    rem2.value = " ";
}

function g(){

    console.clear(m);

    const rem = document.getElementById("result-7");
    const rem1 = document.getElementById("13");
    const rem2 = document.getElementById("14");

    rem.value = " ";
    rem1.value = " ";
    rem2.value = " ";
}

function h(){

    console.clear(s);

    const rem = document.getElementById("result-8");
    const rem1 = document.getElementById("15");

    rem.value = " ";
    rem1.value = " ";
}

function j(){
    
    console.clear(n);

    const rem = document.getElementById("result-9");
    const rem1 = document.getElementById("16");

    rem.value = " ";
    rem1.value = " ";
}

function k(){
    
    console.clear(t);

    const rem = document.getElementById("result-10");
    const rem1 = document.getElementById("17");

    rem.value = " ";
    rem1.value = " ";
}


function l(){
    
    console.clear(u);

    const rem = document.getElementById("result-11");
    const rem1 = document.getElementById("18");

    rem.value = " ";
    rem1.value = " ";
}

function w(){
    
    console.clear(o);

    const rem = document.getElementById("result-12");
    const rem1 = document.getElementById("19");
    const rem2 = document.getElementById("20");
   

    rem.value = " ";
    rem1.value = " ";
    rem2.value = " ";
    
}

function x(){
   
    
num1 = Number(number1.value);
num2 = Number(number2.value);
res = num1+num2;

document.getElementById("result-1").value = res;
console.log(res);

}

function y(){


 num3 = number3.value;
 num4 = number4.value
 res = num3-num4;

 document.getElementById("result-2").value = res;
 console.log(res);
    
}

function z(){

     num5 = number5.value;
     num6 = number6.value;
     res = num5*num6;

    document.getElementById("result-3").value = res;
    console.log(res);
}

function v(){

    num7 = number7.value;
    num8 = number8.value;
    res = num7/num8;

    document.getElementById("result-4").value = res;
    console.log(res);
}

function p(){
    
    num9 = number9.value;
    num10 = number10.value;

    res = Math.pow(num9, num10);

    document.getElementById("result-5").value = res;
    console.log(res);

}

function r(){

    num11 = number11.value;
    num12 = number12.value;

    res = Math.pow(num11, 1/num12);

    document.getElementById("result-6").value = res;
    console.log(res);
}

function m(){

    num13 = number13.value;
    num14 = number14.value;

    res = num13*(num14/100);

    document.getElementById("result-7").value = res;
    console.log(res);
}

function s(){

    num15 = number15.value;

    res = Math.sin(dtr(num15));

    document.getElementById("result-8").value = res;
    console.log(res);
}

function n() {
    
    num16 = number16.value;

    res = Math.cos(dtr(num16));

    document.getElementById("result-9").value = res;
    console.log(res);
}

function t() {
    
    num17 = number17.value;

    res = Math.tan(dtr(num17));

    document.getElementById("result-10").value = res;
    console.log(res);
}

function u() {
    
    num18 = number18.value;

    res = 1/Math.tan(dtr(num18));

    document.getElementById("result-11").value = res;
    console.log(res);
}

function o(){
    num19 = number19.value;
    num20 = number20.value;

    res = Math.log(num19)/Math.log(num20);

    document.getElementById("result-12").value = res;
    console.log(res);
}