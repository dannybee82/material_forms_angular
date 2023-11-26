import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialFormDemoComponent } from './material-form-demo.component';

describe('MaterialFormDemoComponent', () => {
  let component: MaterialFormDemoComponent;
  let fixture: ComponentFixture<MaterialFormDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialFormDemoComponent]
    });
    fixture = TestBed.createComponent(MaterialFormDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
