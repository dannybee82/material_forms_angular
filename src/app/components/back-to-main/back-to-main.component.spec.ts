import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackToMainComponent } from './back-to-main.component';

describe('BackToMainComponent', () => {
  let component: BackToMainComponent;
  let fixture: ComponentFixture<BackToMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackToMainComponent]
    });
    fixture = TestBed.createComponent(BackToMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
