import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AllAngularMaterialModules } from 'src/app/all-angular-material.modules';

@Component({
	imports: [
		AllAngularMaterialModules,
	],
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

	private router = inject(Router);

  gotoPersonsPage() : void {
    this.router.navigate(['persons']);
  }

  gotoAutocompletePage() : void {
    this.router.navigate(['autocomplete-demo']);
  }

  gotoNumbersPage() : void {
    this.router.navigate(['numbers-demo']);
  }

  gotoSingleSelectPage() : void {
    this.router.navigate(['single-select-demo']);
  }

  gotoMultipleSelectPage() : void {
    this.router.navigate(['multiple-select-demo']);
  }

  gotoTextareaPage() : void {
    this.router.navigate(['textarea-demo']);
  }

  gotoInputDialogDemo(): void {
    this.router.navigate(['input-dialog-demo']);
  }

  gotoAllPage() : void {
    this.router.navigate(['all']);
  }
   
}