import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const AppRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'questionnaire',
    loadChildren: () => import('./uform/questionnaire/questionnaires.module').then(m => m.QuestionnairesModule)
  },


];

