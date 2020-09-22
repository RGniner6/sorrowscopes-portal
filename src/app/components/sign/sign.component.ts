import { Component, OnInit, Input } from '@angular/core';
import {Horoscope} from "../../models/Horoscope";

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {

  @Input() sign: Horoscope;
  sorrowscope: String;
  constructor() { }

  ngOnInit(): void {
    console.log(this.sign);
    this.sorrowscope = 'Gluten-free tofu listicle, art party jianbing tumeric helvetica fixie adaptogen direct trade' +
      ' lumbersexual af mlkshk hoodie hashtag. Ugh leggings waistcoat air plant cloud bread intelligentsia, fam quinoa direct trade squid fingerstache.'
  }

}
