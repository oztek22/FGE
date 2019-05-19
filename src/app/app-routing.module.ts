import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AcqPlanningComponent } from './acq-planning/acq-planning.component';
import { ActionTrackerComponent } from './action-tracker/action-tracker.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'acq-planning', component: AcqPlanningComponent },
  { path: 'action-tracker', component: ActionTrackerComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
