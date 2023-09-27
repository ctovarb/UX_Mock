import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatedComponent } from './created.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [CreatedComponent],
  exports: [CreatedComponent]
})
export class CreatedModule { }
