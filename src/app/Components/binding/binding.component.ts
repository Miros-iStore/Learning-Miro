import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  isHidden: boolean;
  image:{url:string;alt:string;hidden:boolean} = {url:"https://cdn.pixabay.com/photo/2022/07/06/03/41/business-7304257_1280.jpg",alt:"This is iPhone",hidden:false}
  textinput:string = ""
  constructor()
  {
    this.isHidden = false;
  }
  toggle()
  {
    let getimg = document.getElementById("mainimg") as HTMLImageElement
    this.isHidden = !this.isHidden
    if(this.isHidden) getimg.style.display = "none"
    else getimg.style.display = "block"
  }
  ChangeAlt()
  {
    this.image.alt = this.textinput
  }

}
