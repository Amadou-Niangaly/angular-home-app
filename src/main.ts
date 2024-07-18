import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routeConig from './router';

bootstrapApplication(AppComponent,{
  providers:[
    provideRouter(routeConig)
  ]
})
  .catch(err => console.error(err));
