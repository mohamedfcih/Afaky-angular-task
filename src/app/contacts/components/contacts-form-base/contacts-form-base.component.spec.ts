import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsFormBaseComponent } from './contacts-form-base.component';

describe('ContactsFormBaseComponent', () => {
  let component: ContactsFormBaseComponent;
  let fixture: ComponentFixture<ContactsFormBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsFormBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsFormBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
