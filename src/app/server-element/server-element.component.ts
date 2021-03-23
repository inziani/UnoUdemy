import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement')element: {type: string, name: string, content: string};

  constructor() {
    this.element = {'type':'type', 'name':'name','content': 'content', }

   }

  ngOnInit(): void {
  }

}
