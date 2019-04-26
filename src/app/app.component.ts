import { Component } from '@angular/core';
import { Quote } from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [
    new Quote(1,'Si ni kenyewe kimejificha kwenye kichwa'),
    new Quote(2,'Zimenishika yo'),
    new Quote(3,'Everything you can Imagine is real'),

  ]
}
