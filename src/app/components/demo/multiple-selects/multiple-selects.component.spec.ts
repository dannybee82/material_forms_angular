import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleSelectsComponent } from './multiple-selects.component';

describe('MultipleSelectsComponent', () => {
  let component: MultipleSelectsComponent;
  let fixture: ComponentFixture<MultipleSelectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultipleSelectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultipleSelectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
