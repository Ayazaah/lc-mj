import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMjComponent } from './contact-mj.component';

describe('ContactMjComponent', () => {
  let component: ContactMjComponent;
  let fixture: ComponentFixture<ContactMjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactMjComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactMjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
