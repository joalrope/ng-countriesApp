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

  searchCountries(toSearch: string) {
    this.hasError = false;
    this.toSearch = toSearch;

    this.countryService.searchCountries(this.toSearch).subscribe({
      next: (countries) => {
        this.countries = countries;
      },
      error: (err: any) => {
        this.hasError = true;

        this.countries = [];
      },
    });
  }

  suggestions(toSearch: string) {
    this.hasError = false;
    //TODO: set suggestions
  }
}
