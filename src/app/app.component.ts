import {Component, ElementRef, HostListener, QueryList, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  focusedSection: string;
  constructor(private el: ElementRef) {
  }
  isSectioninView() {
    const sections: Element[] = this.el.nativeElement.querySelectorAll('.section');
    for (let section of sections){
      const topWindowPos = window.screenY;
      const windowBottomPos = topWindowPos + window.screen.height;
      const screenMiddle = topWindowPos + ((windowBottomPos - topWindowPos) / 2);

      if (section.getBoundingClientRect().top < screenMiddle
        && section.getBoundingClientRect().bottom > screenMiddle) {
        /*
        console.log("Window Top: " +topWindowPos);
        console.log("Window bottom: " +windowBottomPos);
        console.log("Window Middle: "+screenMiddle);
        console.log("Element Top: " + section.getBoundingClientRect().top);
        console.log("Element Bottom: "+section.getBoundingClientRect().bottom);
        console.log("-----------------");
        */
        this.focusedSection = section.id;
      }
    }
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    this.isSectioninView();
  }

}
