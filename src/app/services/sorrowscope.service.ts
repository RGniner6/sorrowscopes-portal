import { Injectable } from '@angular/core';
import {Horoscope} from "../models/Horoscope";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable, throwError} from "rxjs";
import {Sorrowscope} from "../models/sorrowscope";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SorrowscopeService {
  private apiURL = `${environment.apiServerUrl}`;
  private prevSorrowscopes: Sorrowscope[] = [];
  constructor(private http: HttpClient) {
  }

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

  getHoroscope(signName: string) {
    return this.horoscopes.find(horoscope => horoscope.signName === signName)
  }

  getSorrowscope(sign: Horoscope): Observable<Sorrowscope> {
    return this.http.get<Sorrowscope>(this.apiURL);
      // .pipe(
      // map( sorrowscope => this.prevSorrowscopes.push(sorrowscope))
      // catchError(e => {
      //   console.log(e);
      //   return throwError(e);
      // })
  }

  getPlaceHolderSorrowscope(): string {
    const randomNumber = Math.floor(Math.random()*1000);
    return randomNumber +' <-- Random number Gluten-free tofu listicle, art helvetica fixie' +
      ' adaptogen' +
      ' direct' +
      ' trade' +
      ' lumbersexual af mlkshk hoodie hashtag. Ugh leggings waistcoat air plant cloud bread intelligentsia, fam' +
      ' quinoa direct trade squid fingerstache.';
  }

}
