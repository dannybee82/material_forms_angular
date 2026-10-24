import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
	imports: [
		RouterOutlet,
	],
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `<router-outlet />`
})
export class AppComponent {
  protected readonly title = 'material_forms';
}