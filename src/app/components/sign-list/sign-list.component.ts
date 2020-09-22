import { Component, OnInit } from '@angular/core';
import { Horoscope } from '../../models/Horoscope';

@Component({
  selector: 'app-sign-list',
  templateUrl: './sign-list.component.html',
  styleUrls: ['./sign-list.component.scss']
})
export class SignListComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }


  // signNames: [] = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Piseces' ];
  signList: Horoscope[] = [{
      signName: 'Aries',
      dateRange: 'Mar 21 - Apr 19',
      diagram: 'assets/sign1.svg'
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

}
