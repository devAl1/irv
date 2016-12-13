import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollComponent } from './poll.component';
import { PollRoutingModule } from './poll-routing.module'

@NgModule({
  imports: [
    CommonModule,
    PollRoutingModule
  ],
  declarations: [PollComponent]
})
export class PollModule { }
