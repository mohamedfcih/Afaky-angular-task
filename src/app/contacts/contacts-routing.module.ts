import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsFormContainerComponent } from './components/contacts-form-container/contacts-form-container.component';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';

const routes: Routes = [
  {
    path: '', component: ContactsFormContainerComponent,

  },
  {
    path: 'contacts', component: ContactsListComponent,

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
