import { Questionnaire } from './questionnaire.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface QuestionnairesState extends EntityState<Questionnaire> { }

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'questionnaires' })
export class QuestionnairesStore extends EntityStore<QuestionnairesState> {
  constructor() {
    super({ filter: 'ALL' });
  }
}
