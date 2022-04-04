import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styles: [],
})
export class CountryInfoComponent implements OnInit {
  loading: boolean = true;
  country!: Country;
  constructor(private activatedRoute: ActivatedRoute, private countryService: CountryService) {}

  ngOnInit(): void {
    /*  this.activatedRoute.params.subscribe(({ id }) => {
     this.country = this.countryService.getCountry(id).subscribe((country) => {
        console.log(country);
      });
    }); */

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countryService.getCountry(id)),
        tap(console.log)
      )
      .subscribe((country) => {
        this.country = country;
        this.loading = false;
      });
  }
}
