import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PpaPageComponent } from './ppa-page.component';

describe('PpaPageComponent', () => {
  let component: PpaPageComponent;
  let fixture: ComponentFixture<PpaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PpaPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PpaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
