import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsFormContainerComponent } from './contacts-form-container.component';

describe('ContactsFormContainerComponent', () => {
  let component: ContactsFormContainerComponent;
  let fixture: ComponentFixture<ContactsFormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsFormContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
