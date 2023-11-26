import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialFormFieldsComponent } from './material-form-fields.component';

describe('MaterialFormFieldsComponent', () => {
  let component: MaterialFormFieldsComponent;
  let fixture: ComponentFixture<MaterialFormFieldsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialFormFieldsComponent]
    });
    fixture = TestBed.createComponent(MaterialFormFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
