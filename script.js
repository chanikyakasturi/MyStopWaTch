//<!-- Code is written by CHANIKYA  -->
//fetching the buttons by their id's
let StartBtn=document.getElementById("start");
let StopBtn=document.getElementById('stop');
let ResetBtn=document.getElementById('reset');
let timerText=document.getElementById('Timer_text');

//addding event listener for each button respectively
StartBtn.addEventListener('click',start);
StopBtn.addEventListener('click',stop);
ResetBtn.addEventListener('click',reset);

//initializing varibles
let milliseconds=0;
let seconds=0;
let minutes=0;
let hours=0;
let check=false;
let IsStart=false;
let eventValue;

//declaring varibles for concatinating
let ms,s,m,h;

//creating start function
function start(){
    if(IsStart===true){
        return
    }
    check=true;
    IsStart=true;
    eventValue=setInterval(()=>{
        milliseconds+=5;
        if(milliseconds===1000){
            milliseconds=0;
            seconds++;
        }
        if(seconds===60){
            seconds=0;
            minutes++;
        }
        if(minutes===60){
            minutes=0;
            hours++;
        }
        if(hours===24){
            reset();
        }

        //for concatinating milliseconds
        if(milliseconds<10){
            ms="00"+milliseconds;
        }
        else if(milliseconds<100){
            ms="0"+milliseconds;
        }
        else{
            ms=milliseconds;
        }
        //for concatinating seconds
        if(seconds<10){
            s="0"+seconds;
        }
        else{
            s=seconds;
        }
        //for concatinating minutes
        if(minutes<10){
            m="0"+minutes;
        }
        else{
            m=minutes;
        }
        //for concatinating hours
        if(hours<10){
            h="0"+hours;
        }
        else{
            h=hours;
        }
        timerText.innerHTML=h+ " : "+m + " : "+s + " : "+ms;
    },5)
}

//creating stop function
function stop() {
    if(check === false) return;
    //to clear the interval
    clearInterval(eventValue);
    StartBtn.innerText = "Resume";
    IsStart= false;
}

//creating reset function
function reset() {
    check = false;
    IsStart = false;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    timerText.innerHTML = "00 : 00 : 00 : 000";
    //to clear the interval
    clearInterval(eventValue);
    StartBtn.innerText = "Start";   
}
