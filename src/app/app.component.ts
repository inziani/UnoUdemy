import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'unoUdemy';
  serverElements = [{type: 'server', name: 'TestServer', content: 'Just a test'}];
}
