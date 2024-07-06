import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app-routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { LOCALE_ID } from '@angular/core';
import localeNl from '@angular/common/locales/nl'
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeNl);

export const appConfig: ApplicationConfig = {
  providers: [
		provideZoneChangeDetection({ eventCoalescing: true }), 
		provideRouter(routes),
		provideAnimations(),
		{
			provide: LOCALE_ID,
			useValue: 'nl-NL'
		}
  ]
};