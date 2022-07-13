import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-timer-watch',
  templateUrl: './timer-watch.component.html',
  styleUrls: ['./timer-watch.component.css']
})
export class TimerWatchComponent {
  title:string=''
  counter:number =1000
  interval:any
  
  time:{houres:number;minute:number;seconds:number} = {houres:0,minute:0,seconds:0}
  
  constructor() { 
    this.title = "Timer Watch";
    
    setTimeout(() => {
      this.createoption(0,23,"houres")
      this.createoption(0,59,"minute")
      this.createoption(0,59,"seconds")
    }, 2000);



  }
  handlecounter(command:string):void
  {
    if(command === "stop") return clearInterval(this.interval)
    if(command === "reset"){
      return this.reset()
    } 
    this.runcounter()
  }
  runcounter()
  {
    this.interval = setInterval(()=>{
      this.settime()
    },this.counter) 
  }

  settime() : void
  {    
    if(this.time.houres == 0 && this.time.minute == 0 && this.time.seconds == 0)
    {
      this.reset()
      return
      
    }
    if(this.time.seconds > 0)
          this.time.seconds--;

          if(this.time.houres == 0 && this.time.minute == 0 && this.time.seconds <= 10){
            document.querySelector(".body")?.classList.replace("text-success","text-danger")            
          }

            if(this.time.seconds == 0)
            {
              console.log("s zero");
              
              
              if(this.time.houres == 0 && this.time.minute == 0 && this.time.seconds == 0){
                // this.time.seconds = 0  
                this.reset()
                this.play()
                return
              }
              this.time.seconds = 59;
              this.time.minute--;
                if(this.time.minute == 0)
                {
                  this.time.minute = 59;
                  this.time.houres--;
                }
            }

  }
  reset()
  {
    clearInterval(this.interval)
    this.time = {houres:0,minute:0,seconds:0}
  }
   createoption(_min:number,_max:number,_element:string)
  {
    let select = document.getElementById(_element)!;
    console.log(select);

    for (let i = _min; i<=_max; i++){
        let option :any = document.createElement('option')!;
        option.value = i;
        option.innerHTML = i;
        select.appendChild(option);
    }
  }
   play() {
    let audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
    audio.play();
  }

}
