import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private _urlBase: string = 'https://restcountries.com/v2';

  constructor(private http: HttpClient) {}

  searchCountries(toSearch: string): Observable<Country[]> {
    const url = `${this._urlBase}/name/${toSearch}`;

    return this.http.get<Country[]>(url);
  }

  searchCapital(toSearch: string): Observable<Country[]> {
    const url = `${this._urlBase}/capital/${toSearch}`;

    return this.http.get<Country[]>(url);
  }

  getCountry(code: string): Observable<Country> {
    const url = `${this._urlBase}/alpha/${code}`;

    return this.http.get<Country>(url);
  }
}
