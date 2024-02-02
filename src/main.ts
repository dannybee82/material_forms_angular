import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { LOCALE_ID } from '@angular/core';
import localeNl from '@angular/common/locales/nl'
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeNl);

bootstrapApplication(AppComponent, {
	providers: [
			provideRouter(routes),
			provideAnimations(),
			{
				provide: LOCALE_ID,
				useValue: 'nl-NL'
			}
	]
})
