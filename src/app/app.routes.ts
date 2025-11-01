import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { SextaComponent } from './pages/sexta/sexta.component';

export const routes: Routes = [
   {
    path: '',
    component: LayoutComponent,
    children:[
      {
        path: 'sexta',
        component: SextaComponent
      }
    ]
   } 
];
