import { THIS_EXPR, ThrowStmt } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit, Output , EventEmitter } from '@angular/core';
// import * as EventEmitter from 'node:events';
import { Task } from '../task/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  task = new Task(0, 'React frontend', 'django back end');
  @Input()taskList =  Array()
  // @Output()updateStatus = new EventEmitter<string>();


  constructor() {

  }

  addTask(){
    let taskIdNum = this.taskList.length;
    this.task.taskId = taskIdNum+1;
    this.taskList.push({taskId: this.task.taskId, taskDesc: this.task.taskDesc, taskDetails: this.task.taskDetails});

  }

  ngOnInit(): void {
  }

}
