import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ContactsFormBaseComponent } from '../contacts-form-base/contacts-form-base.component';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { moveItemInFormArray } from '../../move-items-in-form-array';
import { ContactsService } from '../../services/contacts.service';
import { Contact } from '../../models/contact.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts-form-container',
  templateUrl: './contacts-form-container.component.html',
  styleUrls: ['./contacts-form-container.component.scss'],
})

export class ContactsFormContainerComponent implements OnInit {
  @ViewChild('cmpContainer', { static: true, read: ViewContainerRef })
  cmpContainer!: ViewContainerRef;
  form!: FormGroup;
  contacts!: Contact[];
  components: ComponentRef<ContactsFormBaseComponent>[] = [];

  constructor(
    private cfr: ComponentFactoryResolver,
    private fb: FormBuilder,
    private contactsService: ContactsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      contacts: this.fb.array([]),
    });
    this.contactsService.getContacts().subscribe((data) => {
      this.contacts = data;
      this.contacts.forEach((contact) => {
        this.addContact(contact);
      });
    });
  }

  addContact(contact?: Contact) {
    const factory = this.cfr.resolveComponentFactory(ContactsFormBaseComponent);
    const component: ComponentRef<ContactsFormBaseComponent> =
      this.cmpContainer.createComponent(factory);
    this.components.push(component);
    (this.form.get('contacts') as FormArray).push(
      component.instance.createForm(contact)
    );
    component.instance.form.get('country')?.setValue(contact?.country);
    component.instance.form.get('city')?.setValue(contact?.city);
  }

  get formControls(): FormArray {
    return this.form.get('contacts') as FormArray;
  }

  drop(event: CdkDragDrop<string[]>) {
    this.cmpContainer.move(
      this.components[event.previousIndex].hostView,
      event.currentIndex
    );
    moveItemInArray(this.components, event.previousIndex, event.currentIndex);
    moveItemInFormArray(
      this.formControls,
      event.previousIndex,
      event.currentIndex
    );
  }

  navigateToContacts() {
    this.contacts = this.form.value.contacts;
    this.contactsService.saveContacts(this.contacts);
    this.router.navigate(['/contacts']);
  }
}
