

  "use strict";

let input = document.getElementById('input');
let output =document.getElementById('output');
let operators = ['+', '-', '*', '/'];
let arr = [];

// Display values on screen
function toScreen(x){

  if(x === "C"){
    input.value ="";
    output.innerHTML ="0";
    arr =[];                           //set array to empty
  }else if ( x ==="+"|| x==="-"|| x==="÷"|| x==="*"){
    if(arr[arr.length-1] === "+"||arr[arr.length-1] === "-"||arr[arr.length-1] === "÷"||arr[arr.length-1] === "*"){                          //if last character is an operator
      arr[arr.length-1] = x;           //take the value of the latest operator to avoid repetition
    }else{
      arr.push(x);
    }
  }else if (x ==="."){
    if (arr[arr.length -1] == "."){   //if last char is . 
      x = "";                         //set x to empty
    }else{
      arr.push(x)
    }
  }else if( x==="+/-"){
    if(arr.length !== 0){
      arr.push((arr[arr.length-1]) *= -1);
    }else{
      x="";
    }
  }else{                              //if x is a number
    arr.push(x);                      //push it to the array
    answer();                         //and evaluate
  }

  input.value = arr.join(''); 
  console.log(input.value);        
}

// Evaluate numbers
function answer(){
  let str = arr.join('');
  let newStr =str.replace(/\÷/g, "/").replace(/\x/g,"*");
  let lastChar = newStr[newStr.length-1];
 
  if(operators.indexOf(lastChar) > -1 && newStr.length >1){     //if last char is operator
    newStr = newStr.replace(/.$/,'');                           //replace with empty
    eval(newStr);                                               //then evaluate
  }else{
    eval(newStr);
  }

  let result = eval(newStr);
  let test = result.toString();
 
if(test.length >= 10){                       //if length is > 7
    output.innerHTML = result.toFixed(4);    //set decimal places to 6
    input.value = result.toFixed(4);
  }else{
    output.innerHTML = result;
    input.value = result;
}
}

// Square input
function power(){
 let x = arr.join('');
 let y = eval(x*x);
 input.value = x +"²";
// input.value = y;
 output.innerHTML = y;
 arr = [];
 arr.push(y);
}

// Square root
function sqRoot(){
  let x = arr.join('');
  let y = Math.sqrt(x);
  let test = y.toString();

  if(test.length >=10){
    output.innerHTML = y.toFixed(4);
    // input.value = x.toFixed(6);
  }else{
    output.innerHTML = y;
    // input.value = x;
  }
  input.value = "√"+ x;
  arr = [];
  arr.push(y);

}

// transform number to percent
function percent(){
  let x = arr.join('');
  x =x/100;
  input.value = x;
  output.innerHTML = x;
  arr = [];
  arr.push(x);
}

// Backspace
function backspace(){
 let x = input.value;
 let num = x.length-1; 
 let newNum = x.substring(0, num);
 input.value = newNum;
 arr = [];
 output.innerHTML ="";
}


// TO DO
// log ERROR when NaN