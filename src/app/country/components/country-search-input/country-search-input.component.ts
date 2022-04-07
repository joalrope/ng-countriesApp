import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-country-search-input',
  templateUrl: './country-search-input.component.html',
  styles: [],
})
export class CountrySearchInputComponent implements OnInit {
  @Input()
  placeholder: string = '';
  @Input()
  toSearch: string = '';
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Output() onResult: EventEmitter<string> = new EventEmitter();
  @Output() onClear: EventEmitter<boolean> = new EventEmitter();

  debouncer: Subject<string> = new Subject();
  //toSearch: string = '';

  constructor() {}

  ngOnInit() {
    this.debouncer.pipe(debounceTime(300)).subscribe((valor) => {
      console.log(valor);
      this.onDebounce.emit(valor);
    });
  }

  searchCountries() {
    this.onResult.emit(this.toSearch);
  }

  keyPressed() {
    this.debouncer.next(this.toSearch);
  }

  clear() {
    this.onClear.emit(true);
    //this.toSearch = '';
    //this.debouncer.next(this.toSearch);
  }
}
