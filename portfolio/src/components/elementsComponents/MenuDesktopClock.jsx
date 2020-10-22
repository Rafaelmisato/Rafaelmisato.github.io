import React from 'react'
import './MenuDesktopClock.css'

export default props =>
<div className="clock" id="clock"></div>

function clock(){
    let data=new Date()
    let hour=data.getHours()
    let min=data.getMinutes()

    if(hour<10){
        hour="0"+hour
    }
    if(min<10){
        min="0"+min
    }

    let hours=hour+":"+min
    let time = document.getElementById("clock")
    time.innerHTML = hours
}
setInterval(clock,1000)