import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseLocationComponent } from "../house-location/house-location.component";
import { HousingLocation } from '../house-location/housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HouseLocationComponent],
  template: `
  <section>
    <form>
      <input type="text" placeholder="filtrer par ville" #filter>
      <button type="button" class="primary" (click)="filterResults(filter.value)">Search</button>
    </form>
  </section>
  <section class="results">
    <app-house-location *ngFor="let housingLocation of filteredLocationList" [housingLocation]="housingLocation">
    </app-house-location>
  </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  filteredLocationList:HousingLocation[]=[];
  constructor(private housingService:HousingService){
  this.housingService.getAllHousingLocations().then(( housingLocationList:HousingLocation[])=>{
    this.housingLocationList =housingLocationList;
    this.filteredLocationList =housingLocationList;
  })

  }
  filterResults(text:string){
    if(!text) this.filteredLocationList =this.housingLocationList;
    this.filteredLocationList=this.housingLocationList.filter(
      housingLocation=>housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    ); 
  }
}
