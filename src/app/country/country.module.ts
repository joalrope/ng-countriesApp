import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { CountryInfoComponent } from './pages/country-info/country-info.component';
import { CountriesTableComponent } from './components/countries-table/countries-table.component';
import { CountrySearchInputComponent } from './components/country-search-input/country-search-input.component';

@NgModule({
  declarations: [
    ByCapitalComponent, //
    ByCountryComponent,
    ByRegionComponent,
    CountryInfoComponent,
    CountriesTableComponent,
    CountrySearchInputComponent,
  ],
  exports: [
    ByCapitalComponent, //
    ByCountryComponent,
    ByRegionComponent,
    CountryInfoComponent,
    CountriesTableComponent,
  ],
  imports: [
    CommonModule, //
    FormsModule,
    RouterModule,
  ],
})
export class CountryModule {}
