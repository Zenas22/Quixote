import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, 'Si ni kenyewe kimejificha kwenye kichwa', 'Zzero Sufuri', 'Zeus', new Date(2019,1,24), 0, 0),
    new Quote(2, 'Zimenishika yo', 'Zzero Sufuri', 'Zeus', new Date(2019,2,10), 0, 0),
    new Quote(3, 'Everything you can Imagine is real', 'Pablo Picasso', 'Zeus', new Date(2019,1,30), 0, 0),
    new Quote(4, 'Tuendelee ama tusiendelee', 'Nyashinski', 'Zeus', new Date(2019,2,12), 0, 0),
    new Quote(5, 'Kawia ufike', 'Mhenga Mhenguzi', 'Zeus', new Date(2019,3,22), 0, 0),
    new Quote(6, 'Zubaa zubaa utapata mwana si wako', 'Mhenga Mhenguzi', 'Zeus', new Date(2019,4,23), 0, 0),

  ]

  toogleScribble(index){
    this.quotes[index].showScribble = !this.quotes[index].showScribble;
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  deleteQuote(isComplete,index){
    if (isComplete){
      let toDelete = confirm (`Are you sure you want to delete ${this.quotes[index].name}`)

      if (toDelete){
        this.quotes.splice(index,1);
      }
    }
  }



  constructor() { }

  ngOnInit() {
  }

}
