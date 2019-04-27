import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, 'Si ni kenyewe kimejificha kwenye kichwa', 'Zzero Sufuri', new Date(2019,01,24)),
    new Quote(2, 'Zimenishika yo', 'Zzero Sufuri', new Date(2019,02,10)),
    new Quote(3, 'Everything you can Imagine is real', 'Pablo Picasso', new Date(2019,01,30)),
    new Quote(4, 'Tuendelee ama tusiendelee', 'Nyashinski', new Date(2019,02,12)),
    new Quote(5, 'Kawia ufike', 'Mhenga Mhenguzi', new Date(2019,03,22)),
    new Quote(6, 'Zubaa zubaa utapata mwana si wako', 'Mhenga Mhenguzi', new Date(2019,04,23)),

  ]

  completeQuote(isComplete,index){
    if (isComplete){
      this.quotes.splice(index,1);
    }
  }

  toogleScribble(index){
    this.quotes[index].showScribble = !this.quotes[index].showScribble;
  }

  constructor() { }

  ngOnInit() {
  }

}
