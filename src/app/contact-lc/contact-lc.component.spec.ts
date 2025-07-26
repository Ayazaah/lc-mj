import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactLcComponent } from './contact-lc.component';

describe('ContactLcComponent', () => {
  let component: ContactLcComponent;
  let fixture: ComponentFixture<ContactLcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactLcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactLcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
