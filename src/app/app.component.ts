import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'recipe;'
  serverElements = [{ type: 'server', name: 'TestServer', content: 'Just a test'}];

onNavigate(feature: string){
  this.loadedFeature = feature;

}

 onServerAdded(serverData:{serverName: string, serverContent: string}){
    this.serverElements.push({
      type:'Server',
      name: serverData.serverName,
      content: serverData.serverContent});
  }

  onBluePrintAdded(bluePrintData:{serverName: string, serverContent: string}){
    this.serverElements.push({
      type:'Blueprint',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent
    });
  }
}
