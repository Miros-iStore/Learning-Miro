import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  title:string=''
  counter:number =0
  interval:any
  constructor() { 
    this.title = "Page Counter";
    this.runcounter()
  }

  handlecounter(command:string):void
  {
    if(command === "stop") return clearInterval(this.interval)
    if(command === "reset"){
      this.counter=0
      return clearInterval(this.interval)
    } 
    this.runcounter()
  }
  runcounter()
  {
    this.interval = setInterval(()=>{
      this.counter++
    },1000)  }

    





  ngOnInit(): void {
  }

}
