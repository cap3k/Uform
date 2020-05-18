import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { QuestionnairesStore } from './state/questionnaire.store';
import { Questionnaire } from './state/questionnaire.model';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ProductsService {

  constructor(private productsStore: QuestionnairesStore,
              private http: HttpClient) {}



  save(questionnaire: Questionnaire) {
    this.productsStore.add(questionnaire);
  }

}
