import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialInputDemoComponent } from './material-input-demo.component';

describe('MaterialInputDemoComponent', () => {
  let component: MaterialInputDemoComponent;
  let fixture: ComponentFixture<MaterialInputDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialInputDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialInputDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
