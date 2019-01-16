import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DevExtremeModule } from 'devextreme-angular';
import { StepsProgressComponent } from './components/steps-progress/steps-progress.component';
import { ArrowsCssComponent } from './components/arrows-css/arrows-css.component';
import { ProgressNewComponent } from './components/progress-new/progress-new.component';

import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    StepsProgressComponent,
    ArrowsCssComponent,
    ProgressNewComponent
  ],
  imports: [
    BrowserModule,
    DevExtremeModule,
    RoundProgressModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
