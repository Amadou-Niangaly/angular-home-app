import {  Routes } from "@angular/router";
import { HomeComponent } from "./app/home/home.component";
import { DetailsComponent } from "./app/details/details.component";

 const routeConig: Routes=[
    {
        path:'',
        component:HomeComponent,
        title:'home page'
    },
    {
        path:'details/:id',
        component:DetailsComponent,
        title:'Details page'
    }
 ];
 export default routeConig;