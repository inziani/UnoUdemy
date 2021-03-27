import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-display',
  templateUrl: './task-display.component.html',
  styleUrls: ['./task-display.component.css']
})
export class TaskDisplayComponent implements OnInit {

  taskStatus = ['Created', 'Work in progress', 'Closed'];
  selectedStatus = '';

  listDisplay = [{taskId: 'taskId', taskDesc: 'taskDesc', taskDetails: 'taskDetails', taskComments: 'taskComments'}];



  constructor() { }

  ngOnInit(): void {
  }

  changeStatus(event: any){
    console.log(event.target.value);
    this.listDisplay.push(event);



  }

}
