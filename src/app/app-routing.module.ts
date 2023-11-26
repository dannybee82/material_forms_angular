import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialFormDemoComponent } from './components/demo/material-form-demo/material-form-demo.component';
import { MainComponent } from './components/main/main.component';
import { PersonsComponent } from './components/demo/persons/persons.component';
import { AutocompleteInputsComponent } from './components/demo/autocomplete-inputs/autocomplete-inputs.component';
import { NumbersDemoComponent } from './components/demo/numbers-demo/numbers-demo.component';
import { SingleSelectsComponent } from './components/demo/single-selects/single-selects.component';
import { MultipleSelectsComponent } from './components/demo/multiple-selects/multiple-selects.component';
import { TextareaDemoComponent } from './components/demo/textarea-demo/textarea-demo.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'persons', component: PersonsComponent },
  { path: 'autocomplete-demo', component: AutocompleteInputsComponent },
  { path: 'numbers-demo', component: NumbersDemoComponent },
  { path: 'single-select-demo', component: SingleSelectsComponent },
  { path: 'multiple-select-demo', component: MultipleSelectsComponent },
  { path: 'textarea-demo', component: TextareaDemoComponent },
  { path: 'all', component: MaterialFormDemoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
