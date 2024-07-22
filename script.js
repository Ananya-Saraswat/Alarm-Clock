const selectmenu = document.querySelectorAll("select");
const currentTime = document.querySelector("h1");
const setalarmbtn = document.querySelector("button");
const content = document.querySelector(".content");
let alarmTime;
let isAlarmSet=false;
let ringtone=new Audio("https://file-examples.com/storage/fed5266c9966708dcaeaea6/2017/11/file_example_WAV_1MG.wav");
for (let i = 12; i > 0; i--) {
    i = i < 10 ? "0" + i : i;

    let option = `<option value="${i}">${i}</option>`;
    selectmenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 59; i >= 0; i--) {
    i = i < 10 ? "0" + i : i;

    let option = `<option value="${i}">${i}</option>`;
    selectmenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 59; i >= 0; i--) {
    i = i < 10 ? "0" + i : i;

    let option = `<option value="${i}">${i}</option>`;
    selectmenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value="${ampm}">${ampm}</option>`;
    selectmenu[3].firstElementChild.insertAdjacentHTML("afterend", option);
}
setInterval(() => {
    //getting hours , mins ,secs
    let date = new Date(),
        h = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds(),
        ampm = "AM";
    if (h >= 12) {
        h = h - 12;
        ampm = "PM";
    }
    //if hour value is 0 set this value to 12
    h = h == 0 ? h = 12 : h;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    currentTime.innerText = `${h}:${m}:${s} ${ampm}`;
    if(alarmTime==`${h}:${m}:${s} ${ampm}`){
        ringtone.play();
        ringtone.loop=true;

    }
    

}, 1000);
function setAlarm() {
    if(isAlarmSet){
        alarmTime="";
        ringtone.pause();
        content.classList.remove("disable");
        setalarmbtn.innerText="Set Alarm";
        return isAlarmSet=false;
    }
    let time = `${selectmenu[0].value}:${selectmenu[1].value}:${selectmenu[2].value} ${selectmenu[3].value}`;

    if (time.includes("Hour") || time.includes("AM/PM")) {
        return alert("please enter a valid time to set Alarm");
    }
    
    
    isAlarmSet=true;
    alarmTime=time;
    content.classList.add("disable");
    //console.log(time);
    setalarmbtn.innerText="Clear Alarm";
    
}
setalarmbtn.addEventListener("click", setAlarm);
