import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('src/app/components/main/main.component').then((c) => c.MainComponent),
  },
  {
    path: 'persons',
    loadComponent: () => import('src/app/components/demo/persons/persons.component').then((c) => c.PersonsComponent),
  },
  {
    path: 'autocomplete-demo',
    loadComponent: () =>import('src/app/components/demo/autocomplete-inputs/autocomplete-inputs.component').then((c) => c.AutocompleteInputsComponent),
  },
  {
    path: 'numbers-demo',
    loadComponent: () => import('src/app/components/demo/numbers-demo/numbers-demo.component').then((c) => c.NumbersDemoComponent),
  },
  {
    path: 'single-select-demo',
    loadComponent: () =>
      import('src/app/components/demo/single-selects/single-selects.component').then((c) => c.SingleSelectsComponent),
  },
  {
    path: 'multiple-select-demo',
    loadComponent: () => import('src/app/components/demo/multiple-selects/multiple-selects.component').then((c) => c.MultipleSelectsComponent),
  },
  {
    path: 'textarea-demo',
    loadComponent: () => import('src/app/components/demo/textarea-demo/textarea-demo.component').then((c) => c.TextareaDemoComponent),
  },
  {
    path: 'input-dialog-demo',
    loadComponent: () => import('src/app/components/demo/material-input-demo/material-input-demo.component').then((c) => c.MaterialInputDemoComponent),
  },
  {
    path: 'all',
    loadComponent: () => import('src/app/components/demo/material-form-demo/material-form-demo.component').then((c) => c.MaterialFormDemoComponent),
  },
];
