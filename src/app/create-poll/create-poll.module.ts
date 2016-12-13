import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePollComponent } from './create-poll.component';
import { CreatePollRoutingModule } from './create-poll-routing.module'

@NgModule({
  imports: [
    CommonModule, 
    CreatePollRoutingModule
  ],
  declarations: [CreatePollComponent]
})
export class CreatePollModule { }
