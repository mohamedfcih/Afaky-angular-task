import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ContactsService } from '../../services/contacts.service';
import { Country } from '../../models/country.model';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-contacts-form-base',
  templateUrl: './contacts-form-base.component.html',
  styleUrls: ['./contacts-form-base.component.scss'],
})

export class ContactsFormBaseComponent implements OnInit {
  countries!: Country[];
  country = new FormControl(null, []);
  city = new FormControl(null, []);
  form!: FormGroup;
  cities!: string[];
  selectedCountry!: any;

  constructor(
    private fb: FormBuilder,
    private contactsService: ContactsService
  ) {}

  ngOnInit(): void {
    this.contactsService.getCountries().subscribe((data) => {
      this.countries = data;
      this.getCities();
      this.setSelectedCountry();
    });

    this.country.valueChanges.subscribe((city) => {
      this.city.reset();
      this.city.disable();
      this.setSelectedCountry();
      if (city) {
        this.getCities();
      }
    });
  }

  setSelectedCountry() {
    if (this.countries) {
      this.selectedCountry = this.countries.find((country: Country) => {
        return country.name === this.country.value;
      });
    }
  }

  getCities() {
    this.contactsService.getCities().subscribe((data) => {
      this.cities = data.find((cities: any) => {
        return cities.code === this.country.value;
      }).cities;
    });
    this.city.enable();
  }

  createForm(contact?: Contact) {
    this.form = this.fb.group({
      name: new FormControl(contact?.name, []),
      phone: new FormControl(contact?.phone, []),
      country: this.country || new FormControl(null, []),
      city: this.city || new FormControl(null, []),
    });
    return this.form;
  }
}
