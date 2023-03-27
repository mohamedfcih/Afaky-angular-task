import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { ContactsFormBaseComponent } from './components/contacts-form-base/contacts-form-base.component';
import { ContactsFormContainerComponent } from './components/contacts-form-container/contacts-form-container.component';


@NgModule({
  declarations: [
    ContactsListComponent,ContactsFormBaseComponent,
    ContactsFormContainerComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule { }
