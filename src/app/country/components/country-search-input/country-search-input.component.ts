import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-country-search-input',
  templateUrl: './country-search-input.component.html',
  styles: [],
})
export class CountrySearchInputComponent implements OnInit {
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Output() onResult: EventEmitter<string> = new EventEmitter();
  @Input()
  placeholder: string = '';

  debouncer: Subject<string> = new Subject();
  toSearch: string = '';

  constructor() {}

  ngOnInit() {
    this.debouncer.pipe(debounceTime(300)).subscribe((valor) => {
      this.onDebounce.emit(valor);
    });
  }

  searchCountries() {
    this.onResult.emit(this.toSearch);
  }

  keyPressed() {
    this.debouncer.next(this.toSearch);
  }
}
