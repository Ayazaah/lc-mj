import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosLcComponent } from './photos-lc.component';

describe('PhotosLcComponent', () => {
  let component: PhotosLcComponent;
  let fixture: ComponentFixture<PhotosLcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotosLcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotosLcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
