import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
	imports: [
		RouterOutlet,
	],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material_forms';
}