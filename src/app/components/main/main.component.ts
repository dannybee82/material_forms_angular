import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AllAngularMaterialModules } from 'src/app/all-angular-material.modules';

@Component({
	standalone: true,
	imports: [
		AllAngularMaterialModules,
	],
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(private router: Router) {}

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

  gotoAllPage() : void {
    this.router.navigate(['all']);
  }
   
}