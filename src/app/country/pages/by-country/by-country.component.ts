import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [],
})
export class ByCountryComponent {
  toSearch: string = '';
  hasError: boolean = false;

  constructor(private countryService: CountryService) {}

  searchCountry() {
    this.hasError = false;
    console.log(this.toSearch);
    this.countryService.searchCountry(this.toSearch).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        this.hasError = true;
        console.error(err.status);
      }
    );
  }
}
