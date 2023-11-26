import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaDemoComponent } from './textarea-demo.component';

describe('TextareaDemoComponent', () => {
  let component: TextareaDemoComponent;
  let fixture: ComponentFixture<TextareaDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextareaDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextareaDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
