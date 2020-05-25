import {RouterModule, Routes} from '@angular/router';
import { QuestionnaireComponent } from './questionnaire.component';
import { PreambuleComponent } from './1-preambule/preambule.component';
import { InfosComplementairesComponent } from './2-infos-complementaires/infos-complementaires.component';

export const questionnaireRoutes: Routes = [
  {
    path: '', component: QuestionnaireComponent, // settings for LAZY
  },
];
