import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter, map } from 'rxjs';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contacts!:[];

  constructor(private http: HttpClient) { }
  getContacts(): Observable<any> {
    return this.http
      .get<any>('assets/api-mock/contacts.json').pipe(map((data) => data.contacts))
  }
  getCountries(): Observable<any> {
    return this.http
      .get<any>('assets/api-mock/countries.json').pipe(map((data) => data.countries))
  }
  getCities(): Observable<any> {
    return this.http
      .get<any>('assets/api-mock/cities.json').pipe(map((data) => data.cities))
  }
  saveContacts(contacts?:Contact[]){
  localStorage.setItem('contacts',JSON.stringify(contacts))
}
}

