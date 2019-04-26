import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, 'Si ni kenyewe kimejificha kwenye kichwa'),
    new Quote(2, 'Zimenishika yo'),
    new Quote(3, 'Everything you can Imagine is real'),
    new Quote(4, 'Tuendelee ama tusiendelee'),
    new Quote(5, 'Kawia ufike'),
    new Quote(6, 'Zubaa zubaa utapata mwana si wako')

  ]

  constructor() { }

  ngOnInit() {
  }

}
