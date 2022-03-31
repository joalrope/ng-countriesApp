import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { CountryInfoComponent } from './pages/country-info/country-info.component';

@NgModule({
  declarations: [
    ByCapitalComponent, //
    ByCountryComponent,
    ByRegionComponent,
    CountryInfoComponent,
  ],
  exports: [
    ByCapitalComponent, //
    ByCountryComponent,
    ByRegionComponent,
    CountryInfoComponent,
  ],
  imports: [
    CommonModule, //
  ],
})
export class CountryModule {}
