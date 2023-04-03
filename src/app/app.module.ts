import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactsModule } from './contacts/contacts.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./contacts/contacts.module').then((m) => m.ContactsModule),
  },

  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ContactsModule, RouterModule.forRoot(routes), BrowserAnimationsModule],

  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
