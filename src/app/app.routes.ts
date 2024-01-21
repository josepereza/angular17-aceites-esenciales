import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';

export const routes: Routes = [
    {
        path:'',redirectTo:'header', pathMatch:'full'
    },
    {
path:'header', component:HeaderComponent
    },
 {
    path:'home', component:HomeComponent, 
 },

    
];
