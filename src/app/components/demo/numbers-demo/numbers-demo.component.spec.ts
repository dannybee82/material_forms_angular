import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersDemoComponent } from './numbers-demo.component';

describe('NumbersDemoComponent', () => {
  let component: NumbersDemoComponent;
  let fixture: ComponentFixture<NumbersDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumbersDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NumbersDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
