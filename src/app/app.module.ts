import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionnaireComponent } from './uform/questionnaire/questionnaire.component';
import { PreambuleComponent } from './uform/questionnaire/1-preambule/preambule/preambule.component';
import { InfosComplementairesComponent } from './uform/questionnaire/1-preambule/infos-complementaires/infos-complementaires.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionnaireComponent,
    PreambuleComponent,
    InfosComplementairesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
