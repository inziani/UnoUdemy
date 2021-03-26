import { Time } from '@angular/common';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

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
  public taskList = [{ taskId: '1', taskDesc: 'to do list', taskDetails: 'Angular Frontend'},
{ taskId: '2', taskDesc: 'database', taskDetails: 'django backend'}];



  constructor() {
    this.counter = 0;
    this.task = new Task ('', '', '');

  }

  ngOnInit(): void {

  }

  addIng(){
    this.counter +=1;

  }

  displayList(){
    return this.taskList

  }

  // createTask(taskData:{taskId: number, taskDesc: string, taskDetails: string}){
  //   this.taskList.push({taskId: taskData.taskId, taskDesc: taskData.taskDesc, taskDetails:taskData.taskDetails})
  // }

  // createTask(InputTask: HTMLInputElement){
  //   this.taskList.push({taskId: InputTask.value, taskDesc: InputTask.value, taskDetails:InputTask.value})
  // }

  onClick(){
     console.log('hey I am  clicked in child');
  }

}
