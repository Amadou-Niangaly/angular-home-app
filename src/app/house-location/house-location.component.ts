import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from './housing-location';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-house-location',
  standalone: true,
  imports: [CommonModule,RouterModule],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="housingLocation.photo" 
      alt="Exterior photo of {{housingLocation.name}}">
      <h2 class="listing-hidding">{{housingLocation.name}}</h2>
      <p class="listing-location">{{housingLocation.city}},{{housingLocation.state}}</p>
      <a [routerLink]="['/details',housingLocation.id ]">Learn more</a>
    </section>
  `,
  styleUrls: ['./house-location.component.css']
})
export class HouseLocationComponent {
  @Input() housingLocation!:HousingLocation

}
