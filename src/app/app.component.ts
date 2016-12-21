import { Component } from '@angular/core';

@Component({
  selector: 'cco-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'flatpickr works!';
    myDate1;
    myDate2;

    setDate1ToDate2() {
        this.myDate2 = this.myDate1;
    }
}
