import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: string[];

  constructor(){
    this.quotes = ["Si ni kenyewe kimejificha kwenye kichwa","Zimenishika yo","Everything you can Imagine is real"];
  }
}
