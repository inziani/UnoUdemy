import { THIS_EXPR, ThrowStmt } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../task/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  task = new Task(0, 'React frontend', 'django back end');
  @Input()taskList =  Array()


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
