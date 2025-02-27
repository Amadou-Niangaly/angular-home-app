import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../house-location/housing-location';
import { FormControl, FormGroup,FormsModule,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  template: `
    <article>
    <img class="listing-photo" [src]="housingLocation?.photo">
    <section class="listing-description">
      <h2 class="listing-heading">{{housingLocation?.name}}</h2>
      <p class="listing-location">{{housingLocation?.city}},{{housingLocation?.state}}</p>
    </section>
    <section class="listing-features">
      <h2 class="section-heading">About this housing location</h2>
      <ul>
        <li>Units available: {{housingLocation?.availableUnits}}</li>
        <li>Does with location have wifi :{{housingLocation?.wifi}}</li>
        <li>Does this location have laundry:{{housingLocation?.laundry}}</li>
      </ul>
      <section class="listing-apply">
        <h2 class="section-heading">Apply now to live here</h2>
        <form [formGroup]="applyForm" (submit)="submitApplication()">
          <label for="first-name" >firstName:</label>
          <input id="first-name" type="text" formControlName="firstName">
          <label for="last-name" >lastName:</label>
          <input id="last-name" type="text" formControlName="lastName">
          <label for="email" >Email:</label>
          <input id="email" type="text" formControlName="email">
          <button type="submit" class="primary">Apply now</button>
        </form>
      </section>
    </section>
   </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  housingLocation:HousingLocation|undefined;
  applyForm =new FormGroup({
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    email:new FormControl('')
  });
  
 constructor(private housingService:HousingService,private route:ActivatedRoute){
  const housingLocationId= Number(this.route.snapshot.params['id']);
 this.housingService.getHousingLocationsById(housingLocationId).then(housingLocation=>{
  this.housingLocation=housingLocation; 
 })

 }  
 submitApplication(){
  this.housingService.submitApplication(
    this.applyForm.value.firstName?? '',
    this.applyForm.value.lastName??'',
    this.applyForm.value.email??''

  );
 }

}
