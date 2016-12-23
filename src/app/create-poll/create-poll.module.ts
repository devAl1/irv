import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePollComponent } from './create-poll.component';
import { CreatePollRoutingModule } from './create-poll-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CreatePollRoutingModule,
    SharedModule
  ],
  declarations: [
    CreatePollComponent
  ]
})
export class CreatePollModule { }
