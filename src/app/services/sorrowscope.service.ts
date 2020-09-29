import { Injectable } from '@angular/core';
import {Horoscope} from "../models/Horoscope";

@Injectable({
  providedIn: 'root'
})
export class SorrowscopeService {
  horoscopes: Horoscope[] = [{
    signName: 'Aries',
    dateRange: 'Mar 21 - Apr 19',
  },
    {
      signName: 'Taurus',
      dateRange: 'Apr 20 - May 20',
    },
    {
      signName: 'Gemini',
      dateRange: 'May 21 - Jun 20',
    },
    {
      signName: 'Cancer',
      dateRange: 'Jun 21 - Jul 22',
    },
    {
      signName: 'Leo',
      dateRange: 'Jul 23 - Aug 22',
    },
    {
      signName: 'Virgo',
      dateRange: 'Aug 23 - Sep 22',
    },
    {
      signName: 'Libra',
      dateRange: 'Sep 23 - Oct 22',
    },
    {
      signName: 'Scorpio',
      dateRange: 'Oct 23 - Nov 21',
    },
    {
      signName: 'Saggitarius',
      dateRange: 'Nov 22 - Dec 21',
    },
    {
      signName: 'Capricorn',
      dateRange: 'Dec 22 - Jan 19',
    },
    {
      signName: 'Aquarius',
      dateRange: 'Jan 20 - Feb 18',
    },
    {
      signName: 'Pisces',
      dateRange: 'Feb 19 - Mar 20',
    },
  ];

  constructor() {}

  getHoroscope(signName: string) {
    return this.horoscopes.find(horoscope => horoscope.signName === signName)
  }

  getSorrowscope(sign: Horoscope): String {
    const randomNumber = Math.random()*100;
    return randomNumber +'Gluten-free tofu listicle, art party jianbing tumeric helvetica fixie adaptogen direct' +
      ' trade' +
      ' lumbersexual af mlkshk hoodie hashtag. Ugh leggings waistcoat air plant cloud bread intelligentsia, fam' +
      ' quinoa direct trade squid fingerstache.';
  }

}
