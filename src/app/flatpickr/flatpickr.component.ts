import { Component, forwardRef, AfterViewInit, OnDestroy, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Flatpickr, FlatpickrOptions } from './models';
const flatpickr = require('flatpickr');

@Component({
    selector: 'cco-flatpickr',
    templateUrl: './flatpickr.component.html',
    styleUrls: ['./flatpickr.component.css']
})
export class FlatpickrComponent implements AfterViewInit, OnDestroy {

    @ViewChild('flatpickr')
    flatpickrElement: any;

    @Input()
    options: FlatpickrOptions = {};

    @Input()
    set date(date: string | Date | string[] | Date[]) {
        this.selectedDates = date;
        this.setDate(date);
    }

    @Input()
    placeholder = '';

    @Input()
    disabled = false;

    @Output()
    dateChange = new EventEmitter<Date[]>();

    private flatpickr: Flatpickr;
    private flatpickrDefaultOptions = {
        onChange: (selectedDates: Date[]) => this.onChange(selectedDates),
    };

    private selectedDates;

    constructor() { }

    ngAfterViewInit() {
        this.initializeFlatpickr();
    }

    ngOnDestroy() {
        this.flatpickr.destroy();
    }

    public setDate(date) {
        if (this.flatpickr) {
            this.flatpickr.setDate(date);
        }
    }

    public clear() {
        this.flatpickr.clear();
    }

    public toggle() {
        this.flatpickr.toggle();
    }

    public open() {
        this.flatpickr.open();
    }

    public close() {
        this.flatpickr.close();
    }

    private initializeFlatpickr() {
        let options = Object.assign(this.flatpickrDefaultOptions, this.options);
        this.flatpickr = this.flatpickrElement.nativeElement.flatpickr(options);
    }

    private onChange(selectedDates: Date[]) {
        this.dateChange.emit(selectedDates);
    }
}
