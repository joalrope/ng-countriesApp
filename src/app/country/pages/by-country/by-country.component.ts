import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [],
})
export class ByCountryComponent {
  toSearch: string = localStorage.getItem('toSearch') || '';
  hasError: boolean = false;
  hasInternet: boolean = true;
  countries: Country[] = JSON.parse(localStorage.getItem('countries')!) || [];

  constructor(private countryService: CountryService) {}

  searchCountries(toSearch: string) {
    localStorage.setItem('toSearch', toSearch);
    if (toSearch === '') return;
    this.hasError = false;
    this.toSearch = toSearch;

    this.countryService.searchCountries(this.toSearch).subscribe({
      next: (countries) => {
        this.countries = countries;
        localStorage.setItem('countries', JSON.stringify(this.countries));
      },
      error: ({ status }: { status: number }) => {
        this.countries = [];
        console.log(status);
        if (status === 404) {
          this.hasError = true;
          this.hasInternet = true;
        } else if (status === 0) {
          this.hasError = false;
          this.hasInternet = false;
        }
      },
    });
  }

  suggestions(toSearch: string) {
    this.hasError = false;
    this.hasInternet = true;
    //TODO: set suggestions
    this.countries = [];
    localStorage.setItem('countries', JSON.stringify(this.countries));
  }

  clearCountries() {
    this.toSearch = '';
    this.suggestions(this.toSearch);
    localStorage.setItem('toSearch', this.toSearch);
  }
}
