import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'created',
}];

@NgModule({
  imports: [RouterModule],
  exports: [RouterModule]
})
export class CreatedRoutingModule { }
