import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [],
})
export class ByCapitalComponent {
  toSearch: string = '';
  hasError: boolean = false;
  capitals: Country[] = [];

  constructor(private countryService: CountryService) {}

  searchCapitals(toSearch: string) {
    this.hasError = false;
    this.toSearch = toSearch;

    this.countryService.searchCapital(this.toSearch).subscribe({
      next: (capitals) => {
        this.capitals = capitals;
      },
      error: (err: any) => {
        this.hasError = true;

        this.capitals = [];
      },
    });
  }
}
