import { Component, OnInit} from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { PersistNgFormPlugin } from '@datorama/akita';
import { QuestionnairesQuery } from '../state/questionnaires.query';
import { QuestionnairesService } from '../questionnaires.service';
import { createQuestionnaire } from '../state/questionnaire.model';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {

  form: FormGroup;
  persistForm: PersistNgFormPlugin;

constructor(private questionnairesQuery: QuestionnairesQuery,
            private storiesService: QuestionnairesService) {}

  ngOnInit() {
    this.form = new FormGroup({ });

    this.persistForm = new PersistNgFormPlugin(this.questionnairesQuery, createQuestionnaire)
                                              .setForm(this.form);
  }

}
