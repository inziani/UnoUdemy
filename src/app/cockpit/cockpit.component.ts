import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();;
  // newServerName = '';
  newServerContent = '';
  @ViewChild('newServerContentInput') newServerContentInput!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
 onAddServer(newServerNameInput: HTMLInputElement){
    // this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
    this.serverCreated.emit({serverName: newServerNameInput.value, serverContent: this.newServerContentInput.nativeElement.value });
  }

  onAddBluePrint(newServerNameInput: HTMLInputElement){
    this.bluePrintCreated.emit({serverName: newServerNameInput.value, serverContent: this.newServerContentInput.nativeElement.value  });
  }

}
