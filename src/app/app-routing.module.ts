import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AcqPlanningComponent } from './acq-planning/acq-planning.component';
import { ActionTrackerComponent } from './action-tracker/action-tracker.component';
import { ActiveActionComponent } from './action-tracker/active-action/active-action.component';
import { CreatePrComponent } from './action-tracker/active-action/create-pr/create-pr.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'acq-planning', component: AcqPlanningComponent },
  { path: 'action-tracker', component: ActionTrackerComponent },
  { path: 'active-action/:id', component: ActiveActionComponent },
  { path: 'create-pr', component: CreatePrComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
