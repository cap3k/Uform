import { guid } from '@datorama/akita';

export interface Questionnaire {
  id: string;
  name: string;
  completed: boolean;
};

export function createQuestionnaire(title: string) {
  return {
    id: guid(),
    name,
    completed: false
  } as Questionnaire;
}
