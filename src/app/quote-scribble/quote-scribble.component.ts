import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote-scribble',
  templateUrl: './quote-scribble.component.html',
  styleUrls: ['./quote-scribble.component.css']
})
export class QuoteScribbleComponent implements OnInit {

  @Input() quote:Quote;
  @Output() isComplete= new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}
