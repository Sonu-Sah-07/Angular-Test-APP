import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPersonComponent } from '../list-person/list-person.component';
import { AddPersonComponent } from '../add-person/add-person.component';

const routes: Routes = [
  {path:"person-list", component: ListPersonComponent},
  {path:"add-person", component: AddPersonComponent},
  {path:"add-person/:id", component: AddPersonComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
