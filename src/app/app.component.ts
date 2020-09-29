import {Component, HostListener, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from "@angular/router";
import {fader, slider} from "./route-animations";
// import { slider, transformer, fader, stepper } from './router-animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slider
  ]
})
export class AppComponent implements OnInit{
  title = 'sorrowscopes';
  public viewportWidth: any;

  constructor(private router: Router) {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }

  ngOnInit(): void {
    this.viewportWidth = window.innerWidth;
  }
  prepareRoute(outlet: RouterOutlet) {
    if (this.isMobile)
      return outlet &&
        outlet.activatedRouteData &&
        outlet.activatedRouteData['mobileAnimation'];
    else
      return outlet &&
        outlet.activatedRouteData &&
        outlet.activatedRouteData['animation'];
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.viewportWidth = window.innerWidth;
  }

  get isMobile(): boolean {
    return this.viewportWidth <= 768;
  }
}

