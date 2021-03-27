import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-display',
  templateUrl: './task-display.component.html',
  styleUrls: ['./task-display.component.css']
})
export class TaskDisplayComponent implements OnInit {

  listDisplay = [{taskId: 'taskId', taskDesc: 'taskDesc', taskDetails: 'taskDetails'}];



  constructor() { }

  ngOnInit(): void {
  }

}
