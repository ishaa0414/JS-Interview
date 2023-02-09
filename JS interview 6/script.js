document.getElementById('btn1').addEventListener("click",function(){
    let heading=document.createElement('h1');
    heading.innerHTML="MERN STACK";
    let div=document.getElementById('divQues1');
    div.appendChild(heading);
})
let heading2 = document.getElementsByTagName('h1')[1]
 heading2.style.color="red"
 function clock(){

    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
  if(hour>12){
    hour-=12
  }
  hour = hour < 10 ? "0"+ hour : hour
  minute = minute < 10 ? "0"+ minute : minute
  second = second < 10 ? "0"+ second : second


 document.getElementById('hrs').innerHTML = hour
 document.getElementById('min').innerHTML = minute
 document.getElementById('sec').innerHTML = second

  }
setInterval(clock,1000)
document.getElementById('replace').addEventListener("click",function(){
    document.getElementById('hello').innerHTML="Welcome to PrepBytes";
})
document.getElementById('hide').addEventListener("click",function(){
    document.getElementById('hello2').style.visibility="hidden";
})