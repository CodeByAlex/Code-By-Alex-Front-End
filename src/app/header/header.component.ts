import {Component, ElementRef, HostListener} from '@angular/core';
import {SmoothScrollService} from "../smooth-scroll.service";
import {WindowService} from "../window.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isIn =false;
  vertPosition =0;
  prevVertPosition =0;
  constructor(private ss : SmoothScrollService, private windowService: WindowService, private _elementRef : ElementRef) { }

  toggleState(){
    let bool = this.isIn;
    this.isIn = bool == false ? true : false;
  }

  closeNav(){
    this.isIn=false;
  }

  scroll(eid, event){
    event.preventDefault();
    this.ss.smoothScroll(eid);
  }

  getWindow(){
    return this.windowService.nativeWindow;
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    this.prevVertPosition=this.vertPosition;
    this.vertPosition= this.windowService.getCurrentYPosition();
  }

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    const clickedInside = this._elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.closeNav();
    }
  }
}
