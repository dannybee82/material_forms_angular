import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteInputsComponent } from './autocomplete-inputs.component';

describe('AutocompleteInputsComponent', () => {
  let component: AutocompleteInputsComponent;
  let fixture: ComponentFixture<AutocompleteInputsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutocompleteInputsComponent]
    });
    fixture = TestBed.createComponent(AutocompleteInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
