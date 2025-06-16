import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdTirPageComponent } from './sd-tir-page.component';

describe('SdTirPageComponent', () => {
  let component: SdTirPageComponent;
  let fixture: ComponentFixture<SdTirPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SdTirPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SdTirPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
