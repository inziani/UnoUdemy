import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-display',
  templateUrl: './task-display.component.html',
  styleUrls: ['./task-display.component.css']
})
export class TaskDisplayComponent implements OnInit {
  color = ''

  taskStatus = ['Created', 'Work in progress', 'Closed'];
  selectedStatus = '';

  listDisplay = [{date: 'date', taskId: 'taskId', taskDesc: 'taskDesc', taskDetails: 'taskDetails', taskComments: 'taskComments'}];



  constructor() { }

  ngOnInit(): void {
  }

   ngOnChanges(){

    //  if (this.taskStatus === 'Created'){
    //    this.color = 'red';
    //  }
    //  else if ( this.taskStatus === 'Work in progress'){
    //    this.color = 'amber';
    //  }
    //  else {
    //    this.color = 'green';
    //  }
  }

  changeStatus(event: any){
    console.log(event.target.value);
    // this.listDisplay[1].taskComments = this.selectedStatus;

  }

}
