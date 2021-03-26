import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
// import * as EventEmitter from 'node:events';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverInputContent', { static: true}) serverInputContent: ElementRef;

  constructor(elementRef: ElementRef) {
    this.serverInputContent = elementRef;
   }

  ngOnInit(): void {
  }


  onAddServer(serverInputName: HTMLInputElement){
    this.serverCreated.emit({serverName: serverInputName.value, serverContent: this.serverInputContent.nativeElement.value });
  }
  onAddBluePrint(serverInputName: HTMLInputElement){
  this.bluePrintCreated.emit({ serverName: serverInputName.value, serverContent: this.serverInputContent.nativeElement.value });
  }

}
