import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglementPageComponent } from './reglement-page.component';

describe('ReglementPageComponent', () => {
  let component: ReglementPageComponent;
  let fixture: ComponentFixture<ReglementPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReglementPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReglementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
