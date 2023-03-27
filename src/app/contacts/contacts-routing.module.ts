import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsFormContainerComponent } from './components/contacts-form-container/contacts-form-container.component';

const routes: Routes = [
  {
    path: '', component: ContactsFormContainerComponent,

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
