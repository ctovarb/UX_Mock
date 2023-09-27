import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'home',
}];

@NgModule({
  imports: [RouterModule],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
