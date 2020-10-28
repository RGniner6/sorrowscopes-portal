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
  sorrowscope: String;
  constructor(private sorrowscopeService: SorrowscopeService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sign = this.sorrowscopeService.getHoroscope(
      this.route.snapshot.params['signName']
    )
    this.loadNewSorrowscope()
  }

  loadNewSorrowscope() {
    this.sorrowscopeService.getSorrowscope(this.sign).subscribe( sorrowscope => this.sorrowscope = sorrowscope.sorrowscope);
    // this.sorrowscope = this.sorrowscopeService.getPlaceHolderSorrowscope();
  }

}
