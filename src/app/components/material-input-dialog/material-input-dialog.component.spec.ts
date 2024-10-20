import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialInputDialogComponent } from './material-input-dialog.component';

describe('AdminEmailAlertsInvoiceDateDialogComponent', () => {
  let component: MaterialInputDialogComponent;
  let fixture: ComponentFixture<MaterialInputDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialInputDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialInputDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
