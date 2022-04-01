import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [],
})
export class ByCountryComponent {
  toSearch: string = '';
  hasError: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  searchCountry() {
    this.hasError = false;

    console.log(this.toSearch);

    this.countryService.searchCountry(this.toSearch).subscribe({
      next: (countries) => {
        this.countries = countries;
        console.log(countries);
      },
      error: (err: any) => {
        this.hasError = true;

        this.countries = [];
      },
    });
  }

  toSearchChange() {
    this.countries = [];
  }
}
