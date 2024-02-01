import { Routes } from '@angular/router';

export const routes: Routes = [
//Root Routes: AppRoutingModule
//Replace loadChildren: with children: []
  { path: '', loadComponent: () => import('src/app/components/main/main.component').then(m => m.MainComponent) },
  { path: 'persons', loadComponent: () => import('src/app/components/demo/persons/persons.component').then(m => m.PersonsComponent) },
  { path: 'autocomplete-demo', loadComponent: () => import('src/app/components/demo/autocomplete-inputs/autocomplete-inputs.component').then(m => m.AutocompleteInputsComponent) },
  { path: 'numbers-demo', loadComponent: () => import('src/app/components/demo/numbers-demo/numbers-demo.component').then(m => m.NumbersDemoComponent) },
  { path: 'single-select-demo', loadComponent: () => import('src/app/components/demo/single-selects/single-selects.component').then(m => m.SingleSelectsComponent) },
  { path: 'multiple-select-demo', loadComponent: () => import('src/app/components/demo/multiple-selects/multiple-selects.component').then(m => m.MultipleSelectsComponent) },
  { path: 'textarea-demo', loadComponent: () => import('src/app/components/demo/textarea-demo/textarea-demo.component').then(m => m.TextareaDemoComponent) },
  { path: 'all', loadComponent: () => import('src/app/components/demo/material-form-demo/material-form-demo.component').then(m => m.MaterialFormDemoComponent) }

];