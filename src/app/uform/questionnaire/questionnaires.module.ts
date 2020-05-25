import {NgModule} from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import {RouterModule} from '@angular/router';
import { PreambuleComponent } from './1-preambule/preambule.component';
import { InfosComplementairesComponent } from './2-infos-complementaires/infos-complementaires.component';
import { QuestionnaireComponent } from './questionnaire.component';
import { questionnaireRoutes } from './questionnaire.routes';




@NgModule({
  imports: [SharedModule, RouterModule.forChild(questionnaireRoutes)],
  declarations: [PreambuleComponent, InfosComplementairesComponent, QuestionnaireComponent],
  providers: [],
})
export class QuestionnairesModule {}
