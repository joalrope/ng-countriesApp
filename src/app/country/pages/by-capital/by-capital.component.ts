import { Component, Input } from '@angular/core';
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
  capitals: Country[] = JSON.parse(localStorage.getItem('capitals')!) || [];

  constructor(private countryService: CountryService) {}

  searchCapitals(toSearch: string) {
    console.log('toSrarch:', toSearch);
    this.hasError = false;
    this.toSearch = toSearch;

    this.countryService.searchCapital(this.toSearch).subscribe({
      next: (capitals) => {
        this.capitals = capitals;
        localStorage.setItem('capitals', JSON.stringify(this.capitals));
      },
      error: (resp: any) => {
        console.log(resp);
        console.log(this.toSearch);
        this.hasError = true;
        this.capitals = [];
        localStorage.setItem('capitals', JSON.stringify(this.capitals));
      },
    });
  }
}
