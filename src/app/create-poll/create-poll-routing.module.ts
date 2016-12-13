import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreatePollComponent } from './create-poll.component';
import { AuthGuard } from '../guards/auth-guard';

const createRoutes: Routes = [
  { path: 'create', component: CreatePollComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forChild(createRoutes)
  ],
  exports: [
    RouterModule
  ], 
  providers: [
    AuthGuard
  ]
})
export class CreatePollRoutingModule { }
