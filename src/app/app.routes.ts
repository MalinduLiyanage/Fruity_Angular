import { Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'contact',
        component:ContactComponent
    },
    {
        path:'about',
        component:AboutComponent
    },

];
