import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllAngularMaterialModules } from './all-angular-material.modules';
import { provideAnimations } from '@angular/platform-browser/animations';

//Components.
import { AppComponent } from './app.component';
import { MaterialFormFieldsComponent } from './components/material-form-fields/material-form-fields.component';
import { MaterialFormDemoComponent } from './components/demo/material-form-demo/material-form-demo.component';
import { MainComponent } from './components/main/main.component';
import { PersonsComponent } from './components/demo/persons/persons.component';
import { BackToMainComponent } from './components/back-to-main/back-to-main.component';
import { AutocompleteInputsComponent } from './components/demo/autocomplete-inputs/autocomplete-inputs.component';
import { NumbersDemoComponent } from './components/demo/numbers-demo/numbers-demo.component';
import { SingleSelectsComponent } from './components/demo/single-selects/single-selects.component';
import { MultipleSelectsComponent } from './components/demo/multiple-selects/multiple-selects.component';
import { TextareaDemoComponent } from './components/demo/textarea-demo/textarea-demo.component';

//Other
import { LOCALE_ID } from '@angular/core';
import localeNl from '@angular/common/locales/nl';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeNl);

@NgModule({
  declarations: [
    AppComponent,
    MaterialFormFieldsComponent,
    MaterialFormDemoComponent,
    MainComponent,
    PersonsComponent,
    BackToMainComponent,
    AutocompleteInputsComponent,
    NumbersDemoComponent,
    SingleSelectsComponent,
    MultipleSelectsComponent,
    TextareaDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AllAngularMaterialModules
  ],
  providers: [
    provideAnimations(),
    { provide: LOCALE_ID, useValue: "nl-NL" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
