import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
contacts!:[];
displayedColumns: string[] = ['name', 'phone', 'country', 'city'];

  constructor(private contactsService :ContactsService) { }

  ngOnInit(): void {
    this.contacts = JSON.parse(localStorage.getItem('contacts') || '{}')
  }

}
