import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { Task } from './task';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  public counter: number;
  public timer!: ReturnType<typeof setTimeout>;
  public task: Task;
  public taskList = [{ taskId: 0, taskDesc: 'to do list', taskDetails: 'My first Angular app'}];



  constructor() {
    this.counter = 0;
    this.task = new Task (0, '', '');

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

  createTask(taskData:{taskId: number, taskDesc: string, taskDetails: string}){
    this.taskList.push({taskId: taskData.taskId, taskDesc: taskData.taskDesc, taskDetails:taskData.taskDetails})
  }

}
