import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationsMjComponent } from './creations-mj.component';

describe('CreationsMjComponent', () => {
  let component: CreationsMjComponent;
  let fixture: ComponentFixture<CreationsMjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreationsMjComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationsMjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
