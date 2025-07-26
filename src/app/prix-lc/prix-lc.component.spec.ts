import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrixLcComponent } from './prix-lc.component';

describe('PrixLcComponent', () => {
  let component: PrixLcComponent;
  let fixture: ComponentFixture<PrixLcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrixLcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrixLcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
