import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSelectsComponent } from './single-selects.component';

describe('SingleSelectsComponent', () => {
  let component: SingleSelectsComponent;
  let fixture: ComponentFixture<SingleSelectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleSelectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleSelectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
