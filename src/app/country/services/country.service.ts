import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  // 'https://restcountries.com/v3.1/name/venezuela'
  private _urlBase: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  searchCountry(toSearch: string): Observable<any> {
    const url = `${this._urlBase}/name/${toSearch}`;

    return this.http.get<any>(url);
  }
}
