import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValuesPipe } from './pipes/values.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ValuesPipe],
  exports: [ValuesPipe]
})
export class SharedModule { }
