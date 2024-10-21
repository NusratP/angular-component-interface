import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { HousingLocation } from "src/app/interfaces/housing-location";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <!-- <app-housing-location
        [housingLocation]="housingLocationList"
      ></app-housing-location> -->

      <app-housing-location
        *ngFor="let location of housingLocationList"
        [housingLocation]="location"
      ></app-housing-location>
    </section>
  `,
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: "Acme Fresh Start Housing",
      city: "Chicago",
      state: "IL",
      photo: "/assets/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      id: 1,
      name: "A113 Transitional Housing",
      city: "Santa Monica",
      state: "CA",
      photo: "/assets/brandon-griggs-wR11KBaB86U-unsplash.jpg",
      availableUnits: 0,
      wifi: false,
      laundry: true,
    },
    {
      id: 2,
      name: "Warm Beds Housing Support",
      city: "Juneau",
      state: "AK",
      photo: "/assets/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg",
      availableUnits: 1,
      wifi: false,
      laundry: false,
    },
    {
      id: 3,
      name: "Homesteady Housing",
      city: "Chicago",
      state: "IL",
      photo: "/assets/ian-macdonald-W8z6aiwfi1E-unsplash.jpg",
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 4,
      name: "Happy Homes Group",
      city: "Gary",
      state: "IN",
      photo: "/assets/krzysztof-hepner-978RAXoXnH4-unsplash.jpg",
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
  ];
}
