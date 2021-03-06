import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, 'I’ll stop wearing black when they make a darker color.', 'Wednesday Addams', 'Zeus', new Date(2019,1,24), 0, 0),
    new Quote(2, 'Healing begins where the wound was made.', 'Alice Walker', 'Zeus', new Date(2019,2,10), 0, 0),
    new Quote(3, 'Everything you can Imagine is real', 'Pablo Picasso', 'Zeus', new Date(2019,1,30), 0, 0),
    new Quote(4, 'Tuendelee ama tusiendelee', 'Nyashinski', 'Zeus', new Date(2019,2,12), 0, 0),
    new Quote(5, 'You can’t separate peace from freedom because no one can be at peace unless he has his freedom.', 'Malcolm X', 'Zeus', new Date(2019,3,22), 0, 0),
    new Quote(6, 'As long as we are not ourselves, we will try to be what other people are.', 'Malidoma Patrice Somé', 'Zeus', new Date(2019,4,23), 0, 0),

  ]

  toogleScribble(index){
    this.quotes[index].showScribble = !this.quotes[index].showScribble;
  }

  mostLikes: number = 0
  bestAuthor: string
  bestQuote: string
  find() {
    this.mostLikes = 0;
    for(var z = 0; z < this.quotes.length; z++) {
      if(this.quotes[z].likes > this.mostLikes){
        this.mostLikes = this.quotes[z].likes;
        this.bestQuote = this.quotes[z].quote;
        this.bestAuthor = this.quotes[z].author;
      }
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  deleteQuote(isComplete,index){
    if (isComplete){
      let toDelete = confirm (`Are you sure you want to delete this quote by ${this.quotes[index].author}`)

      if (toDelete){
        this.quotes.splice(index,1);
      }
    }
  }



  constructor() { }

  ngOnInit() {
  }

}
