import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'form',
}];

@NgModule({
  imports: [RouterModule],
  exports: [RouterModule]
})
export class FormRoutingModule { }
