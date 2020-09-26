import { Component, OnInit } from '@angular/core';
import {Horoscope} from "../../models/Horoscope";
import {SorrowscopeService} from "../../services/sorrowscope.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-sorrowscope',
  templateUrl: './sorrowscope.component.html',
  styleUrls: ['./sorrowscope.component.scss']
})
export class SorrowscopeComponent implements OnInit {
  sign: Horoscope;
  constructor(private sorrowscope: SorrowscopeService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sign = this.sorrowscope.getHoroscope(
      this.route.snapshot.params['signName']
    )
  }

}
