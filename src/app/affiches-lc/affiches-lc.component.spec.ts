import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichesLcComponent } from './affiches-lc.component';

describe('AffichesLcComponent', () => {
  let component: AffichesLcComponent;
  let fixture: ComponentFixture<AffichesLcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AffichesLcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichesLcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
