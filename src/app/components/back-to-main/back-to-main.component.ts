import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AllAngularMaterialModules } from 'src/app/all-angular-material.modules';

@Component({
	standalone: true,
	imports: [
		AllAngularMaterialModules,
	],
  selector: 'app-back-to-main',
  templateUrl: './back-to-main.component.html',
  styleUrls: ['./back-to-main.component.scss']
})
export class BackToMainComponent {

  constructor(private router: Router) {}

  goBackToMain() : void {
    this.router.navigate(['']);
  }

}