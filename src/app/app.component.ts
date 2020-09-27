import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
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
export class AppComponent {
  title = 'sorrowscopes';

  prepareRoute(outlet: RouterOutlet) {
    return outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation'];
  }
}

