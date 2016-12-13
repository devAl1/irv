import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PollComponent } from './poll.component';

const pollRoutes: Routes = [
  { path: 'poll', component: PollComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(pollRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PollRoutingModule { }
