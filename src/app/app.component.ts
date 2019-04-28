import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  quotes = [
    new Quote(1, 'Si ni kenyewe kimejificha kwenye kichwa', 'Zzero Sufuri', new Date(2019,1,24) ),
    new Quote(2, 'Zimenishika yo', 'Zzero Sufuri', new Date(2019,2,10) ),
    new Quote(3, 'Everything you can Imagine is real', 'Pablo Picasso', new Date(2019,1,30) ),
    new Quote(4, 'Tuendelee ama tusiendelee', 'Nyashinski', new Date(2019,2,12) ),
    new Quote(5, 'Kawia ufike', 'Mhenga Mhenguzi', new Date(2019,3,22) ),
    new Quote(6, 'Zubaa zubaa utapata mwana si wako', 'Mhenga Mhenguzi', new Date(2019,4,23) ),

  ]
}
