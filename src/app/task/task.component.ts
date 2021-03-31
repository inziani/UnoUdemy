import { THIS_EXPR, ThrowStmt } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit, Output , EventEmitter } from '@angular/core';
import { Task } from '../task/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  task = new Task(new Date(), 0, 'React frontend', 'django back end');
  @Input()taskList =  Array()

  // input decorator to read the taskstatus from the task display component
  @Input() taskId: number;
  @Input() taskStatus: string;

  color = '';
  // Output decorator to change the comments to read the value of the status updated and change it to Red, Amber or Green depending on the status picked.
  @Output()updateStatus = new EventEmitter<any>();
  updatedStatus: string;

  // taskStatus = ['Created', 'Work in progress', 'Closed'];


  statusChanged(){
    this.updateStatus.emit({taskId: this.taskId, updatedStatus: this.updatedStatus});

  }


  constructor() {
    this.taskStatus = '';
    this.taskId = 0;
    this.updatedStatus = '';

  }

  addTask(){
    let taskIdNum = this.taskList.length;
    this.task.taskId = taskIdNum+1;
    this.taskList.push(this.task);

  }

  ngOnInit(): void {
  }



}
