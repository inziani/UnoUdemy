import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { TaskComponent } from './task/task.component';
import { TaskDisplayComponent } from './task-display/task-display.component';
import { BasicHightlightDirective } from './task-display/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './task-display/better-highlight/better-highlight.directive';
import { UnlessDirective } from './task-display/unless/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerElementComponent,
    TaskComponent,
    TaskDisplayComponent,
    BasicHightlightDirective,
    BetterHighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
