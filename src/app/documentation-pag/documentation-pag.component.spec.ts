import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationPagComponent } from './documentation-pag.component';

describe('DocumentationPagComponent', () => {
  let component: DocumentationPagComponent;
  let fixture: ComponentFixture<DocumentationPagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentationPagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentationPagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
