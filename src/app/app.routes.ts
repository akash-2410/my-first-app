import { Routes } from '@angular/router';
import { CollectionComponent } from './collections/collections.component';
import { LayoutComponent } from './layout/layout.component';
import { EDatabaseComponent } from './edatabase/edatabase.component';
import { OverdueComponent } from './overdues/overdues.component';
import { HelpDeskComponent } from './help-desk/help-desk.component';

export const routes: Routes = [
    {path:'',component:LayoutComponent},
{
    path:'collection',
    component: CollectionComponent
},
{
    path:'edatabase',
    component:EDatabaseComponent
},
{
    path:'overdues',
    component:OverdueComponent
},
{
    path:'help',
    component:HelpDeskComponent
},
{path:'**',redirectTo:''}
  
];
