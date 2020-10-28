import {HostListener, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {
  public viewportWidth: any;
  public viewportHeight: any;

  constructor() {
    this.viewportWidth = window.innerWidth;
    this.viewportHeight = window.innerHeight;
  }

  get isMobile(): boolean {
    return this.viewportWidth <= 768;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.viewportWidth = window.innerWidth;
  }

  @HostListener('window:scroll', ['$event'])
  doSomething(event?) {
    // console.debug("Scroll Event", document.body.scrollTop);
    // see András Szepesházi's comment below
    // console.log("Scroll Event", window.pageYOffset );
  }
}
