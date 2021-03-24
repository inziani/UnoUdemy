import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  public counter: number;
  public timer!: ReturnType<typeof setTimeout>;



  constructor() {
    this.counter = 0;
    // this.timer = 60 ;
  }

  ngOnInit(): void {
  }

  addIng(){
    this.counter +=1
  }

  onStart(){

    this.timer = setInterval(this.addIng, 3000);
    // this.counter +=1
  }

}
