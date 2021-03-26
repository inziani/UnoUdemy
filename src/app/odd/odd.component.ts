import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../game-control/task';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  taskIdInput = 'one';
  taskDescInput= 'desc'
  taskDetaialsInput = 'details'
  @Input()counter: number;
  @Input('task')tasks: [{taskId: string, taskDesc: string, taskDetails: string}]
  @Output() taskAdded = new EventEmitter();


  constructor() {
    this.counter = 0
    this.tasks = [{'taskId': 'taskId', 'taskDesc': 'taskDesc', 'taskDetails': 'taskDetails'}]
    this.taskIdInput = ''

  }

  taskAdd(){
    this.taskAdded.emit(this.tasks.push({taskId: this.taskIdInput, taskDesc: this.taskDescInput, taskDetails: this.taskDescInput}));

  }




  ngOnInit(): void {

  }

}
