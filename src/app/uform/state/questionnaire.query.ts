
import { QueryEntity } from '@datorama/akita';
import { QuestionnairesState, QuestionnairesStore } from './questionnaire.store';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class QuestionnaireQuery extends QueryEntity<QuestionnairesState> {
  constructor(protected store: QuestionnairesStore) {
    super(store);
  }
}
